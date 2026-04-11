const fs = require("fs");
const path = require("path");

const PRODUCTS_FILE = path.join(__dirname, "..", "src", "data", "products.ts");

// All name mappings for batch 2 products
const nameMap = {
  // CRATES
  "B000OXAERM": "MidWest iCrate 30-Inch for Medium Breeds",
  "B09G4Y2C7D": "Amazon Basics Foldable Metal Wire Dog Crate",
  "B0C3HYJCWB": "FXW Rollick Dog Playpen 24-Inch 8 Panels",
  "B0DXK6R6Y6": "FDW Extra Large 48-Inch Folding Dog Crate",
  "B07584TRXX": "Amazon Basics Foldable Metal Exercise Pen",
  "B0BW4795VW": "FXW Homeplus Indoor Dog Playpen 24-Inch",
  "B000QFT1RC": "MidWest iCrate 42-Inch for Large Breeds",
  "B000H904WI": "MidWest 24-Inch Exercise Pen",
  "B000TZ5BZK": "Replacement Crate Pan for MidWest Crates",
  "B07KQVYWYX": "Explore Land Dog Crate Cover 42-Inch",
  "B0GGS7FV63": "Sweetcrispy 24-Inch Single Door Dog Crate",
  "B07FDHB4NC": "IRIS USA 24-Inch 4-Panel Dog Playpen",
  "B0G6L325GV": "NEWBULIG 4-Panel 24-Inch Puppy Playpen",
  "B0GHNJWGZB": "DUMOS 30-Inch Medium Dog Crate",
  "B0BLCQDJYL": "PJYuCien Foldable Playpen with Bottom Pad",
  "B0G4CKNMTR": "Medium 36-Inch Double Door Dog Crate",
  "B09VDVF995": "GOOZII Portable Foldable Pet Playpen Tent",
  "B0D1BBRB3G": "XVISHX 42x42-Inch Puppy Playpen with Gate",
  "B0BN3S5KYN": "Love\u2019s Cabin Portable Pet Playpen",
  "B0C3WTDBLN": "Gorilla Grip Dog Crate Cover for Amazon Basics",
  "B07GW9D74J": "HiCaptain Dog Crate Cover 36-Inch",
  "B0722KW6YJ": "Amazon Basics Portable Folding Soft Dog Crate",
  "B01IS5TPVI": "FurHaven Portable Pet Playpen Extra Large",
  "B00F97RJH6": "Foldable 8-Panel Metal Puppy Exercise Pen",
  "B0777GFMWP": "Yaheetech 40-Inch Heavy Duty Dog Playpen",
  "B07YZ2GD5S": "BestPet 40-Inch 16-Panel Heavy Duty Pen",
  "B01DLS2EX8": "MidWest New World 42-Inch Crate Large",
  "B00AAPGA2W": "Petmate Sky Kennel Airline Compliant Crate",
  "B003D7LCQI": "MidWest XL 48-Inch Dog Crate Cover",
  "B07NZP53W1": "BestPet 48-Inch Foldable Metal Dog Crate",
  "B0DM4FNNHV": "EliteField 3-Door Folding Soft Dog Crate",
  // BOWLS
  "B0BHNRDDDC": "Veken Cat Water Fountain Filters 8-Pack",
  "B01N8TH7JY": "Hoki Found Waterproof Pet Feeding Mat",
  "B0CFY9LC2J": "Absorbent Pet Feeding Mat Waterproof Backing",
  "B08NCDBT7Q": "Veken 95oz Pet Water Fountain",
  "B0CRV41Q3Y": "XIAZ Elevated Dog Bowls Large Breed Stand",
  "B003TLMJL0": "Loving Pets Bella Stainless Steel Dog Bowl",
  "B000QSMWRK": "Gamma2 Vittles Vault Pet Food Storage",
  "B08WHZGYM9": "IRIS USA Airtight Dog Food Storage 30 lbs",
  "B09F5ZYV7M": "Cibaabo Dog Water Bottle with Food Container",
  "B081S7C5DN": "Gorilla Grip Waterproof Silicone Feeding Mat",
  "B0C5HSCS8J": "MateeyLife Slow Feeder Dog Bowls 2-Pack",
  "B07VT1468W": "Collapsible Dog Travel Bowls 2-Pack",
  "B0787KPCPX": "Outward Hound Fun Feeder Slo Bowl Large",
  "B08RY2YRFG": "DR CATCH Dog Puzzle Toy Mental Enrichment",
  "B0BX5ZT7FN": "Absorbent Dog Mat for Food and Water Bowl",
  "B07227RQJ9": "Amazon Basics Gravity Water Dispenser 1 Gal",
  "B09XXPCB4T": "PETSTA Dog Puzzle Toys IQ Training",
  "B00L3O4JI6": "Outward Hound Fun Feeder Slo Bowl Medium",
  "B08YYX1QLB": "Collapsible Dog Bowls for Travel 2-Pack",
  "B09FPTDBRZ": "LUKITO Lick Mat for Dogs & Cats 2-Pack",
  "B01DOP5S9K": "Amazon Basics Stainless Steel Dog Bowl 38oz",
  "B0CSP5WN5Z": "SMILOOL Silicone Pet Feeding Mat",
  "B0CD7NWBZ7": "MateeyLife Silicone Dog Food Mat Waterproof",
  "B004L0Z4HO": "IRIS USA Dog Food Storage Container 58 lbs",
  "B071Y3PDMM": "Hubulk Stainless Steel Dog Bowls with Scoop",
  "B08HMXVQP7": "Ptlom Pet Placemat for Food and Water",
  "B0C1V9LNG1": "COMESOON Elevated Dog Bowls Adjustable Height",
  "B0D6X28646": "IRIS USA Dog Food Storage with Wheels 30 lbs",
  "B0CZMBS4KS": "IRIS USA Dog Food Storage 2-Pack 30 lbs",
  "B01MEHV8YR": "Hubulk Waterproof Silicone Dog Feeding Mat",
  "B0B7KHYDYF": "Coldest Dog Bowl Insulated Stainless Steel",
  "B098C8X914": "Gorilla Grip Stainless Steel Dog Bowls 2-Pack",
  "B0BKG5F7HG": "RIZZARI 8L Gravity Dog Water Dispenser",
  "B092382X2X": "Neater Pet Brands Waterproof Silicone Mat",
  // TREATS (new ones that were added as placeholders)
  "B006HKA6II": "Greenies Pill Pockets Capsule Size Chicken",
  "B076YLYVW8": "Greenies Original Petite Dental Dog Treats",
  "B07BVL8TQF": "Greenies Hip & Joint Supplements Soft Chews",
  "B08XY91T66": "Blue Buffalo Stix Natural Dog Treats",
  "B0C15RFTTR": "Greenies Dental Treats for Large Dogs",
  "B0718YFR4K": "Greenies Weight Management Petite Treats",
  "B071ZB41VC": "Greenies Blueberry Flavor Petite Treats",
  "B07BVLGZW6": "Greenies Fresh Mint Flavor Regular Treats",
  "B006W6YHV4": "Greenies Original Large Dental Dog Treats",
  "B07M6237KJ": "Milk-Bone Soft & Chewy Chicken Recipe",
  "B01LTHYRS8": "Zuke\u2019s Mini Naturals Chicken Training Treats",
  "B0186R3OUG": "Pup-Peroni Original Beef Flavor Dog Treats",
  "B01MRXAYR5": "Old Mother Hubbard Classic Biscuits",
  "B07LB88XF7": "Blue Buffalo Bits Chicken Training Treats",
  "B0BCX65BNY": "Milk-Bone Flavor Snacks Dog Biscuits",
  "B07NLD18RW": "Rachael Ray Nutrish Burger Bites Treats",
  "B006W6YHRS": "Greenies Aging Care Regular Dental Treats",
  "B001BS9P0Q": "Bil-Jac Liver Dog Treats",
  "B07FD8BMDX": "Three Dog Bakery Soft Baked Cookies",
  "B08WRXCTGW": "Full Moon Chicken Jerky Dog Treats",
  "B0002DGRSY": "Charlee Bear Original Dog Treats Liver",
  "B08MV5Y4BM": "Wholesome Pride Sweet Potato Chews",
  "B00X6THK82": "Stewart Pro-Treat Freeze Dried Liver",
  "B08W6D24JP": "Jiminy\u2019s Cricket Protein Dog Treats",
  "B00CV9ICIA": "Rocco & Roxie Gourmet Jerky Sticks",
  "B00T7R7HLC": "Fruitables Skinny Minis Pumpkin Treats",
  "B000H0ZJHW": "Zuke\u2019s Mini Naturals Dog Training Treats",
  "B07BVLH1Q4": "Greenies Fresh Mint Petite Dental Treats",
};

// Custom descriptions by category
const descMap = {
  // Crates
  "B000OXAERM": "Mid-size wire crate with double doors and divider panel that grows with your dog from puppy to adult.",
  "B09G4Y2C7D": "Affordable foldable wire crate with a slide-out tray for easy cleaning and single-door design.",
  "B0C3HYJCWB": "Portable 8-panel playpen that sets up in seconds and folds flat for storage or travel.",
  "B0DXK6R6Y6": "Extra large 48-inch crate built for giant breeds with heavy-duty wire construction.",
  "B07584TRXX": "Foldable metal exercise pen creating a safe outdoor or indoor play area for dogs of any size.",
  "B0BW4795VW": "Indoor playpen with 6 panels and a gate door, perfect for puppies or small dogs.",
  "B000QFT1RC": "42-inch wire crate sized for large breeds with double doors and included divider panel.",
  "B000H904WI": "Compact 24-inch exercise pen ideal for small dogs and puppies in apartments.",
  "B000TZ5BZK": "Replacement plastic tray that fits standard MidWest crates for easy swap-outs.",
  "B07KQVYWYX": "Breathable polyester crate cover that creates a den-like environment and reduces anxiety.",
  "B0GGS7FV63": "Budget-friendly 24-inch wire crate with a single door and removable tray.",
  "B07FDHB4NC": "Molded plastic 4-panel playpen with a lockable door and smooth rounded edges.",
  "B0G6L325GV": "Lightweight 4-panel puppy playpen with a gate that sets up without tools.",
  "B0GHNJWGZB": "30-inch medium dog crate with double doors and a slide-out cleaning tray.",
  "B0BLCQDJYL": "Foldable playpen with an included bottom pad to protect floors from scratches.",
  "B0G4CKNMTR": "36-inch double-door crate sized for medium breeds with heavy-gauge wire.",
  "B09VDVF995": "Portable pop-up pet tent that folds into a carrying case for camping or travel.",
  "B0D1BBRB3G": "Large 42x42-inch playpen with a walk-through gate for easy access.",
  "B0BN3S5KYN": "Lightweight portable playpen that pops open and folds flat with a carrying bag.",
  "B0C3WTDBLN": "Custom-fit crate cover designed specifically for Amazon Basics wire crates.",
  "B07GW9D74J": "Durable polyester crate cover with mesh panels for airflow and a roll-up front door.",
  "B0722KW6YJ": "Soft-sided portable crate that folds flat and includes a carrying handle for travel.",
  "B01IS5TPVI": "Extra-large portable playpen with mesh sides and a removable floor mat.",
  "B00F97RJH6": "Classic 8-panel metal exercise pen with a walk-through gate at a great price.",
  "B0777GFMWP": "40-inch tall heavy-duty playpen with 8 panels for larger dogs that can jump.",
  "B07YZ2GD5S": "16-panel heavy-duty exercise pen configurable into multiple shapes and sizes.",
  "B01DLS2EX8": "MidWest New World 42-inch crate with updated latches and a leak-proof pan.",
  "B00AAPGA2W": "Hard-shell airline-approved kennel meeting most cargo requirements for air travel.",
  "B003D7LCQI": "Extra-large 48-inch crate cover with a roll-up front panel for easy access.",
  "B07NZP53W1": "48-inch foldable metal crate for extra large breeds with a removable divider.",
  "B0DM4FNNHV": "3-door soft-sided crate with mesh windows for ventilation and a steel frame.",
  // Bowls
  "B0BHNRDDDC": "Replacement carbon filters for Veken pet water fountains, sold in a convenient 8-pack.",
  "B01N8TH7JY": "Waterproof silicone mat that catches spills and crumbs around food and water bowls.",
  "B0CFY9LC2J": "Absorbent microfiber feeding mat with a waterproof rubber backing to protect floors.",
  "B08NCDBT7Q": "95-ounce pet water fountain with ultra-quiet pump and triple filtration system.",
  "B0CRV41Q3Y": "Elevated double bowl stand for large breeds that reduces neck strain during meals.",
  "B003TLMJL0": "Stylish stainless steel bowl with a colorful rubberized base that prevents sliding.",
  "B000QSMWRK": "Airtight pet food storage container that keeps kibble fresh and pests out.",
  "B08WHZGYM9": "33-quart airtight food storage container with a snap-lock lid and scoop.",
  "B09F5ZYV7M": "Portable dog water bottle with a built-in food container for walks and hikes.",
  "B081S7C5DN": "Premium silicone feeding mat with raised edges that contain spills and messes.",
  "B0C5HSCS8J": "Two-pack slow feeder bowls with different maze patterns to extend mealtime.",
  "B07VT1468W": "Two collapsible silicone travel bowls with carabiner clips for on-the-go hydration.",
  "B0787KPCPX": "Large 4-cup capacity slow feeder with a flower pattern that extends eating by 10x.",
  "B08RY2YRFG": "Interactive puzzle toy that dispenses treats and provides mental stimulation.",
  "B0BX5ZT7FN": "Absorbent mat designed to catch water drips and food mess around bowls.",
  "B07227RQJ9": "Simple gravity-fed water dispenser holding one gallon with no batteries needed.",
  "B09XXPCB4T": "Multi-level puzzle feeder that challenges dogs to find hidden treats.",
  "B00L3O4JI6": "Medium-size slow feeder bowl with ridges that slow eating and improve digestion.",
  "B08YYX1QLB": "Lightweight collapsible bowls for travel with a snap-on lid to prevent spills.",
  "B09FPTDBRZ": "Two-pack lick mats with suction cups for spreading peanut butter or wet food.",
  "B01DOP5S9K": "Basic stainless steel dog bowl at 38 ounces, dishwasher safe and rust-resistant.",
  "B0CSP5WN5Z": "Non-slip silicone feeding mat with a lip edge to contain food and water messes.",
  "B0CD7NWBZ7": "Waterproof silicone mat with a modern design and raised edges for spill containment.",
  "B004L0Z4HO": "Large 58-pound capacity food storage container with a snap-tight lid and wheels.",
  "B071Y3PDMM": "Two stainless steel bowls plus a measuring scoop in one convenient set.",
  "B08HMXVQP7": "Thin waterproof placemat for food and water bowls that wipes clean easily.",
  "B0C1V9LNG1": "Adjustable-height elevated bowl stand that accommodates dogs as they grow.",
  "B0D6X28646": "30-pound capacity food storage on wheels for easy refilling and movement.",
  "B0CZMBS4KS": "Two-pack of 30-pound food storage containers for multi-dog households.",
  "B01MEHV8YR": "Waterproof silicone mat with a bone-shaped design and non-slip bottom.",
  "B0B7KHYDYF": "Double-wall insulated stainless steel bowl that keeps water cold for hours.",
  "B098C8X914": "Two-pack stainless steel bowls with non-skid rubber bases.",
  "B0BKG5F7HG": "8-liter gravity water dispenser for continuous fresh water throughout the day.",
  "B092382X2X": "Premium waterproof silicone pet mat from Neater Pet Brands.",
};

let content = fs.readFileSync(PRODUCTS_FILE, "utf8");
let replaced = 0;

for (const [asin, name] of Object.entries(nameMap)) {
  const placeholder = `name: "Product ${asin}"`;
  if (content.includes(placeholder)) {
    const desc = descMap[asin] || "Quality dog product designed for everyday use and built to last.";
    content = content.replace(
      placeholder,
      `name: ${JSON.stringify(name)}`
    );
    // Also replace the generic description if it's still a placeholder
    replaced++;
  }
}

// Also replace generic descriptions for crates/bowls
for (const [asin, desc] of Object.entries(descMap)) {
  const genericCrate = `description: "Sturdy enclosure providing a safe, den-like space for your dog to rest, travel, or train."`;
  const genericBowl = `description: "Quality feeding or watering solution designed for daily use with easy cleaning and durability."`;
  const genericTreat = `description: "Tasty reward made with quality ingredients, perfect for training or everyday enjoyment."`;

  // Find the product block for this ASIN and replace its description
  const asinPos = content.indexOf(`asin: "${asin}"`);
  if (asinPos === -1) continue;

  // Look backward for the description line
  const blockStart = content.lastIndexOf("{", asinPos);
  const blockEnd = content.indexOf("}", asinPos);
  const block = content.slice(blockStart, blockEnd + 1);

  for (const generic of [genericCrate, genericBowl, genericTreat]) {
    if (block.includes(generic.slice(14, 40))) { // partial match
      const newBlock = block.replace(
        /description: "[^"]+"/,
        `description: ${JSON.stringify(desc)}`
      );
      content = content.slice(0, blockStart) + newBlock + content.slice(blockEnd + 1);
      break;
    }
  }
}

fs.writeFileSync(PRODUCTS_FILE, content, "utf8");

// Verify
const remaining = (content.match(/name: "Product B/g) || []).length;
console.log(`Replaced ${replaced} placeholder names`);
console.log(`Remaining placeholders: ${remaining}`);
