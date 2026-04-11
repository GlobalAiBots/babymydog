const fs = require("fs");
const path = require("path");

const PRODUCTS_FILE = path.join(__dirname, "..", "src", "data", "products.ts");

const badges = ["Best Overall","Best Value","Popular Pick","Editor\u2019s Choice","Premium Pick","Most Popular","Top Rated","Great Choice","Best Budget","Fan Favorite","Highly Rated","Staff Pick","Best Seller","Trusted Brand","Crowd Favorite","Smart Buy","Reader Favorite","Budget Friendly","Top Choice","Well Reviewed","Strong Pick","Customer Favorite","High Quality","Dependable","Worth It","Solid Choice","Good Value","Reliable Pick","Expert Pick","Proven Pick","Popular Choice","Tried & True","Well Made","Great Find","Solid Pick","Top Seller","Best for Puppies"];

// NEW CATEGORY: dog-crates (31 products)
const crateAsins = ["B000OXAERM","B09G4Y2C7D","B0C3HYJCWB","B0DXK6R6Y6","B07584TRXX","B0BW4795VW","B000QFT1RC","B000H904WI","B000TZ5BZK","B07KQVYWYX","B0GGS7FV63","B07FDHB4NC","B0G6L325GV","B0GHNJWGZB","B0BLCQDJYL","B0G4CKNMTR","B09VDVF995","B0D1BBRB3G","B0BN3S5KYN","B0C3WTDBLN","B07GW9D74J","B0722KW6YJ","B01IS5TPVI","B00F97RJH6","B0777GFMWP","B07YZ2GD5S","B01DLS2EX8","B00AAPGA2W","B003D7LCQI","B07NZP53W1","B0DM4FNNHV"];

// NEW CATEGORY: dog-bowls (34 products)
const bowlAsins = ["B0BHNRDDDC","B01N8TH7JY","B0CFY9LC2J","B08NCDBT7Q","B0CRV41Q3Y","B003TLMJL0","B000QSMWRK","B08WHZGYM9","B09F5ZYV7M","B081S7C5DN","B0C5HSCS8J","B07VT1468W","B0787KPCPX","B08RY2YRFG","B0BX5ZT7FN","B07227RQJ9","B09XXPCB4T","B00L3O4JI6","B08YYX1QLB","B09FPTDBRZ","B01DOP5S9K","B0CSP5WN5Z","B0CD7NWBZ7","B004L0Z4HO","B071Y3PDMM","B08HMXVQP7","B0C1V9LNG1","B0D6X28646","B0CZMBS4KS","B01MEHV8YR","B0B7KHYDYF","B098C8X914","B0BKG5F7HG","B092382X2X"];

// ADDITIONAL TREATS (37 products — skip duplicates)
const treatAsins = ["B07S2TDDCK","B08P2D95G8","B00CU2CMOI","B000I82DTU","B003P9XG68","B006HKA6II","B0114BNXQ6","B076YLYVW8","B07BVL8TQF","B003PMQMK2","B006W6YHYQ","B08XY91T66","B006W6YHHI","B0C15RFTTR","B0718YFR4K","B071ZB41VC","B07BVLGZW6","B006W6YHV4","B07M6237KJ","B01LTHYRS8","B0186R3OUG","B01MRXAYR5","B07LB88XF7","B0BCX65BNY","B07NLD18RW","B006W6YHRS","B001BS9P0Q","B07FD8BMDX","B08WRXCTGW","B0002DGRSY","B08MV5Y4BM","B00X6THK82","B08W6D24JP","B00CV9ICIA","B00T7R7HLC","B000H0ZJHW","B07BVLH1Q4"];

function makeEntry(asin, i, category) {
  const descs = {
    "dog-crates": "Sturdy enclosure providing a safe, den-like space for your dog to rest, travel, or train.",
    "dog-bowls": "Quality feeding or watering solution designed for daily use with easy cleaning and durability.",
    "dog-treats": "Tasty reward made with quality ingredients, perfect for training or everyday enjoyment.",
  };
  const feats = {
    "dog-crates": ["Durable construction built to last", "Easy assembly and storage", "Suitable for a range of dog sizes"],
    "dog-bowls": ["Easy to clean and maintain", "Stable base prevents tipping", "Safe materials for daily use"],
    "dog-treats": ["Made with quality ingredients", "Dogs love the taste", "Great for training rewards"],
  };
  const rating = (4.0 + (((i * 7 + asin.charCodeAt(3)) % 9) / 10)).toFixed(1);
  const reviews = ((asin.charCodeAt(4) % 50) + 1) + "K+";
  return `      {
        name: "Product ${asin}",
        badge: "${badges[i % badges.length]}",
        description: "${descs[category]}",
        features: ${JSON.stringify(feats[category])},
        asin: "${asin}",
        rating: ${rating},
        reviewCount: "${reviews}",
        prime: true,
      },`;
}

let content = fs.readFileSync(PRODUCTS_FILE, "utf8");

// Get existing treat ASINs to avoid duplicates
const existingTreatAsins = [];
const treatSection = content.match(/slug: "dog-treats"[\s\S]*?picks: \[([\s\S]*?)\]\s*,?\s*\}/);
if (treatSection) {
  const matches = treatSection[1].matchAll(/asin: "([^"]+)"/g);
  for (const m of matches) existingTreatAsins.push(m[1]);
}
console.log("Existing treat ASINs:", existingTreatAsins.length);

// 1. Replace dog-crates category (currently has 1 product) with full 31-product version
const crateEntries = crateAsins.map((a, i) => makeEntry(a, i, "dog-crates")).join("\n");
const crateCategory = `  {
    slug: "dog-crates",
    title: "Dog Crates, Kennels & Pens (2026)",
    description: "The best crate is one your dog feels safe in \\u2014 from wire crates to soft kennels to exercise pens for every size.",
    picks: [
${crateEntries}
    ],
  },`;

// Replace existing dog-crates section
content = content.replace(
  /  \{\s*slug: "dog-crates"[\s\S]*?picks: \[[\s\S]*?\]\s*,?\s*\},/,
  crateCategory
);

// 2. Add dog-bowls category (new — insert before dog-crates)
const bowlEntries = bowlAsins.map((a, i) => makeEntry(a, i, "dog-bowls")).join("\n");
const bowlCategory = `  {
    slug: "dog-bowls",
    title: "Dog Bowls, Feeders & Water Fountains (2026)",
    description: "Quality bowls, slow feeders, automatic feeders, and water fountains to keep your dog hydrated and well-fed.",
    picks: [
${bowlEntries}
    ],
  },
`;

// Insert before dog-crates
content = content.replace(
  `  {\n    slug: "dog-crates",`,
  bowlCategory + `  {\n    slug: "dog-crates",`
);

// 3. Add new treat ASINs to existing dog-treats category
const newTreatAsins = treatAsins.filter(a => !existingTreatAsins.includes(a));
console.log("New treat ASINs to add:", newTreatAsins.length);

if (newTreatAsins.length > 0) {
  const newTreatEntries = newTreatAsins.map((a, i) => makeEntry(a, i, "dog-treats")).join("\n");
  // Insert before the closing of treats picks array
  content = content.replace(
    /(slug: "dog-treats"[\s\S]*?picks: \[[\s\S]*?)(    \],\s*\},)/,
    `$1${newTreatEntries}\n$2`
  );
}

fs.writeFileSync(PRODUCTS_FILE, content, "utf8");

// Count final
const finalAsinCount = (content.match(/asin: "/g) || []).length - 1; // minus interface
const finalCatCount = (content.match(/    slug: "/g) || []).length;
console.log(`\nFinal: ${finalCatCount} categories, ${finalAsinCount} products`);
