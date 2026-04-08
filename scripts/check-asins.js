const fs = require("fs");
const path = require("path");

const DELAY_MS = 2000;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function extractAsins(dir) {
  const asins = new Map();
  function scan(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") {
        scan(full);
      } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx") || entry.name.endsWith(".json")) {
        const content = fs.readFileSync(full, "utf8");
        const matches = [
          ...content.matchAll(/asin[":]\s*"?([A-Z0-9]{10})"?/g),
          ...content.matchAll(/\/dp\/([A-Z0-9]{10})/g),
        ];
        for (const m of matches) {
          const asin = m[1];
          if (!asins.has(asin)) asins.set(asin, []);
          const rel = path.relative(dir, full).replace(/\\/g, "/");
          if (!asins.get(asin).includes(rel)) asins.get(asin).push(rel);
        }
      }
    }
  }
  scan(dir);
  return asins;
}

async function checkAsin(asin) {
  const url = `https://www.amazon.com/dp/${asin}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });

    const body = await res.text();
    const finalUrl = res.url || url;

    // Check for signs of a valid product page
    const hasProductTitle = body.includes('id="productTitle"') || body.includes('id="title"');
    const hasAddToCart = body.includes("add-to-cart") || body.includes("Add to Cart");
    const hasDogPage = body.includes("#702") || body.includes("Currently unavailable");
    const isSearchRedirect = finalUrl.includes("/s?") || finalUrl.includes("/s/ref=");
    const is404 = body.includes("looking for is not available") || body.includes("no results");
    const isRobot = body.includes("robot") || body.includes("captcha") || body.includes("automated");

    if (isRobot) {
      return { asin, status: "CAPTCHA", ok: null };
    }
    if (isSearchRedirect || is404) {
      return { asin, status: "DEAD", ok: false };
    }
    if (hasProductTitle || hasAddToCart) {
      return { asin, status: "ALIVE", ok: true };
    }
    if (hasDogPage) {
      return { asin, status: "UNAVAILABLE", ok: false };
    }
    // If we got a 200 and none of the above, it's probably valid
    if (res.status === 200) {
      return { asin, status: "LIKELY_OK", ok: true };
    }
    return { asin, status: `HTTP_${res.status}`, ok: null };
  } catch (e) {
    return { asin, status: "ERROR", ok: null, error: e.message };
  }
}

async function main() {
  const srcDir = path.join(__dirname, "..", "src");
  console.log("Scanning src/ for ASINs...\n");

  const asins = extractAsins(srcDir);
  const sorted = [...asins.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`Found ${sorted.length} unique ASINs\n`);

  const results = { alive: [], dead: [], captcha: [], uncertain: [] };

  for (let i = 0; i < sorted.length; i++) {
    const [asin, files] = sorted[i];
    process.stdout.write(`[${i + 1}/${sorted.length}] ${asin} ... `);

    const result = await checkAsin(asin);

    if (result.status === "CAPTCHA") {
      console.log("⚠ CAPTCHA (Amazon blocked us — remaining results unreliable)");
      results.captcha.push({ asin, files });
      // Once we hit captcha, all subsequent will too — stop checking
      console.log("\nAmazon is blocking automated requests. Stopping.\n");
      // Mark remaining as unchecked
      for (let j = i + 1; j < sorted.length; j++) {
        results.captcha.push({ asin: sorted[j][0], files: sorted[j][1] });
      }
      break;
    } else if (result.ok === true) {
      console.log("✓ OK");
      results.alive.push({ asin, files });
    } else if (result.ok === false) {
      console.log(`✗ ${result.status}`);
      results.dead.push({ asin, files, reason: result.status });
    } else {
      console.log(`? ${result.status}`);
      results.uncertain.push({ asin, files, reason: result.status });
    }

    await sleep(DELAY_MS);
  }

  console.log("\n" + "=".repeat(60));
  console.log(`✓ ALIVE: ${results.alive.length}`);
  console.log(`✗ DEAD:  ${results.dead.length}`);
  console.log(`⚠ CAPTCHA/BLOCKED: ${results.captcha.length}`);
  console.log(`? UNCERTAIN: ${results.uncertain.length}`);

  if (results.dead.length > 0) {
    console.log("\n--- DEAD ASINs (need replacement) ---");
    for (const d of results.dead) {
      console.log(`  ${d.asin}  (${d.reason})  — used in: ${d.files.join(", ")}`);
    }
  }

  if (results.captcha.length > 0) {
    console.log(`\n--- CAPTCHA: Amazon blocked after ${results.alive.length + results.dead.length + results.uncertain.length} checks ---`);
    console.log("Run again later or check remaining manually.");
  }

  const report = {
    checked: new Date().toISOString(),
    total: sorted.length,
    ...Object.fromEntries(Object.entries(results).map(([k, v]) => [k, v.length])),
    deadAsins: results.dead,
  };
  fs.writeFileSync(path.join(__dirname, "asin-check-report.json"), JSON.stringify(report, null, 2));
  console.log("\nSaved: scripts/asin-check-report.json");
}

main().catch(console.error);
