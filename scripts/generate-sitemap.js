/**
 * generate-sitemap.js — Build a fresh sitemap.xml from current data.
 * Walks the file system for static routes and pulls slugs from data files
 * for dynamic routes.
 */
const fs = require("fs");
const path = require("path");

const BASE = "https://babymydog.com";
const TODAY = new Date().toISOString().split("T")[0];
const OUT = path.join(__dirname, "..", "public", "sitemap.xml");
const APP = path.join(__dirname, "..", "src", "app");
const DATA = path.join(__dirname, "..", "src", "data");

function urlEntry(loc, priority = "0.7", freq = "weekly") {
  return `  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
}

function walkStaticRoutes(dir, prefix = "") {
  // Returns array of route paths for every directory that has page.tsx and is NOT a dynamic ([foo]) segment.
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") && entry.name.endsWith("]")) continue;
    const fullPath = path.join(dir, entry.name);
    const routePath = `${prefix}/${entry.name}`;
    if (fs.existsSync(path.join(fullPath, "page.tsx"))) {
      routes.push(routePath);
    }
    routes.push(...walkStaticRoutes(fullPath, routePath));
  }
  return routes;
}

function extractSlugs(tsFile, varName) {
  // Pull all slug: "xxx" strings from inside a named `export const <var> = [...]` block.
  const txt = fs.readFileSync(path.join(DATA, tsFile), "utf-8");
  const blockRe = new RegExp(`${varName}[^=]*=\\s*\\[([\\s\\S]*?)\\n\\];`);
  const block = txt.match(blockRe);
  const source = block ? block[1] : txt;
  return [...new Set((source.match(/slug:\s*"([^"]+)"/g) || []).map((s) => s.match(/"([^"]+)"/)[1]))];
}

function main() {
  const urls = [];

  // 1. Homepage
  urls.push(urlEntry(`${BASE}/`, "1.0", "weekly"));

  // 2. Static routes (any dir under src/app with a page.tsx, excluding dynamic segments)
  const staticRoutes = walkStaticRoutes(APP);
  for (const route of staticRoutes) {
    // Home priority handled above; lower priority for privacy/terms/disclosure
    const low = ["/privacy", "/terms", "/disclosure"].includes(route);
    const hub = ["/blog", "/breeds", "/best", "/collections", "/gifts", "/quiz", "/about", "/compare"].includes(route);
    const priority = low ? "0.3" : hub ? "0.8" : "0.7";
    urls.push(urlEntry(`${BASE}${route}`, priority, "weekly"));
  }

  // 3. Dynamic routes
  const breedSlugs = extractSlugs("breeds.ts", "breeds");
  for (const slug of breedSlugs) urls.push(urlEntry(`${BASE}/breeds/${slug}`, "0.8", "weekly"));

  const blogSlugs = extractSlugs("blog-posts.ts", "blogPosts");
  for (const slug of blogSlugs) urls.push(urlEntry(`${BASE}/blog/${slug}`, "0.6", "weekly"));

  const giftSlugs = extractSlugs("gifts.ts", "gifts");
  for (const slug of giftSlugs) urls.push(urlEntry(`${BASE}/gifts/${slug}`, "0.7", "weekly"));

  const productCategorySlugs = extractSlugs("products.ts", "productCategories");
  for (const slug of productCategorySlugs) urls.push(urlEntry(`${BASE}/best/${slug}`, "0.8", "weekly"));

  const comparisonSlugs = extractSlugs("comparisons.ts", "comparisons");
  for (const slug of comparisonSlugs) urls.push(urlEntry(`${BASE}/compare/${slug}`, "0.8", "monthly"));

  // Dedup (some static-file routes overlap dynamic-param routes, e.g. /breeds/bulldog)
  const seen = new Set();
  const unique = [];
  for (const u of urls) {
    const loc = u.match(/<loc>([^<]+)<\/loc>/)[1];
    if (seen.has(loc)) continue;
    seen.add(loc);
    unique.push(u);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique.join("\n")}\n</urlset>\n`;
  fs.writeFileSync(OUT, xml);

  // Summary
  const byPrefix = {};
  for (const loc of seen) {
    const p = loc.replace(BASE, "").split("/")[1] || "/";
    byPrefix[p] = (byPrefix[p] || 0) + 1;
  }
  console.log(`Wrote ${unique.length} URLs to sitemap.xml`);
  console.log("By section:");
  Object.entries(byPrefix).sort((a, b) => b[1] - a[1]).forEach(([p, c]) => console.log(`  /${p === "/" ? "" : p}: ${c}`));
}

main();
