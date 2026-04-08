export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  picks: ProductPick[];
}

export interface ProductPick {
  name: string;
  badge: string;
  description: string;
  features: string[];
  asin: string;
  price: string;
  rating: number;
  reviewCount: string;
  prime: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "dog-beds",
    title: "Best Dog Beds (2026)",
    description:
      "A great dog bed should match your dog\u2019s size and sleep style, with durable covers and supportive fill that holds up over time.",
    picks: [
      {
        name: "Casper Dog Bed",
        badge: "Best Overall",
        description:
          "Memory foam construction with pressure-relieving support and a machine-washable microfiber cover.",
        features: [
          "Dual-layer memory foam for joint support",
          "Machine-washable removable cover",
          "Available in 3 sizes (S/M/L/XL)",
        ],
        asin: "B09XX5RKWB",
        price: "$139.00",
        rating: 4.5,
        reviewCount: "12K+",
        prime: true,
      },
      {
        name: "Furhaven Orthopedic Sofa Bed",
        badge: "Best Budget",
        description:
          "Egg-crate orthopedic foam with a plush bolster surround at an unbeatable price point.",
        features: [
          "Egg-crate foam base for airflow",
          "Three-sided bolster for head resting",
          "Removable, washable faux-fur cover",
        ],
        asin: "B07488DM9V",
        price: "$42.99",
        rating: 4.4,
        reviewCount: "85K+",
        prime: true,
      },
      {
        name: "Big Barker 7 Pillow Top",
        badge: "Best for Large Dogs",
        description:
          "Calibrated specifically for large and giant breeds with a 10-year no-flatten guarantee.",
        features: [
          "7 inches of American-made therapeutic foam",
          "10-year shape guarantee",
          "Microfiber cover resists hair and dirt",
        ],
        asin: "B009RH7QJU",
        price: "$279.95",
        rating: 4.7,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "Bedsure Orthopedic Dog Bed",
        badge: "Editor\u2019s Choice",
        description:
          "Egg-crate foam bed with a nonskid bottom and removable washable cover at an incredible value.",
        features: [
          "Egg-crate memory foam for pressure relief",
          "Nonskid rubber bottom stays in place",
          "Removable, machine-washable plush cover",
        ],
        asin: "B0CXPMV4V1",
        price: "$35.99",
        rating: 4.5,
        reviewCount: "37K+",
        prime: true,
      },
      {
        name: "Best Friends by Sheri Calming Donut",
        badge: "Best Premium",
        description:
          "Ultra-cozy round donut bed with raised rim bolsters that create a sense of security and warmth.",
        features: [
          "Deep crevice design for burrowing",
          "Vegan faux shag fur is extra soft",
          "Machine washable and dryer safe",
        ],
        asin: "B07C5TYJG7",
        price: "$34.99",
        rating: 4.5,
        reviewCount: "55K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-food",
    title: "Best Dog Food (2026)",
    description:
      "Quality dog food starts with real protein as the first ingredient, balanced nutrition, and transparent sourcing from a manufacturer you can trust.",
    picks: [
      {
        name: "Blue Buffalo Life Protection",
        badge: "Best Overall",
        description:
          "Natural adult dog food with real chicken, whole grains, and LifeSource Bits packed with antioxidants.",
        features: [
          "Real deboned chicken is the #1 ingredient",
          "LifeSource Bits with antioxidants and vitamins",
          "No chicken by-product meals, corn, wheat, or soy",
        ],
        asin: "B0030H4TTA",
        price: "$62.98",
        rating: 4.7,
        reviewCount: "65K+",
        prime: true,
      },
      {
        name: "Purina Pro Plan Shredded Blend",
        badge: "Best Budget",
        description:
          "Veterinarian-recommended formula combining crunchy kibble with tender shredded pieces for taste and nutrition.",
        features: [
          "Real chicken is the #1 ingredient",
          "Fortified with guaranteed live probiotics",
          "Crunchy kibble + shredded pieces dogs love",
        ],
        asin: "B001VNEIFY",
        price: "$64.48",
        rating: 4.7,
        reviewCount: "28K+",
        prime: true,
      },
      {
        name: "Royal Canin Size Health",
        badge: "Best Premium",
        description:
          "Breed-size-specific nutrition formulated with precise kibble shapes and tailored nutrient profiles.",
        features: [
          "Size-specific kibble shape for easier chewing",
          "Precise nutrient profile for each size category",
          "Supports digestive health and coat quality",
        ],
        asin: "B00CITMS72",
        price: "$72.99",
        rating: 4.8,
        reviewCount: "14K+",
        prime: true,
      },
      {
        name: "Taste of the Wild High Prairie",
        badge: "Editor\u2019s Choice",
        description:
          "Grain-free recipe inspired by ancestral diets with roasted bison and venison.",
        features: [
          "Roasted bison and venison protein",
          "Grain-free with sweet potatoes and peas",
          "Proprietary K9 probiotic blend",
        ],
        asin: "B001GI42HC",
        price: "$54.99",
        rating: 4.7,
        reviewCount: "42K+",
        prime: true,
      },
      {
        name: "Hill\u2019s Science Diet Adult",
        badge: "Best for Small Dogs",
        description:
          "Veterinarian-recommended adult formula with high-quality protein and a balanced blend of vitamins.",
        features: [
          "Made with real chicken as #1 ingredient",
          "Omega-6s and vitamin E for healthy skin and coat",
          "No artificial colors, flavors, or preservatives",
        ],
        asin: "B003MUNNIA",
        price: "$63.99",
        rating: 4.7,
        reviewCount: "18K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-toys",
    title: "Best Dog Toys (2026)",
    description:
      "The right toy depends on your dog\u2019s play style \u2014 choose durable rubber for power chewers, puzzles for mental stimulation, and soft plush for gentle cuddlers.",
    picks: [
      {
        name: "Chuckit! Ultra Ball (2-Pack)",
        badge: "Best Overall",
        description:
          "High-bounce, high-visibility rubber ball designed for long-distance fetching sessions.",
        features: [
          "Thick natural rubber core",
          "High-visibility orange and blue",
          "Compatible with Chuckit! launchers",
        ],
        asin: "B000F4AVPA",
        price: "$8.99",
        rating: 4.7,
        reviewCount: "95K+",
        prime: true,
      },
      {
        name: "KONG Classic Dog Toy",
        badge: "Editor\u2019s Choice",
        description:
          "The gold standard in durable dog toys, perfect for stuffing with treats and bouncing unpredictably.",
        features: [
          "Natural rubber withstands heavy chewing",
          "Stuff with peanut butter or kibble",
          "Unpredictable bounce for solo play",
        ],
        asin: "B0002AR0I8",
        price: "$14.99",
        rating: 4.7,
        reviewCount: "120K+",
        prime: true,
      },
      {
        name: "Benebone Wishbone Chew",
        badge: "Best Budget",
        description:
          "Real-flavor-infused nylon chew shaped for easy gripping with deep grooves that hold flavor.",
        features: [
          "Made with real bacon, chicken, or peanut",
          "Ergonomic wishbone shape for paw grip",
          "Durable nylon lasts for weeks",
        ],
        asin: "B013OIGAHG",
        price: "$12.78",
        rating: 4.5,
        reviewCount: "121K+",
        prime: true,
      },
      {
        name: "Outward Hound Nina Ottosson Puzzle",
        badge: "Best for Large Dogs",
        description:
          "Multi-level puzzle feeder that challenges dogs to slide, flip, and lift compartments for hidden treats.",
        features: [
          "Three difficulty levels in one toy",
          "BPA-free and dishwasher-safe",
          "Slows eating and reduces boredom",
        ],
        asin: "B0711Y9XTF",
        price: "$14.99",
        rating: 4.5,
        reviewCount: "48K+",
        prime: true,
      },
      {
        name: "Multipet Lamb Chop Plush",
        badge: "Best for Small Dogs",
        description:
          "Classic plush toy with a built-in squeaker that small dogs love to carry, shake, and cuddle.",
        features: [
          "Soft plush with internal squeaker",
          "Iconic Lamb Chop design dogs adore",
          "Available in multiple sizes",
        ],
        asin: "B000BVXGMA",
        price: "$5.49",
        rating: 4.6,
        reviewCount: "58K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-treats",
    title: "Best Dog Treats (2026)",
    description:
      "Great treats should be tasty enough to motivate, small enough for frequent rewarding, and made with wholesome ingredients you can feel good about.",
    picks: [
      {
        name: "Milk-Bone MaroSnacks",
        badge: "Best Overall",
        description:
          "Crunchy biscuits with real bone marrow flavor that dogs go crazy for at a wallet-friendly price.",
        features: [
          "Real bone marrow center",
          "12 vitamins and minerals added",
          "Resealable pouch stays fresh",
        ],
        asin: "B001650NNW",
        price: "$11.98",
        rating: 4.7,
        reviewCount: "72K+",
        prime: true,
      },
      {
        name: "Greenies Dental Treats",
        badge: "Editor\u2019s Choice",
        description:
          "VOHC-accepted dental chew that cleans teeth down to the gumline while freshening breath.",
        features: [
          "VOHC seal of acceptance",
          "Unique texture cleans down to gumline",
          "Added vitamins and minerals",
        ],
        asin: "B000KEVQCY",
        price: "$36.97",
        rating: 4.8,
        reviewCount: "85K+",
        prime: true,
      },
      {
        name: "Blue Buffalo Wilderness Trail Treats",
        badge: "Best Budget",
        description:
          "Grain-free biscuit treats made with real duck and packed with protein for active dogs.",
        features: [
          "Real duck is the #1 ingredient",
          "Grain-free, no corn, wheat, or soy",
          "Crunchy biscuit texture dogs love",
        ],
        asin: "B003P9XGDY",
        price: "$8.99",
        rating: 4.7,
        reviewCount: "22K+",
        prime: true,
      },
      {
        name: "Zuke\u2019s Mini Naturals Training Treats",
        badge: "Best Premium",
        description:
          "Tiny, soft training treats with real chicken and less than 3 calories each for guilt-free rewarding.",
        features: [
          "Under 3 calories per treat",
          "Real chicken first ingredient",
          "Soft texture for quick eating during training",
        ],
        asin: "B000H0ZJHW",
        price: "$10.99",
        rating: 4.7,
        reviewCount: "42K+",
        prime: true,
      },
      {
        name: "Vital Essentials Freeze-Dried Liver",
        badge: "Best for Small Dogs",
        description:
          "Single-ingredient freeze-dried beef liver treats with no fillers, additives, or grains.",
        features: [
          "Single ingredient: beef liver",
          "Freeze-dried to lock in nutrients",
          "High-value reward for picky eaters",
        ],
        asin: "B00NHW7GKA",
        price: "$11.99",
        rating: 4.7,
        reviewCount: "24K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-grooming",
    title: "Best Dog Grooming Tools (2026)",
    description:
      "Regular grooming keeps your dog\u2019s coat healthy and reduces shedding \u2014 invest in quality tools that are comfortable for both you and your dog.",
    picks: [
      {
        name: "Furminator Undercoat Deshedding Tool",
        badge: "Best Overall",
        description:
          "The industry-standard deshedding tool that reaches through the topcoat to safely remove loose undercoat hair.",
        features: [
          "Stainless steel deShedding edge",
          "FURejector button clears hair with one click",
          "Ergonomic handle reduces hand fatigue",
        ],
        asin: "B0040QQ07C",
        price: "$32.99",
        rating: 4.6,
        reviewCount: "75K+",
        prime: true,
      },
      {
        name: "Hertzko Self-Cleaning Slicker Brush",
        badge: "Best Budget",
        description:
          "Affordable slicker brush with a one-click self-cleaning button that retracts bristles for easy hair removal.",
        features: [
          "Fine bent wire bristles remove mats gently",
          "Self-cleaning retractable bristle button",
          "Comfortable anti-slip grip handle",
        ],
        asin: "B00ZGPI3OY",
        price: "$15.99",
        rating: 4.4,
        reviewCount: "90K+",
        prime: true,
      },
      {
        name: "Wahl Pet Clippers",
        badge: "Best Premium",
        description:
          "Heavy-duty corded clippers with a powerful motor and self-sharpening precision blades for full-body cuts.",
        features: [
          "PowerDrive motor cuts thick coats",
          "Self-sharpening high-carbon steel blades",
          "Includes 4 guide combs and accessories",
        ],
        asin: "B00IN24ILE",
        price: "$39.99",
        rating: 4.4,
        reviewCount: "40K+",
        prime: true,
      },
      {
        name: "Burt\u2019s Bees Oatmeal Dog Shampoo",
        badge: "Editor\u2019s Choice",
        description:
          "Gentle, pH-balanced shampoo with colloidal oatmeal that soothes dry and itchy skin naturally.",
        features: [
          "Colloidal oatmeal and honey formula",
          "No sulfates, colorants, or harsh chemicals",
          "pH balanced for dogs",
        ],
        asin: "B00CSNQRI0",
        price: "$9.97",
        rating: 4.6,
        reviewCount: "55K+",
        prime: true,
      },
      {
        name: "Dremel PawControl Nail Grinder",
        badge: "Best for Large Dogs",
        description:
          "Quiet cordless nail grinder with a paw guard that catches filings for mess-free trimming.",
        features: [
          "Built-in paw guard catches dust",
          "4-speed settings for control",
          "LED light illuminates the nail",
        ],
        asin: "B09DVHLQQX",
        price: "$29.99",
        rating: 4.4,
        reviewCount: "18K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-crates",
    title: "Best Dog Crates & Kennels (2026)",
    description:
      "The best crate is one your dog feels safe in \u2014 look for appropriate sizing, sturdy construction, and easy assembly with good ventilation.",
    picks: [
      {
        name: "MidWest iCrate Starter Kit",
        badge: "Best Overall",
        description:
          "Versatile double-door wire crate with a divider panel that grows with your puppy.",
        features: [
          "Double door for flexible placement",
          "Included divider panel for puppies",
          "Folds flat for easy transport",
        ],
        asin: "B000QFT1R2",
        price: "$47.99",
        rating: 4.7,
        reviewCount: "95K+",
        prime: true,
      },
      {
        name: "Diggs Revol Collapsible Crate",
        badge: "Best Premium",
        description:
          "Beautifully designed collapsible crate with diamond-shaped mesh and a puppy divider built in.",
        features: [
          "Collapses with one hand for travel",
          "Baby-crib-grade mesh sides",
          "Built-in puppy divider and ceiling hatch",
        ],
        asin: "B082VF82NJ",
        price: "$375.00",
        rating: 4.6,
        reviewCount: "3K+",
        prime: true,
      },
      {
        name: "Amazon Basics Folding Metal Crate",
        badge: "Best Budget",
        description:
          "Reliable single-door wire crate with all the essentials at an affordable price.",
        features: [
          "Single-door design with secure slide-bolt latch",
          "Removable composite plastic pan",
          "Folds flat with carrying handle",
        ],
        asin: "B00QAVNWSK",
        price: "$39.49",
        rating: 4.6,
        reviewCount: "80K+",
        prime: true,
      },
      {
        name: "Petmate Sky Kennel",
        badge: "Editor\u2019s Choice",
        description:
          "Airline-approved hard-shell kennel with heavy-duty construction for safe air and car travel.",
        features: [
          "Meets most airline cargo requirements",
          "Heavy-duty tie-down strap holes",
          "360-degree ventilation openings",
        ],
        asin: "B000633SNG",
        price: "$69.99",
        rating: 4.5,
        reviewCount: "25K+",
        prime: true,
      },
      {
        name: "EliteField Soft Dog Crate",
        badge: "Best for Large Dogs",
        description:
          "Lightweight, portable soft-sided crate with three mesh doors and a sturdy steel frame.",
        features: [
          "600D fabric with steel tube frame",
          "Three mesh door openings for airflow",
          "Folds flat with carrying bag included",
        ],
        asin: "B005N0MGFK",
        price: "$44.99",
        rating: 4.4,
        reviewCount: "12K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-harnesses",
    title: "Best Dog Harnesses (2026)",
    description:
      "A well-fitted harness distributes pressure away from the neck and gives you better control, especially for dogs that pull or have respiratory issues.",
    picks: [
      {
        name: "Rabbitgoo No-Pull Harness",
        badge: "Best Overall",
        description:
          "Adjustable no-pull harness with front and back clip attachments and padded breathable mesh.",
        features: [
          "Front and back leash attachment points",
          "Four adjustable straps for custom fit",
          "Padded, breathable air mesh vest",
        ],
        asin: "B01M8JT6FT",
        price: "$18.99",
        rating: 4.4,
        reviewCount: "120K+",
        prime: true,
      },
      {
        name: "Kurgo Tru-Fit Smart Harness",
        badge: "Editor\u2019s Choice",
        description:
          "Crash-tested car harness that doubles as a walking harness with a steel nesting buckle.",
        features: [
          "Crash-tested up to 75 lbs",
          "Includes seatbelt tether for car travel",
          "Five adjustment points",
        ],
        asin: "B005OPADXU",
        price: "$33.95",
        rating: 4.4,
        reviewCount: "22K+",
        prime: true,
      },
      {
        name: "Ruffwear Front Range Harness",
        badge: "Best Premium",
        description:
          "Everyday padded harness with front and back leash attachments and four adjustment points.",
        features: [
          "Front and back leash attachment rings",
          "Four points of adjustment for custom fit",
          "Padded chest and belly panels",
        ],
        asin: "B01N7YDQKH",
        price: "$44.95",
        rating: 4.7,
        reviewCount: "14K+",
        prime: true,
      },
      {
        name: "PetSafe Easy Walk Harness",
        badge: "Best Budget",
        description:
          "Front-clip no-pull harness that gently steers dogs who pull without choking or gagging.",
        features: [
          "Front chest clip discourages pulling",
          "Quick-snap buckles for easy on/off",
          "Belly strap sits behind front legs to prevent chafing",
        ],
        asin: "B0009ZBKG4",
        price: "$26.95",
        rating: 4.3,
        reviewCount: "55K+",
        prime: true,
      },
      {
        name: "Julius-K9 IDC Powerharness",
        badge: "Best for Large Dogs",
        description:
          "Professional-grade harness with a handle on top and interchangeable label patches.",
        features: [
          "Heavy-duty buckle rated for strong dogs",
          "Ergonomic chest strap design",
          "Interchangeable Velcro label patches",
        ],
        asin: "B00AH1D8A4",
        price: "$39.99",
        rating: 4.5,
        reviewCount: "30K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-leashes",
    title: "Best Dog Leashes (2026)",
    description:
      "Choose a leash based on your walking environment and dog\u2019s behavior \u2014 standard 6-foot leashes work for most, while hands-free and retractable options suit specific needs.",
    picks: [
      {
        name: "PetSafe Nylon Dog Leash",
        badge: "Best Overall",
        description:
          "Simple, durable nylon leash in multiple lengths and colors at a no-frills price.",
        features: [
          "Strong nylon webbing",
          "Sturdy bolt-snap clip",
          "Available in 4, 6, and 8-foot lengths",
        ],
        asin: "B000AYL1WO",
        price: "$7.95",
        rating: 4.6,
        reviewCount: "35K+",
        prime: true,
      },
      {
        name: "Flexi New Classic Retractable",
        badge: "Best Budget",
        description:
          "Popular retractable leash with a smooth recoil mechanism and ergonomic brake button.",
        features: [
          "16-foot retractable cord",
          "One-hand brake-and-lock system",
          "Ergonomic soft-grip handle",
        ],
        asin: "B001PCMECA",
        price: "$14.95",
        rating: 4.4,
        reviewCount: "42K+",
        prime: true,
      },
      {
        name: "TUG 360\u00b0 Tangle-Free Retractable",
        badge: "Editor\u2019s Choice",
        description:
          "Anti-tangle retractable leash with a 360-degree swivel and a heavy-duty nylon tape.",
        features: [
          "360-degree tangle-free swivel design",
          "Heavy-duty nylon tape (not cord)",
          "Quick-lock braking system",
        ],
        asin: "B0BMW9N8DB",
        price: "$17.97",
        rating: 4.4,
        reviewCount: "28K+",
        prime: true,
      },
      {
        name: "Mighty Paw Leather Leash",
        badge: "Best Premium",
        description:
          "Full-grain leather leash that softens and develops patina over time for a premium look and feel.",
        features: [
          "Full-grain genuine leather",
          "Nickel-plated heavy-duty clasp",
          "Gets softer and more beautiful with age",
        ],
        asin: "B00Z01GVMG",
        price: "$25.99",
        rating: 4.6,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "SparklyPets Hands-Free Leash",
        badge: "Best for Small Dogs",
        description:
          "Dual-handle bungee leash with a padded waist belt for runners and active dog owners.",
        features: [
          "Adjustable waist belt for hands-free walking",
          "Dual bungee section absorbs shock",
          "Reflective stitching for night visibility",
        ],
        asin: "B07QFVJN3B",
        price: "$18.97",
        rating: 4.4,
        reviewCount: "12K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-bowls",
    title: "Best Dog Bowls & Feeders (2026)",
    description:
      "Stainless steel and ceramic bowls are the most hygienic options \u2014 also consider slow feeders for fast eaters and elevated stands for tall or senior dogs.",
    picks: [
      {
        name: "YETI Boomer 8 Dog Bowl",
        badge: "Best Overall",
        description:
          "Double-walled stainless steel bowl that is virtually indestructible and dishwasher safe.",
        features: [
          "18/8 stainless steel, BPA-free",
          "Non-slip ring on the base",
          "Dishwasher safe",
        ],
        asin: "B08F4WWJ68",
        price: "$50.00",
        rating: 4.8,
        reviewCount: "6K+",
        prime: true,
      },
      {
        name: "Outward Hound Fun Feeder Slow Bowl",
        badge: "Best Budget",
        description:
          "Maze-pattern slow feeder that extends mealtime up to 10x, reducing bloat and improving digestion.",
        features: [
          "Meal-lengthening ridge pattern",
          "BPA, PVC, and phthalate-free",
          "Non-slip base prevents sliding",
        ],
        asin: "B00FPKNRG4",
        price: "$10.99",
        rating: 4.5,
        reviewCount: "85K+",
        prime: true,
      },
      {
        name: "PetSafe Drinkwell Platinum Fountain",
        badge: "Best Premium",
        description:
          "Filtered water fountain with a free-falling stream that encourages dogs to drink more water.",
        features: [
          "168 oz capacity for large dogs",
          "Replaceable carbon water filter",
          "Free-falling stream adds oxygen for freshness",
        ],
        asin: "B000L3XYZ4",
        price: "$39.95",
        rating: 4.4,
        reviewCount: "35K+",
        prime: true,
      },
      {
        name: "Neater Feeder Express Elevated",
        badge: "Editor\u2019s Choice",
        description:
          "Mess-proof elevated feeder with a spill-catching base that keeps floors clean and dry.",
        features: [
          "Raised design reduces neck strain",
          "Spill-proof reservoir catches messes",
          "Includes stainless steel bowls",
        ],
        asin: "B00G5XLGPO",
        price: "$29.99",
        rating: 4.5,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "Basis Pet Stainless Steel Bowl",
        badge: "Best for Large Dogs",
        description:
          "Medical-grade stainless steel bowl made in the USA with no cheap welds or coatings.",
        features: [
          "Made in USA from 304 stainless steel",
          "No welds, seams, or rubber coating",
          "Dishwasher safe and virtually indestructible",
        ],
        asin: "B072JHFC12",
        price: "$23.99",
        rating: 4.7,
        reviewCount: "4K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-supplements",
    title: "Best Dog Supplements & Vitamins (2026)",
    description:
      "Supplements can support joint health, digestion, skin and coat, and overall vitality \u2014 always consult your vet before starting a new supplement regimen.",
    picks: [
      {
        name: "Nutramax Cosequin Joint Health",
        badge: "Best Overall",
        description:
          "The #1 vet-recommended joint supplement with glucosamine, chondroitin, and MSM for mobility support.",
        features: [
          "#1 veterinarian-recommended brand",
          "Glucosamine, chondroitin, and MSM",
          "Chewable tablet dogs take willingly",
        ],
        asin: "B004HTTGIG",
        price: "$37.52",
        rating: 4.6,
        reviewCount: "42K+",
        prime: true,
      },
      {
        name: "Zesty Paws Multivitamin Bites",
        badge: "Best Budget",
        description:
          "Tasty grain-free soft chew multivitamin covering joints, digestion, skin, coat, and heart health.",
        features: [
          "8-in-1 multifunctional formula",
          "Grain-free soft chew format",
          "OptiMSM and CoQ10 included",
        ],
        asin: "B01IP93Q3E",
        price: "$28.97",
        rating: 4.5,
        reviewCount: "55K+",
        prime: true,
      },
      {
        name: "Purina Pro Plan FortiFlora Probiotics",
        badge: "Editor\u2019s Choice",
        description:
          "Probiotic supplement that promotes normal intestinal health and firm stool quality.",
        features: [
          "Contains live active cultures",
          "Sprinkle-on powder format",
          "Recommended by veterinarians",
        ],
        asin: "B001650OE0",
        price: "$30.99",
        rating: 4.7,
        reviewCount: "48K+",
        prime: true,
      },
      {
        name: "Nordic Naturals Omega-3 Pet",
        badge: "Best Premium",
        description:
          "Purified fish oil soft gels that support skin, coat, joint, and heart health with no fishy odor.",
        features: [
          "Wild-caught fish sourced sustainably",
          "No artificial colors or preservatives",
          "Third-party tested for purity",
        ],
        asin: "B007M09TLE",
        price: "$25.46",
        rating: 4.6,
        reviewCount: "10K+",
        prime: true,
      },
      {
        name: "PetHonesty Hemp Calming Chews",
        badge: "Best for Large Dogs",
        description:
          "Hemp-based calming soft chews with valerian root and chamomile to ease anxiety and stress.",
        features: [
          "Organic hemp oil and hemp powder",
          "Valerian root and chamomile blend",
          "No drowsiness or sedation",
        ],
        asin: "B07GZTFND2",
        price: "$26.99",
        rating: 4.4,
        reviewCount: "32K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-cameras",
    title: "Best Dog Cameras & Monitors (2026)",
    description:
      "Dog cameras let you check in on your pet from anywhere \u2014 the best ones offer HD video, two-way audio, treat tossing, and smart alerts for barking.",
    picks: [
      {
        name: "Furbo 360\u00b0 Dog Camera",
        badge: "Best Overall",
        description:
          "360-degree rotating camera with treat tossing, barking alerts, and full-room coverage.",
        features: [
          "360-degree auto-tracking rotation",
          "Treat tossing with adjustable distance",
          "Real-time barking and activity alerts",
        ],
        asin: "B09BKGG67G",
        price: "$109.99",
        rating: 4.3,
        reviewCount: "28K+",
        prime: true,
      },
      {
        name: "Blink Mini Indoor Camera",
        badge: "Best Budget",
        description:
          "Compact plug-in indoor camera with 1080p HD, two-way audio, and motion detection at an unbeatable price.",
        features: [
          "1080p HD video day and night",
          "Two-way audio for talking to your dog",
          "Motion detection with customizable alerts",
        ],
        asin: "B09N6YCT81",
        price: "$19.99",
        rating: 4.4,
        reviewCount: "180K+",
        prime: true,
      },
      {
        name: "Wyze Cam v3",
        badge: "Editor\u2019s Choice",
        description:
          "Feature-packed camera with starlight color night vision and IP65 weather resistance.",
        features: [
          "Starlight sensor for color night vision",
          "IP65 weather-resistant for indoor/outdoor",
          "Motion and sound detection zones",
        ],
        asin: "B09R19TB7B",
        price: "$33.98",
        rating: 4.3,
        reviewCount: "45K+",
        prime: true,
      },
      {
        name: "Ring Indoor Cam (2nd Gen)",
        badge: "Best for Small Dogs",
        description:
          "Compact plug-in camera with crisp 1080p video and seamless Ring ecosystem integration.",
        features: [
          "1080p HD with color night vision",
          "Privacy cover for lens",
          "Integrates with Ring and Alexa ecosystem",
        ],
        asin: "B0B6GKMRYY",
        price: "$29.99",
        rating: 4.4,
        reviewCount: "25K+",
        prime: true,
      },
      {
        name: "eufy Indoor Cam S350",
        badge: "Best Premium",
        description:
          "Dual-camera system with 4K wide-angle and 2K telephoto for unmatched detail and zoom.",
        features: [
          "4K wide-angle + 2K telephoto dual lens",
          "8x hybrid zoom with AI tracking",
          "Local storage with no monthly fee",
        ],
        asin: "B0C5JV56WN",
        price: "$54.99",
        rating: 4.3,
        reviewCount: "8K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-gps-trackers",
    title: "Best Dog GPS Trackers (2026)",
    description:
      "A GPS tracker gives you peace of mind by showing your dog\u2019s real-time location \u2014 look for reliable cellular coverage, long battery life, and a lightweight design.",
    picks: [
      {
        name: "Apple AirTag (4-Pack)",
        badge: "Best Overall",
        description:
          "Ultra-affordable Bluetooth tracker that leverages the massive Find My network for passive location.",
        features: [
          "Uses Apple\u2019s massive Find My network",
          "Replaceable battery lasts over a year",
          "Waterproof IP67-rated and precision finding",
        ],
        asin: "B0D54JZTHY",
        price: "$79.99",
        rating: 4.7,
        reviewCount: "120K+",
        prime: true,
      },
      {
        name: "Fi Series 3 Smart Collar",
        badge: "Best Premium",
        description:
          "GPS smart collar with LTE-M tracking, escape alerts, and a battery that lasts up to 3 months.",
        features: [
          "LTE-M, WiFi, and Bluetooth tracking",
          "Battery lasts up to 3 months in normal use",
          "Instant escape alerts via geofencing",
        ],
        asin: "B0CYL4MH2K",
        price: "$99.00",
        rating: 4.2,
        reviewCount: "4K+",
        prime: true,
      },
      {
        name: "Samsung Galaxy SmartTag2",
        badge: "Best Budget",
        description:
          "Compact Bluetooth and UWB tracker with a long-lasting battery and Samsung SmartThings integration.",
        features: [
          "Bluetooth and UWB for precise finding",
          "IP67 water and dust resistance",
          "Up to 500 days of battery life",
        ],
        asin: "B0CF1H4D9W",
        price: "$23.99",
        rating: 4.5,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "Tile Mate (2024)",
        badge: "Editor\u2019s Choice",
        description:
          "Versatile Bluetooth tracker with a 250-foot range and a loud built-in speaker for finding nearby.",
        features: [
          "250-foot Bluetooth range",
          "Loud built-in speaker for nearby finding",
          "Works with both iOS and Android",
        ],
        asin: "B0CKXG2YCN",
        price: "$17.99",
        rating: 4.3,
        reviewCount: "12K+",
        prime: true,
      },
      {
        name: "Jiobit GPS Tracker",
        badge: "Best for Small Dogs",
        description:
          "One of the smallest GPS trackers available, weighing under an ounce and designed for small pets.",
        features: [
          "Weighs less than 1 ounce",
          "Trusted Circle location sharing",
          "Encrypted end-to-end for privacy",
        ],
        asin: "B0C9S6Z7KM",
        price: "$129.99",
        rating: 4.0,
        reviewCount: "2K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-dental",
    title: "Best Dog Dental Care Products (2026)",
    description:
      "Dental disease affects most dogs over age 3 \u2014 daily brushing, dental chews, and water additives work together to keep teeth and gums healthy.",
    picks: [
      {
        name: "Pedigree Dentastix",
        badge: "Best Overall",
        description:
          "Clinically proven X-shaped dental chew that reduces tartar buildup by up to 80% when used daily.",
        features: [
          "X-shape cleans down to the gumline",
          "Clinically proven to reduce tartar",
          "Low fat with no artificial flavors",
        ],
        asin: "B074FBNRDS",
        price: "$19.98",
        rating: 4.7,
        reviewCount: "95K+",
        prime: true,
      },
      {
        name: "Greenies Original Dental Chews",
        badge: "Editor\u2019s Choice",
        description:
          "VOHC-accepted dental chew that cleans teeth down to the gumline while freshening breath.",
        features: [
          "VOHC seal of acceptance",
          "Unique texture cleans down to gumline",
          "Added vitamins and minerals",
        ],
        asin: "B000KEVQCY",
        price: "$36.97",
        rating: 4.8,
        reviewCount: "85K+",
        prime: true,
      },
      {
        name: "Virbac C.E.T. Enzymatic Toothpaste",
        badge: "Best Premium",
        description:
          "Veterinary-grade enzymatic toothpaste in poultry flavor that fights plaque without needing to rinse.",
        features: [
          "Dual-enzyme system fights plaque",
          "No rinsing required",
          "Poultry flavor dogs enjoy",
        ],
        asin: "B01NBKVH32",
        price: "$13.99",
        rating: 4.5,
        reviewCount: "20K+",
        prime: true,
      },
      {
        name: "Arm & Hammer Dog Dental Kit",
        badge: "Best Budget",
        description:
          "Baking-soda-based toothpaste kit with a finger brush and angled toothbrush included.",
        features: [
          "Baking soda neutralizes odors",
          "Includes finger brush and toothbrush",
          "Safe if swallowed",
        ],
        asin: "B003IGCHG8",
        price: "$8.49",
        rating: 4.4,
        reviewCount: "15K+",
        prime: true,
      },
      {
        name: "TropiClean Fresh Breath Water Additive",
        badge: "Best for Small Dogs",
        description:
          "Tasteless water additive that helps fight plaque and freshen breath with every drink.",
        features: [
          "Just add to water bowl daily",
          "Tasteless formula dogs don\u2019t notice",
          "Helps reduce plaque and tartar",
        ],
        asin: "B001P7J78O",
        price: "$14.99",
        rating: 4.3,
        reviewCount: "25K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-coats",
    title: "Best Dog Coats & Jackets (2026)",
    description:
      "Short-haired, small, senior, and thin dogs benefit most from outerwear \u2014 look for waterproof shells, warm insulation, and easy-on closures that allow harness access.",
    picks: [
      {
        name: "Kurgo Loft Dog Jacket",
        badge: "Best Overall",
        description:
          "Lightweight reversible jacket with ripstop shell on one side and fleece on the other.",
        features: [
          "Reversible ripstop and fleece design",
          "Machine washable",
          "Zippered leash opening on back",
        ],
        asin: "B07L6C5KRM",
        price: "$39.95",
        rating: 4.5,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "Ruffwear Quinzee Insulated Jacket",
        badge: "Best Premium",
        description:
          "Synthetic insulated jacket with a tail-drop hem and reflective trim for cold-weather adventures.",
        features: [
          "Synthetic insulation for warmth without bulk",
          "Tail-drop hem extends coverage",
          "Reflective trim for low-light visibility",
        ],
        asin: "B01MYNWKWB",
        price: "$89.95",
        rating: 4.6,
        reviewCount: "3K+",
        prime: true,
      },
      {
        name: "Canada Pooch Everest Explorer",
        badge: "Editor\u2019s Choice",
        description:
          "Premium parka with a water-resistant shell and Sherpa-lined interior sized up to XXL breeds.",
        features: [
          "Water-resistant exterior fabric",
          "Cozy Sherpa fleece lining",
          "Available up to size 28 (giant breeds)",
        ],
        asin: "B0B6XTQ1QM",
        price: "$64.99",
        rating: 4.4,
        reviewCount: "2K+",
        prime: true,
      },
      {
        name: "HDE Dog Raincoat",
        badge: "Best Budget",
        description:
          "Waterproof hooded raincoat with reflective strips and a leash hole, available in fun colors.",
        features: [
          "Fully waterproof with taped seams",
          "Reflective safety strips",
          "Hood and leash opening included",
        ],
        asin: "B019DCBPUY",
        price: "$14.99",
        rating: 4.3,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "Gooby Fleece Vest",
        badge: "Best for Small Dogs",
        description:
          "Lightweight fleece pullover vest with a leash ring built in, sized specifically for small breeds.",
        features: [
          "Soft fleece with stretch fit",
          "Built-in D-ring for leash",
          "Easy step-in pullover design",
        ],
        asin: "B01MQCETB6",
        price: "$16.99",
        rating: 4.4,
        reviewCount: "22K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-anxiety",
    title: "Best Dog Anxiety Products (2026)",
    description:
      "Calming aids that actually work \u2014 from thunder vests to calming chews, backed by vet recommendations and real owner reviews.",
    picks: [
      {
        name: "ThunderShirt Classic",
        badge: "Best Overall",
        description:
          "The original anxiety vest that applies gentle, constant pressure to calm dogs during storms, fireworks, and separation anxiety.",
        features: [
          "Patented pressure wrap design",
          "Over 80% success rate per manufacturer",
          "Machine washable, solid construction",
        ],
        asin: "B0028QK6IS",
        price: "$44.95",
        rating: 4.3,
        reviewCount: "35K+",
        prime: true,
      },
      {
        name: "Zesty Paws Calming Bites",
        badge: "Best Value",
        description:
          "Soft chew treats with Suntheanine, organic hemp, and chamomile that promote relaxation without drowsiness.",
        features: [
          "Suntheanine L-Theanine clinically studied",
          "Organic hemp seed powder and oil",
          "Turkey-flavored soft chew format",
        ],
        asin: "B07GFN8TM5",
        price: "$25.97",
        rating: 4.4,
        reviewCount: "42K+",
        prime: true,
      },
      {
        name: "Adaptil Calming Diffuser Kit",
        badge: "Premium Pick",
        description:
          "Plug-in diffuser that releases a synthetic copy of the dog appeasing pheromone to reduce stress in the home.",
        features: [
          "Clinically proven DAP pheromone",
          "Covers up to 700 sq ft",
          "30-day refill included in starter kit",
        ],
        asin: "B003JFGRSK",
        price: "$24.99",
        rating: 4.3,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "PetHonesty Hemp Calming Chews",
        badge: "Editor\u2019s Choice",
        description:
          "Organic hemp-based soft chews with valerian root and ginger that ease anxiety without sedation.",
        features: [
          "Organic hemp oil and powder",
          "Valerian root and chamomile blend",
          "No artificial flavors or preservatives",
        ],
        asin: "B07GZTFND2",
        price: "$26.99",
        rating: 4.4,
        reviewCount: "32K+",
        prime: true,
      },
      {
        name: "Best Friends by Sheri Calming Donut Bed",
        badge: "Best for Small Dogs",
        description:
          "Round self-warming donut bed with raised rim and super-soft faux fur that mimics the comfort of a mother\u2019s coat.",
        features: [
          "Deep crevices for burrowing",
          "Self-warming insulation layer",
          "Machine washable and dryer safe",
        ],
        asin: "B07MBW3JNQ",
        price: "$39.99",
        rating: 4.5,
        reviewCount: "65K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-car-seats",
    title: "Best Dog Car Seats (2026)",
    description:
      "Keep your dog safe and comfortable on every car ride with crash-tested seats and booster options for every size.",
    picks: [
      {
        name: "Kurgo Skybox Dog Booster Seat",
        badge: "Best Overall",
        description:
          "Elevated booster seat with a sturdy metal frame that lets small dogs see out the window safely.",
        features: [
          "Zip-line tether system for safe movement",
          "Waterproof, machine-washable liner",
          "Folds flat for easy storage",
        ],
        asin: "B00164SPGE",
        price: "$59.95",
        rating: 4.3,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "PetSafe Happy Ride Booster Seat",
        badge: "Best Value",
        description:
          "Quilted car seat with a telescoping security tether and a removable, washable liner.",
        features: [
          "Telescoping safety tether included",
          "Quilted fleece liner is removable",
          "Supports dogs up to 25 lbs",
        ],
        asin: "B003ARYKHI",
        price: "$31.95",
        rating: 4.3,
        reviewCount: "12K+",
        prime: true,
      },
      {
        name: "Snoozer Lookout Car Seat",
        badge: "Premium Pick",
        description:
          "Luxury booster seat with a removable faux-sheepskin liner and a connection strap for harness attachment.",
        features: [
          "Patented design elevates for window viewing",
          "Faux-sheepskin and quilted microsuede",
          "Multiple sizes up to 30 lbs",
        ],
        asin: "B001OALWFO",
        price: "$69.95",
        rating: 4.3,
        reviewCount: "5K+",
        prime: true,
      },
      {
        name: "URPOWER Dog Car Seat Cover",
        badge: "Best for Large Dogs",
        description:
          "Hammock-style seat cover that protects your back seat and converts to a standard bench cover.",
        features: [
          "600D Oxford waterproof fabric",
          "Nonslip backing and seat anchors",
          "Side flaps protect doors from scratches",
        ],
        asin: "B01A294AEI",
        price: "$29.99",
        rating: 4.5,
        reviewCount: "55K+",
        prime: true,
      },
      {
        name: "K&H Pet Products Bucket Booster",
        badge: "Best Budget",
        description:
          "Simple bucket-style booster that straps onto headrests and includes a fleece-lined interior.",
        features: [
          "Adjustable security leash included",
          "Removable fleece liner",
          "Crash-tested design",
        ],
        asin: "B003R5A0RG",
        price: "$36.99",
        rating: 4.3,
        reviewCount: "6K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-water-fountains",
    title: "Best Dog Water Fountains (2026)",
    description:
      "Filtered, flowing water encourages dogs to drink more \u2014 here are the quietest, easiest-to-clean fountains we\u2019ve found.",
    picks: [
      {
        name: "PetSafe Drinkwell Platinum",
        badge: "Best Overall",
        description:
          "168-ounce capacity fountain with a free-falling stream and replaceable carbon filter for clean water.",
        features: [
          "168 oz capacity for multi-pet homes",
          "Replaceable carbon water filter",
          "Adjustable flow control dial",
        ],
        asin: "B000L3XYZ4",
        price: "$39.95",
        rating: 4.4,
        reviewCount: "35K+",
        prime: true,
      },
      {
        name: "Catit Pixi Smart Fountain",
        badge: "Best Value",
        description:
          "Compact stainless steel-top fountain with app connectivity and a triple-action filter system.",
        features: [
          "Stainless steel drinking surface",
          "WiFi connected with water level alerts",
          "Triple-action filter system",
        ],
        asin: "B0B7G3LW3X",
        price: "$44.99",
        rating: 4.3,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "PETLIBRO Capsule Water Fountain",
        badge: "Premium Pick",
        description:
          "Ultra-quiet 2.1L stainless steel fountain with a wireless pump and 30-day filter life indicator.",
        features: [
          "Full stainless steel water path",
          "Wireless pump for silent operation",
          "LED filter replacement indicator",
        ],
        asin: "B0BVNMS4ZM",
        price: "$49.99",
        rating: 4.5,
        reviewCount: "15K+",
        prime: true,
      },
      {
        name: "Veken Pet Fountain",
        badge: "Most Popular",
        description:
          "Affordable 84-oz BPA-free fountain with three flow modes and ultra-quiet pump operation.",
        features: [
          "Three water flow settings",
          "BPA-free with LED night light",
          "Ultra-quiet pump under 40dB",
        ],
        asin: "B07DLBKPKG",
        price: "$18.99",
        rating: 4.3,
        reviewCount: "75K+",
        prime: true,
      },
      {
        name: "Pioneer Pet Raindrop Fountain",
        badge: "Editor\u2019s Choice",
        description:
          "Elegant stainless steel fountain shaped like a raindrop with a 60-oz capacity.",
        features: [
          "Full stainless steel construction",
          "Unique raindrop design is easy to clean",
          "Replaceable charcoal filter",
        ],
        asin: "B003XECF8K",
        price: "$42.99",
        rating: 4.3,
        reviewCount: "10K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-strollers",
    title: "Best Dog Strollers (2026)",
    description:
      "Perfect for senior dogs, injured pups, or small breeds who need a break on long walks \u2014 our top picks for every budget.",
    picks: [
      {
        name: "HPZ Pet Rover Premium",
        badge: "Best Overall",
        description:
          "Heavy-duty stroller with air-filled tires, a reversible handlebar, and a spacious carriage for dogs up to 75 lbs.",
        features: [
          "Air-filled tires with shock absorbers",
          "Reversible handlebar for facing forward or back",
          "Holds dogs up to 75 lbs",
        ],
        asin: "B06ZZWG35P",
        price: "$189.99",
        rating: 4.5,
        reviewCount: "5K+",
        prime: true,
      },
      {
        name: "Pet Gear No-Zip Happy Trails",
        badge: "Best Value",
        description:
          "Easy-lock no-zip entry stroller with a weather cover and a large undercarriage storage basket.",
        features: [
          "No-zip latch system for quick access",
          "Includes weather cover and cup holder",
          "Holds pets up to 30 lbs",
        ],
        asin: "B00IVCAIQ4",
        price: "$79.99",
        rating: 4.3,
        reviewCount: "14K+",
        prime: true,
      },
      {
        name: "Ibiyaya 5-in-1 Combo EVA",
        badge: "Premium Pick",
        description:
          "Converts between stroller, car seat, carrier, backpack, and rolling carrier for maximum versatility.",
        features: [
          "5-in-1 convertible design",
          "EVA foam wheels for smooth ride",
          "Holds pets up to 16 lbs",
        ],
        asin: "B08B44VY49",
        price: "$199.99",
        rating: 4.4,
        reviewCount: "3K+",
        prime: true,
      },
      {
        name: "BestPet Dog Stroller",
        badge: "Best Budget",
        description:
          "Lightweight foldable stroller with a three-wheel design and mesh windows at a wallet-friendly price.",
        features: [
          "3-wheel design for easy maneuverability",
          "Folds with one hand",
          "Holds pets up to 33 lbs",
        ],
        asin: "B081GMQJ92",
        price: "$49.99",
        rating: 4.2,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "Pet Gear Jogger No-Zip",
        badge: "Best for Large Dogs",
        description:
          "Jogging stroller with 12-inch air-filled tires and a locking front wheel for active dog parents.",
        features: [
          "12-inch air-filled rubber tires",
          "Locking front swivel wheel for jogging",
          "Holds pets up to 75 lbs",
        ],
        asin: "B01C8AV3V4",
        price: "$149.99",
        rating: 4.3,
        reviewCount: "4K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-backpacks",
    title: "Best Dog Backpack Carriers (2026)",
    description:
      "Hands-free carriers for hiking, travel, and adventures with your small to medium-sized dog.",
    picks: [
      {
        name: "K9 Sport Sack AIR Plus",
        badge: "Best Overall",
        description:
          "Ergonomic forward-facing dog backpack with padded lumbar support and mesh ventilation for hikes up to 40 lbs.",
        features: [
          "Padded lumbar and shoulder support",
          "Mesh side panels for airflow",
          "Storage pockets and water bottle holder",
        ],
        asin: "B07XZQM3WK",
        price: "$109.95",
        rating: 4.5,
        reviewCount: "6K+",
        prime: true,
      },
      {
        name: "PetAmi Deluxe Dog Carrier Backpack",
        badge: "Best Value",
        description:
          "Ventilated backpack with a safety buckle, sherpa-lined base, and multiple entry points.",
        features: [
          "4-point ventilation mesh",
          "Collapsible bowl and waste bag dispenser",
          "Holds dogs up to 18 lbs",
        ],
        asin: "B07FNJQMH3",
        price: "$39.99",
        rating: 4.4,
        reviewCount: "15K+",
        prime: true,
      },
      {
        name: "Kurgo G-Train Dog Carrier Backpack",
        badge: "Premium Pick",
        description:
          "TSA-compliant carrier backpack with waterproof bottom, padded back panel, and expandable design.",
        features: [
          "TSA/airline approved as under-seat carrier",
          "Waterproof EVA bottom",
          "Stroller compatibility straps",
        ],
        asin: "B07KD5MTFQ",
        price: "$139.95",
        rating: 4.4,
        reviewCount: "4K+",
        prime: true,
      },
      {
        name: "Pawaboo Pet Carrier Backpack",
        badge: "Best Budget",
        description:
          "Expandable mesh backpack with an adjustable head opening and padded shoulder straps.",
        features: [
          "Expandable mesh design for more room",
          "Padded and adjustable straps",
          "Holds dogs up to 15 lbs",
        ],
        asin: "B07TC28SBP",
        price: "$29.99",
        rating: 4.3,
        reviewCount: "10K+",
        prime: true,
      },
      {
        name: "Outward Hound PoochPouch Front Carrier",
        badge: "Best for Small Dogs",
        description:
          "Front-facing kangaroo-style carrier that keeps small dogs close to your chest during walks and hikes.",
        features: [
          "Front-facing design for bonding",
          "Interior safety leash attachment",
          "Adjustable padded straps",
        ],
        asin: "B007V77IN0",
        price: "$24.99",
        rating: 4.2,
        reviewCount: "8K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-feeders",
    title: "Best Automatic Dog Feeders (2026)",
    description:
      "Timed feeders that keep your dog on schedule even when you\u2019re away \u2014 with portion control and app connectivity.",
    picks: [
      {
        name: "PetSafe Smart Feed 2.0",
        badge: "Best Overall",
        description:
          "Wi-Fi enabled automatic feeder with flexible scheduling, portion control, and slow-feed mode.",
        features: [
          "Schedule up to 12 meals per day via app",
          "Slow feed mode dispenses food gradually",
          "24-cup hopper capacity",
        ],
        asin: "B0B54HFFXJ",
        price: "$149.95",
        rating: 4.3,
        reviewCount: "10K+",
        prime: true,
      },
      {
        name: "PETLIBRO Automatic Cat & Dog Feeder",
        badge: "Best Value",
        description:
          "Reliable timed feeder with a twist-lock lid, freshness seal, and 10-second voice recorder.",
        features: [
          "Up to 6 meals per day scheduling",
          "Twist-lock lid and desiccant box",
          "10-second meal call recording",
        ],
        asin: "B098DT7VTN",
        price: "$39.99",
        rating: 4.4,
        reviewCount: "28K+",
        prime: true,
      },
      {
        name: "PETKIT Fresh Element Solo",
        badge: "Premium Pick",
        description:
          "Smart feeder with a built-in food scale, stainless steel bowl, and app-based portion tracking.",
        features: [
          "Built-in food scale for precise portions",
          "304 stainless steel bowl",
          "Dual power (battery + adapter)",
        ],
        asin: "B0B2JQZL94",
        price: "$89.99",
        rating: 4.3,
        reviewCount: "5K+",
        prime: true,
      },
      {
        name: "Amazon Basics Gravity Pet Food Feeder",
        badge: "Best Budget",
        description:
          "Simple gravity-fed feeder that refills the bowl automatically as your dog eats, no power needed.",
        features: [
          "No batteries or power required",
          "6-lb food hopper capacity",
          "BPA-free and dishwasher safe",
        ],
        asin: "B07QMQ3FWM",
        price: "$14.99",
        rating: 4.3,
        reviewCount: "20K+",
        prime: true,
      },
      {
        name: "WOPET Automatic Dog Feeder",
        badge: "Editor\u2019s Choice",
        description:
          "Programmable feeder with a stainless steel tray, voice recorder, and low-food indicator.",
        features: [
          "1-4 meals per day with 1-39 portions each",
          "Stainless steel food tray for hygiene",
          "Voice recorder plays at feeding time",
        ],
        asin: "B0768H3Y9K",
        price: "$45.99",
        rating: 4.3,
        reviewCount: "15K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-boots",
    title: "Best Dog Boots (2026)",
    description:
      "Protect your dog\u2019s paws from hot pavement, ice, salt, and rough terrain with boots that actually stay on.",
    picks: [
      {
        name: "QUMY Dog Boots Waterproof",
        badge: "Best Overall",
        description:
          "Rugged waterproof boots with anti-slip soles, reflective straps, and a wide split seam for easy on/off.",
        features: [
          "Waterproof with anti-slip rubber sole",
          "Two reflective adjustable straps",
          "Wide split seam opening",
        ],
        asin: "B01N0O4TQD",
        price: "$19.99",
        rating: 4.3,
        reviewCount: "28K+",
        prime: true,
      },
      {
        name: "Ruffwear Grip Trex Boots",
        badge: "Premium Pick",
        description:
          "Trail-ready boots with Vibram outsoles and a secure closure system built for rugged terrain.",
        features: [
          "Vibram non-marking outsole",
          "Breathable mesh upper",
          "Secure hook-and-loop closure",
        ],
        asin: "B074KGKP3H",
        price: "$41.95",
        rating: 4.3,
        reviewCount: "5K+",
        prime: true,
      },
      {
        name: "Ultra Paws Durable Dog Boots",
        badge: "Editor\u2019s Choice",
        description:
          "Foam-soled boots with wraparound Velcro closures and water-resistant fabric that stay put.",
        features: [
          "Closed-cell foam soles",
          "Wraparound Velcro for secure fit",
          "Water-resistant nylon upper",
        ],
        asin: "B005ESDKEO",
        price: "$34.95",
        rating: 4.2,
        reviewCount: "4K+",
        prime: true,
      },
      {
        name: "PAWZ Natural Rubber Dog Boots",
        badge: "Best Budget",
        description:
          "Disposable balloon-style rubber boots that fit snugly and provide a barrier against salt, chemicals, and hot surfaces.",
        features: [
          "100% natural rubber, biodegradable",
          "Semi-disposable (reusable several times)",
          "Sold in packs of 12",
        ],
        asin: "B005BUSZ5C",
        price: "$17.50",
        rating: 4.1,
        reviewCount: "15K+",
        prime: true,
      },
      {
        name: "Muttluks Fleece-Lined Boots",
        badge: "Best for Large Dogs",
        description:
          "Canadian-made winter boots with fleece lining, leather soles, and a stretchy leg cuff.",
        features: [
          "Genuine leather soles for traction",
          "Warm fleece lining for cold weather",
          "Reflective trim for visibility",
        ],
        asin: "B001V7M23C",
        price: "$64.95",
        rating: 4.4,
        reviewCount: "3K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-raincoats",
    title: "Best Dog Raincoats (2026)",
    description:
      "Waterproof coats that keep your dog dry without restricting movement \u2014 from lightweight shells to full-coverage slickers.",
    picks: [
      {
        name: "HDE Dog Raincoat",
        badge: "Best Overall",
        description:
          "Lightweight waterproof raincoat with a transparent hood, reflective strips, and a leash hole.",
        features: [
          "Fully waterproof PU material",
          "Transparent hood with drawstring",
          "Reflective safety strips",
        ],
        asin: "B019DCBPUY",
        price: "$14.99",
        rating: 4.3,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "Canada Pooch Torrential Tracker",
        badge: "Premium Pick",
        description:
          "Premium rain jacket with 3M reflective accents, fleece lining, and a leash-accessible design.",
        features: [
          "Waterproof shell with fleece lining",
          "3M reflective accents throughout",
          "Full belly coverage for warmth",
        ],
        asin: "B07B4C7XB9",
        price: "$54.99",
        rating: 4.4,
        reviewCount: "2K+",
        prime: true,
      },
      {
        name: "Ellie Dog Wear Yellow Raincoat",
        badge: "Editor\u2019s Choice",
        description:
          "Classic yellow slicker with a detachable hood, two-layer waterproof fabric, and a button-snap belly closure.",
        features: [
          "Two-layer waterproof construction",
          "Detachable hood for versatility",
          "Adjustable chest strap",
        ],
        asin: "B07QP4NV4D",
        price: "$26.99",
        rating: 4.3,
        reviewCount: "6K+",
        prime: true,
      },
      {
        name: "Cosibell Waterproof Dog Raincoat",
        badge: "Best Budget",
        description:
          "Affordable four-leg raincoat with reflective strips and a belly strap to keep your dog fully covered.",
        features: [
          "Full four-leg coverage",
          "Lightweight and packable",
          "Adjustable belly and neck straps",
        ],
        asin: "B07RN5S9D1",
        price: "$16.99",
        rating: 4.2,
        reviewCount: "8K+",
        prime: true,
      },
      {
        name: "Hurtta Downpour Suit",
        badge: "Best for Large Dogs",
        description:
          "Finnish-designed full-body rain suit with 3M reflectors and a hind-leg design that covers the whole dog.",
        features: [
          "Hase and laminate waterproof material",
          "3M reflectors for visibility",
          "Adjustable rear and collar",
        ],
        asin: "B009YXAGEW",
        price: "$79.00",
        rating: 4.5,
        reviewCount: "1K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-cooling",
    title: "Best Dog Cooling Products (2026)",
    description:
      "Beat the heat with cooling mats, vests, and bandanas that keep your dog comfortable all summer long.",
    picks: [
      {
        name: "The Green Pet Shop Cooling Mat",
        badge: "Best Overall",
        description:
          "Pressure-activated gel cooling mat that requires no water, electricity, or refrigeration.",
        features: [
          "Pressure-activated cooling gel",
          "No water, power, or freezing needed",
          "Recharges itself after 15-20 min of non-use",
        ],
        asin: "B07GDRPZPB",
        price: "$32.99",
        rating: 4.3,
        reviewCount: "22K+",
        prime: true,
      },
      {
        name: "Ruffwear Swamp Cooler Vest",
        badge: "Premium Pick",
        description:
          "Evaporative cooling vest that you soak in water, wring out, and put on your dog for hours of cooling.",
        features: [
          "Three-layer evaporative cooling",
          "UPF 50+ sun protection",
          "Reflective trim for visibility",
        ],
        asin: "B07543MXBF",
        price: "$49.95",
        rating: 4.4,
        reviewCount: "4K+",
        prime: true,
      },
      {
        name: "Canada Pooch Chill Seeker Cooling Vest",
        badge: "Editor\u2019s Choice",
        description:
          "Soak-and-wear cooling vest with UPF 50+ protection and a secure Velcro closure.",
        features: [
          "Wet, wring, and wear technology",
          "UPF 50+ sun protection",
          "Lightweight and flexible",
        ],
        asin: "B07QV9HQZJ",
        price: "$34.99",
        rating: 4.3,
        reviewCount: "3K+",
        prime: true,
      },
      {
        name: "ALL FOR PAWS Cooling Mat",
        badge: "Best Budget",
        description:
          "Affordable self-cooling gel pad that activates on contact and folds for travel.",
        features: [
          "Non-toxic cooling gel",
          "Foldable and portable",
          "Scratch-resistant surface",
        ],
        asin: "B07BVHB24C",
        price: "$19.99",
        rating: 4.2,
        reviewCount: "12K+",
        prime: true,
      },
      {
        name: "K&H Coolin\u2019 Pet Cot Elevated Bed",
        badge: "Best for Large Dogs",
        description:
          "Elevated mesh cot that promotes airflow from all sides to keep dogs cool off the hot ground.",
        features: [
          "Elevated design promotes 360\u00b0 airflow",
          "Breathable mesh center",
          "Indoor/outdoor use, supports up to 150 lbs",
        ],
        asin: "B003SZSVGI",
        price: "$37.99",
        rating: 4.5,
        reviewCount: "20K+",
        prime: true,
      },
    ],
  },
  {
    slug: "dog-puzzle-toys",
    title: "Best Dog Puzzle Toys & Enrichment (2026)",
    description:
      "Mental stimulation is just as important as physical exercise \u2014 these puzzle feeders and enrichment toys fight boredom and anxiety.",
    picks: [
      {
        name: "Outward Hound Nina Ottosson Puzzle",
        badge: "Best Overall",
        description:
          "Multi-level interactive puzzle with sliding covers and flip-up compartments that challenge your dog to find hidden treats.",
        features: [
          "Multiple difficulty levels",
          "BPA, PVC, and phthalate-free materials",
          "Dishwasher-safe top rack",
        ],
        asin: "B0711Y9Y8W",
        price: "$14.99",
        rating: 4.5,
        reviewCount: "45K+",
        prime: true,
      },
      {
        name: "AWOOF Snuffle Mat",
        badge: "Best Value",
        description:
          "Fleece snuffle mat that mimics grass foraging, slowing down fast eaters and providing mental enrichment.",
        features: [
          "Dense fleece strips hide treats",
          "Non-slip backing",
          "Machine washable",
        ],
        asin: "B07N1CTWVS",
        price: "$16.99",
        rating: 4.4,
        reviewCount: "18K+",
        prime: true,
      },
      {
        name: "West Paw Toppl Interactive Toy",
        badge: "Premium Pick",
        description:
          "Stuffable rubber toy with an open design that\u2019s easier than a Kong for beginners and can be interlocked in two sizes.",
        features: [
          "Made in USA from Zogoflex material",
          "Dishwasher safe and BPA-free",
          "Two sizes interlock for harder challenge",
        ],
        asin: "B00KCBG2C0",
        price: "$15.95",
        rating: 4.5,
        reviewCount: "12K+",
        prime: true,
      },
      {
        name: "LickiMat Classic Soother",
        badge: "Editor\u2019s Choice",
        description:
          "Textured lick mat that you spread with peanut butter, yogurt, or wet food to promote calming, slow licking.",
        features: [
          "Promotes calming through repetitive licking",
          "Textured surface for dental health",
          "Freeze for longer-lasting enrichment",
        ],
        asin: "B07FXDD4PC",
        price: "$9.95",
        rating: 4.4,
        reviewCount: "25K+",
        prime: true,
      },
      {
        name: "Bob-A-Lot Interactive Treat Dispenser",
        badge: "Most Popular",
        description:
          "Wobbling treat-dispensing toy with adjustable openings that make your dog work for every kibble.",
        features: [
          "Two adjustable openings for difficulty",
          "Large chamber holds a full meal",
          "Weighted bottom wobbles unpredictably",
        ],
        asin: "B003ARUKU0",
        price: "$15.99",
        rating: 4.4,
        reviewCount: "30K+",
        prime: true,
      },
    ],
  },
  {
    slug: "puppy-essentials",
    title: "Best Puppy Essentials (2026)",
    description:
      "Bringing home a new puppy is exciting \u2014 make sure you have all the essentials ready before arrival day so your pup feels safe and you feel prepared.",
    picks: [
      {
        name: "MidWest iCrate Starter Kit",
        badge: "Best Overall",
        description:
          "Complete crate starter kit with a double-door crate, bed, cover, and two bowls in one box.",
        features: [
          "Includes crate, bed, cover, and bowls",
          "Divider panel grows with your puppy",
          "Folds flat for storage and travel",
        ],
        asin: "B000QFT1R2",
        price: "$47.99",
        rating: 4.7,
        reviewCount: "95K+",
        prime: true,
      },
      {
        name: "Nature\u2019s Miracle Stain & Odor Remover",
        badge: "Editor\u2019s Choice",
        description:
          "Bio-enzymatic cleaner that permanently eliminates puppy accident stains and odors from any surface.",
        features: [
          "Bio-enzymatic formula destroys odor at the source",
          "Safe for carpets, hardwood, and fabric",
          "Discourages re-soiling in the same spot",
        ],
        asin: "B06XKBS9YJ",
        price: "$11.97",
        rating: 4.5,
        reviewCount: "85K+",
        prime: true,
      },
      {
        name: "KONG Puppy Toy",
        badge: "Best Budget",
        description:
          "Soft rubber Kong designed specifically for puppy teeth, perfect for stuffing with treats and teething.",
        features: [
          "Softer rubber formula for puppy teeth",
          "Stuff with treats for enrichment",
          "Helps soothe teething discomfort",
        ],
        asin: "B0002AR15U",
        price: "$9.99",
        rating: 4.6,
        reviewCount: "35K+",
        prime: true,
      },
      {
        name: "Amazon Basics Puppy Pads (100-ct)",
        badge: "Best for Small Dogs",
        description:
          "Super-absorbent 5-layer puppy training pads with a quick-dry surface and leak-proof backing.",
        features: [
          "5-layer construction locks in moisture",
          "Quick-dry surface prevents tracking",
          "Built-in attractant for training",
        ],
        asin: "B00MW8G62E",
        price: "$21.49",
        rating: 4.4,
        reviewCount: "180K+",
        prime: true,
      },
      {
        name: "Blue Buffalo Life Protection Puppy",
        badge: "Best Premium",
        description:
          "Whole-grain puppy food with DHA, ARA, and LifeSource Bits for growth and immune development.",
        features: [
          "DHA and ARA for brain and eye development",
          "LifeSource Bits with antioxidants",
          "Real deboned chicken first ingredient",
        ],
        asin: "B001FV4862",
        price: "$59.98",
        rating: 4.7,
        reviewCount: "28K+",
        prime: true,
      },
    ],
  },
];

export function getProductCategoryBySlug(
  slug: string
): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
