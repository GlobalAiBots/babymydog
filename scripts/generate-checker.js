const fs = require("fs");
const path = require("path");

function extractAsins(dir) {
  const asins = new Map();
  function scan(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") {
        scan(full);
      } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
        const content = fs.readFileSync(full, "utf8");
        const lines = content.split("\n");
        for (let i = 0; i < lines.length; i++) {
          const asinMatches = [...lines[i].matchAll(/(?:asin:\s*"|\/dp\/)([A-Z0-9]{10})/g)];
          for (const m of asinMatches) {
            const asin = m[1];
            if (!asins.has(asin)) asins.set(asin, { files: [], name: "" });
            const rel = path.relative(dir, full).split(path.sep).join("/");
            if (!asins.get(asin).files.includes(rel)) asins.get(asin).files.push(rel);
            const ctx = lines.slice(Math.max(0, i - 3), i + 3).join(" ");
            const nameMatch = ctx.match(/name:\s*"([^"]+)"/) || ctx.match(/>([^<]{5,50})<\/a>/);
            if (nameMatch && !asins.get(asin).name) asins.get(asin).name = nameMatch[1];
          }
        }
      }
    }
  }
  scan(dir);
  return asins;
}

const asins = extractAsins(path.join(__dirname, "..", "src"));
const sorted = [...asins.entries()].sort((a, b) => a[0].localeCompare(b[0]));

let rows = "";
sorted.forEach(([asin, info], i) => {
  rows += `<tr>
    <td>${i + 1}</td>
    <td class="asin">${asin}</td>
    <td>${info.name || "\u2014"}</td>
    <td><a href="https://www.amazon.com/dp/${asin}?tag=babymydog03-20" target="_blank">Open on Amazon \u2197</a></td>
    <td class="files">${info.files.join(", ")}</td>
  </tr>`;
});

const html = `<!DOCTYPE html>
<html><head><title>BabyMyDog ASIN Checker</title>
<style>
body{font-family:system-ui;max-width:1100px;margin:40px auto;padding:0 20px;background:#faf8f5}
h1{color:#1a1a1a}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)}
th{background:#C4704B;color:#fff;text-align:left;padding:10px 14px;font-size:13px}
td{padding:8px 14px;border-bottom:1px solid #f0eeeb;font-size:13px}
tr:hover{background:#fef9f5}
a{color:#C4704B;text-decoration:none}a:hover{text-decoration:underline}
.asin{font-family:monospace;font-weight:bold}
.files{color:#999;font-size:11px}
p{color:#666;margin-bottom:20px}
</style></head><body>
<h1>BabyMyDog ASIN Checker (${sorted.length} ASINs)</h1>
<p>Click each "Open on Amazon" link to verify it loads a real product page.<br>
Dead links will show "Page not found" or redirect to Amazon search.<br>
Note any dead ASINs and their row numbers so we can replace them.</p>
<table>
<tr><th>#</th><th>ASIN</th><th>Product Name</th><th>Amazon Link</th><th>Source Files</th></tr>
${rows}
</table>
</body></html>`;

fs.writeFileSync(path.join(__dirname, "asin-checker.html"), html);
console.log(`Created: scripts/asin-checker.html (${sorted.length} ASINs)`);
console.log("Open this file in your browser to verify all ASINs.");
