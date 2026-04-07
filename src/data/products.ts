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
        asin: "B07MXS21VH",
        price: "$139.00",
        rating: 4.5,
        reviewCount: "12,427",
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
        asin: "B0748GCVH4",
        price: "$34.99",
        rating: 4.4,
        reviewCount: "89,215",
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
        asin: "B009RH8V8G",
        price: "$279.95",
        rating: 4.7,
        reviewCount: "8,134",
        prime: true,
      },
      {
        name: "K&H Pet Products Cooling Bed",
        badge: "Editor\u2019s Choice",
        description:
          "Gel-infused cooling core keeps dogs comfortable during warm months without electricity.",
        features: [
          "Pressure-activated cooling gel layer",
          "No water or electricity needed",
          "Slip-resistant bottom",
        ],
        asin: "B07F3WJRQB",
        price: "$29.99",
        rating: 4.3,
        reviewCount: "15,642",
        prime: true,
      },
      {
        name: "Barkbox Memory Foam Platform Bed",
        badge: "Best Premium",
        description:
          "High-density gel memory foam with a waterproof liner and cuddly sherpa top.",
        features: [
          "High-density gel memory foam base",
          "Built-in waterproof liner",
          "Sherpa fleece sleeping surface",
        ],
        asin: "B08CXPN4D4",
        price: "$89.99",
        rating: 4.5,
        reviewCount: "22,318",
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
        name: "Purina Pro Plan Adult Complete",
        badge: "Best Overall",
        description:
          "Veterinarian-recommended formula with real chicken and balanced macronutrients for everyday health.",
        features: [
          "Real chicken is the #1 ingredient",
          "Fortified with live probiotics",
          "Omega-6 fatty acids for coat health",
        ],
        asin: "B001VJ8DXE",
        price: "$52.98",
        rating: 4.7,
        reviewCount: "32,109",
        prime: true,
      },
      {
        name: "Diamond Naturals Adult Chicken & Rice",
        badge: "Best Budget",
        description:
          "Affordable nutrient-dense formula made with cage-free chicken and no corn, wheat, or fillers.",
        features: [
          "Cage-free chicken first ingredient",
          "Added superfoods like chia seed and kale",
          "Made in USA facilities",
        ],
        asin: "B000OCRH6S",
        price: "$39.99",
        rating: 4.6,
        reviewCount: "18,743",
        prime: true,
      },
      {
        name: "Orijen Original Dry Dog Food",
        badge: "Best Premium",
        description:
          "Biologically appropriate diet with 85% animal ingredients including free-run poultry and wild-caught fish.",
        features: [
          "85% quality animal ingredients",
          "WholePrey ratios with organs and bone",
          "Freeze-dried liver coating for taste",
        ],
        asin: "B00N44FKGM",
        price: "$89.99",
        rating: 4.6,
        reviewCount: "7,215",
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
        asin: "B000W5SLB8",
        price: "$54.99",
        rating: 4.7,
        reviewCount: "28,412",
        prime: true,
      },
      {
        name: "Blue Buffalo Life Protection Puppy",
        badge: "Best for Small Dogs",
        description:
          "Small-breed puppy formula with DHA for brain development and precise small-kibble sizing.",
        features: [
          "DHA and ARA for brain and eye development",
          "Small kibble for tiny mouths",
          "LifeSource Bits with antioxidants",
        ],
        asin: "B000GKC6YO",
        price: "$44.98",
        rating: 4.7,
        reviewCount: "15,328",
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
        name: "Kong Classic",
        badge: "Best Overall",
        description:
          "The gold standard in durable dog toys, perfect for stuffing with treats and bouncing unpredictably.",
        features: [
          "Natural rubber withstands heavy chewing",
          "Stuff with peanut butter or kibble",
          "Unpredictable bounce for solo play",
        ],
        asin: "B0002AR0I8",
        price: "$11.99",
        rating: 4.7,
        reviewCount: "112,534",
        prime: true,
      },
      {
        name: "Outward Hound Nina Ottosson Puzzle",
        badge: "Editor\u2019s Choice",
        description:
          "Multi-level puzzle feeder that challenges dogs to slide, flip, and lift compartments for hidden treats.",
        features: [
          "Three difficulty levels in one toy",
          "BPA-free and dishwasher-safe",
          "Slows eating and reduces boredom",
        ],
        asin: "B0711Y9Y8W",
        price: "$14.99",
        rating: 4.5,
        reviewCount: "34,812",
        prime: true,
      },
      {
        name: "Chuckit! Ultra Ball",
        badge: "Best Budget",
        description:
          "High-bounce, high-visibility rubber ball designed for long-distance fetching sessions.",
        features: [
          "Thick natural rubber core",
          "High-visibility orange and blue",
          "Compatible with Chuckit! launchers",
        ],
        asin: "B000F4AVPA",
        price: "$7.49",
        rating: 4.7,
        reviewCount: "67,319",
        prime: true,
      },
      {
        name: "Goughnuts Maxx Ring",
        badge: "Best for Large Dogs",
        description:
          "Virtually indestructible rubber ring designed for the most powerful chewers with a safety indicator.",
        features: [
          "Industrial-strength natural rubber",
          "Red safety layer signals when to replace",
          "Guaranteed replacement if destroyed",
        ],
        asin: "B002AQFH3G",
        price: "$34.95",
        rating: 4.4,
        reviewCount: "5,218",
        prime: true,
      },
      {
        name: "ZippyPaws Skinny Peltz",
        badge: "Best for Small Dogs",
        description:
          "Lightweight no-stuffing plush toys with multiple squeakers that small dogs love to shake and carry.",
        features: [
          "No stuffing means less mess",
          "Multiple squeakers per toy",
          "Comes in a 3-pack of animals",
        ],
        asin: "B00XWTM8WI",
        price: "$7.99",
        rating: 4.6,
        reviewCount: "45,102",
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
        name: "Zuke\u2019s Mini Naturals",
        badge: "Best Overall",
        description:
          "Tiny, soft training treats with real chicken and less than 3 calories each for guilt-free rewarding.",
        features: [
          "Under 3 calories per treat",
          "Real chicken first ingredient",
          "Soft texture for quick eating during training",
        ],
        asin: "B000H0ZJHW",
        price: "$11.49",
        rating: 4.7,
        reviewCount: "41,276",
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
        asin: "B001G96GK2",
        price: "$32.98",
        rating: 4.6,
        reviewCount: "58,934",
        prime: true,
      },
      {
        name: "Milk-Bone MaroSnacks",
        badge: "Best Budget",
        description:
          "Crunchy biscuits with real bone marrow flavor that dogs go crazy for at a wallet-friendly price.",
        features: [
          "Real bone marrow center",
          "12 vitamins and minerals added",
          "Resealable pouch stays fresh",
        ],
        asin: "B001CSMDF0",
        price: "$5.48",
        rating: 4.7,
        reviewCount: "72,518",
        prime: true,
      },
      {
        name: "Rocco & Roxie Jerky Sticks",
        badge: "Best Premium",
        description:
          "Slow-smoked, USA-sourced jerky made from premium cuts with no artificial preservatives.",
        features: [
          "Slow-smoked in small batches",
          "100% USA-sourced beef",
          "No artificial colors or flavors",
        ],
        asin: "B01LX0LIGR",
        price: "$24.97",
        rating: 4.5,
        reviewCount: "19,847",
        prime: true,
      },
      {
        name: "Pet Naturals Calming Chews",
        badge: "Best for Small Dogs",
        description:
          "Thiamine and L-Theanine calming soft chews that help reduce anxiety without drowsiness.",
        features: [
          "Colostrum calming complex",
          "L-Theanine for relaxation",
          "Chicken liver flavor dogs love",
        ],
        asin: "B003HU8VDA",
        price: "$9.74",
        rating: 4.3,
        reviewCount: "26,411",
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
        name: "Furminator Deshedding Tool",
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
        reviewCount: "78,214",
        prime: true,
      },
      {
        name: "Wahl Bravura Lithium Clippers",
        badge: "Best Premium",
        description:
          "Professional-grade cordless clippers with a powerful lithium-ion motor and adjustable blade.",
        features: [
          "90-minute cordless runtime",
          "5-in-1 adjustable blade (9, 10, 15, 30, 40)",
          "Low vibration and quiet operation",
        ],
        asin: "B00CHAG0JK",
        price: "$149.99",
        rating: 4.5,
        reviewCount: "9,832",
        prime: true,
      },
      {
        name: "Burt\u2019s Bees Oatmeal Dog Shampoo",
        badge: "Best Budget",
        description:
          "Gentle, pH-balanced shampoo with colloidal oatmeal that soothes dry and itchy skin naturally.",
        features: [
          "Colloidal oatmeal and honey formula",
          "No sulfates, colorants, or harsh chemicals",
          "pH balanced for dogs",
        ],
        asin: "B00CHAG0NO",
        price: "$9.97",
        rating: 4.6,
        reviewCount: "53,612",
        prime: true,
      },
      {
        name: "Dremel PawControl Nail Grinder",
        badge: "Editor\u2019s Choice",
        description:
          "Quiet cordless nail grinder with a paw guard that catches filings for mess-free trimming.",
        features: [
          "Built-in paw guard catches dust",
          "4-speed settings for control",
          "LED light illuminates the nail",
        ],
        asin: "B09BFHL21K",
        price: "$34.99",
        rating: 4.4,
        reviewCount: "18,427",
        prime: true,
      },
      {
        name: "Chris Christensen Big G Slicker Brush",
        badge: "Best for Large Dogs",
        description:
          "Large coral slicker brush that detangles and fluffs all coat types without pulling or scratching skin.",
        features: [
          "Long, bent stainless steel pins",
          "Cushioned pad prevents skin irritation",
          "Large head covers more area quickly",
        ],
        asin: "B004XIWEMQ",
        price: "$42.99",
        rating: 4.6,
        reviewCount: "6,519",
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
        name: "MidWest iCrate Double Door",
        badge: "Best Overall",
        description:
          "Versatile double-door wire crate with a divider panel that grows with your puppy.",
        features: [
          "Double door for flexible placement",
          "Included divider panel for puppies",
          "Folds flat for easy transport",
        ],
        asin: "B000QFNPGM",
        price: "$47.99",
        rating: 4.7,
        reviewCount: "94,215",
        prime: true,
      },
      {
        name: "AmazonBasics Folding Metal Crate",
        badge: "Best Budget",
        description:
          "Reliable single-door wire crate with all the essentials at an affordable price.",
        features: [
          "Single-door design with secure slide-bolt latch",
          "Removable composite plastic pan",
          "Folds flat with carrying handle",
        ],
        asin: "B00QAVO29O",
        price: "$37.49",
        rating: 4.6,
        reviewCount: "65,318",
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
        asin: "B07VXHFFDQ",
        price: "$375.00",
        rating: 4.4,
        reviewCount: "3,412",
        prime: true,
      },
      {
        name: "Petmate Ultra Vari Kennel",
        badge: "Editor\u2019s Choice",
        description:
          "Airline-approved hard-shell kennel with heavy-duty construction for safe travel.",
        features: [
          "Meets most airline cargo requirements",
          "Heavy-duty tie-down strap holes",
          "360-degree ventilation openings",
        ],
        asin: "B0002DHOJW",
        price: "$78.99",
        rating: 4.5,
        reviewCount: "21,847",
        prime: true,
      },
      {
        name: "Impact Collapsible Aluminum Crate",
        badge: "Best for Large Dogs",
        description:
          "Escape-proof aluminum crate built for strong dogs with reinforced latches and rounded corners.",
        features: [
          "Aircraft-grade aluminum construction",
          "Slam-latch door closure system",
          "Rounded corners and edges for safety",
        ],
        asin: "B00JGTPYRA",
        price: "$599.00",
        rating: 4.7,
        reviewCount: "2,184",
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
        name: "Ruffwear Front Range Harness",
        badge: "Best Overall",
        description:
          "Everyday padded harness with front and back leash attachments and four adjustment points.",
        features: [
          "Front and back leash attachment rings",
          "Four points of adjustment for custom fit",
          "Padded chest and belly panels",
        ],
        asin: "B07BFWB12K",
        price: "$39.95",
        rating: 4.7,
        reviewCount: "18,429",
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
        asin: "B0009ZBKG0",
        price: "$21.95",
        rating: 4.3,
        reviewCount: "47,612",
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
        asin: "B005OSXRMU",
        price: "$39.99",
        rating: 4.6,
        reviewCount: "31,824",
        prime: true,
      },
      {
        name: "Puppia Soft Vest Harness",
        badge: "Best for Small Dogs",
        description:
          "Lightweight air-mesh vest harness that is gentle on small dogs and easy to slip on.",
        features: [
          "Soft air-mesh material",
          "Step-in design for easy dressing",
          "Adjustable chest belt",
        ],
        asin: "B003XEDCRQ",
        price: "$17.99",
        rating: 4.5,
        reviewCount: "23,517",
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
        asin: "B00164SNXS",
        price: "$29.95",
        rating: 4.4,
        reviewCount: "14,218",
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
        name: "Max and Neo Double Handle Leash",
        badge: "Best Overall",
        description:
          "Reflective nylon leash with a traffic handle near the collar for close control in busy areas.",
        features: [
          "Dual handles for distance and close control",
          "Reflective stitching for night walks",
          "Padded neoprene handles",
        ],
        asin: "B01MXIHGLQ",
        price: "$15.99",
        rating: 4.7,
        reviewCount: "8,429",
        prime: true,
      },
      {
        name: "PetSafe Nylon Dog Leash",
        badge: "Best Budget",
        description:
          "Simple, durable nylon leash in multiple lengths and colors at a no-frills price.",
        features: [
          "Strong nylon webbing",
          "Sturdy bolt-snap clip",
          "Available in 4, 6, and 8-foot lengths",
        ],
        asin: "B000JCDJAQ",
        price: "$6.95",
        rating: 4.6,
        reviewCount: "35,214",
        prime: true,
      },
      {
        name: "Mighty Paw Hands-Free Bungee Leash",
        badge: "Editor\u2019s Choice",
        description:
          "Waist-worn bungee leash designed for runners and hikers with dual handles and shock absorption.",
        features: [
          "Adjustable waist belt fits up to 42 inches",
          "Dual bungee absorbs sudden pulls",
          "Traffic handle near the collar clip",
        ],
        asin: "B01COFJ7GU",
        price: "$21.99",
        rating: 4.5,
        reviewCount: "11,318",
        prime: true,
      },
      {
        name: "Mendota British-Style Slip Lead",
        badge: "Best Premium",
        description:
          "Handmade in the USA, this combination collar-and-leash slip lead is a trainer favorite.",
        features: [
          "Premium braided rope construction",
          "Leather accents and solid brass hardware",
          "Handmade in the USA",
        ],
        asin: "B0002AQKHW",
        price: "$19.99",
        rating: 4.7,
        reviewCount: "7,842",
        prime: true,
      },
      {
        name: "TaoTronics Retractable Dog Leash",
        badge: "Best for Small Dogs",
        description:
          "Lightweight retractable leash with a 16-foot cord and one-button brake-and-lock system.",
        features: [
          "16-foot retractable cord",
          "One-button brake and lock",
          "Ergonomic anti-slip handle",
        ],
        asin: "B07H3DHJYZ",
        price: "$13.99",
        rating: 4.4,
        reviewCount: "16,529",
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
        name: "Yeti Boomer 8 Dog Bowl",
        badge: "Best Overall",
        description:
          "Double-walled stainless steel bowl that is virtually indestructible and dishwasher safe.",
        features: [
          "18/8 stainless steel, BPA-free",
          "Non-slip ring on the base",
          "Dishwasher safe",
        ],
        asin: "B07R53VN8N",
        price: "$50.00",
        rating: 4.8,
        reviewCount: "6,312",
        prime: true,
      },
      {
        name: "AmazonBasics Stainless Steel Bowl",
        badge: "Best Budget",
        description:
          "No-nonsense stainless steel bowl with a rubber base that gets the job done affordably.",
        features: [
          "Rust-resistant stainless steel",
          "Non-skid rubber base ring",
          "Available in 6 sizes",
        ],
        asin: "B07JQQ4TLB",
        price: "$5.49",
        rating: 4.6,
        reviewCount: "42,718",
        prime: true,
      },
      {
        name: "Outward Hound Fun Feeder Slo Bowl",
        badge: "Editor\u2019s Choice",
        description:
          "Maze-pattern slow feeder that extends mealtime up to 10x, reducing bloat and improving digestion.",
        features: [
          "Meal-lengthening ridge pattern",
          "BPA, PVC, and phthalate-free",
          "Non-slip base prevents sliding",
        ],
        asin: "B00FPKNRCS",
        price: "$10.95",
        rating: 4.6,
        reviewCount: "87,421",
        prime: true,
      },
      {
        name: "PetFusion Elevated Dog Bowl Stand",
        badge: "Best for Large Dogs",
        description:
          "Bamboo elevated stand with two stainless steel bowls for comfortable dining posture.",
        features: [
          "Natural bamboo stand with waterproof coating",
          "Two included stainless steel bowls",
          "Raised height reduces neck strain",
        ],
        asin: "B00TQ7KEEY",
        price: "$34.95",
        rating: 4.5,
        reviewCount: "8,927",
        prime: true,
      },
      {
        name: "PetSafe Smart Feed Automatic Feeder",
        badge: "Best Premium",
        description:
          "WiFi-connected automatic feeder you control from your phone with scheduled and on-demand meals.",
        features: [
          "Schedule up to 12 meals per day via app",
          "Slow-feed mode available",
          "Holds 24 cups of dry food",
        ],
        asin: "B073RH8W9V",
        price: "$169.95",
        rating: 4.3,
        reviewCount: "11,214",
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
        name: "Nutramax Cosequin DS Plus MSM",
        badge: "Best Overall",
        description:
          "The #1 vet-recommended joint supplement with glucosamine, chondroitin, and MSM for mobility support.",
        features: [
          "#1 veterinarian-recommended brand",
          "Glucosamine, chondroitin, and MSM",
          "Chewable tablet dogs take willingly",
        ],
        asin: "B001E0LZIM",
        price: "$38.99",
        rating: 4.7,
        reviewCount: "24,318",
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
        asin: "B0727Y5CVG",
        price: "$25.97",
        rating: 4.5,
        reviewCount: "67,412",
        prime: true,
      },
      {
        name: "Purina Pro Plan Veterinary FortiFlora",
        badge: "Editor\u2019s Choice",
        description:
          "Probiotic supplement that promotes normal intestinal health and firm stool quality.",
        features: [
          "Contains live active cultures",
          "Sprinkle-on powder format",
          "Recommended by veterinarians",
        ],
        asin: "B001650N6O",
        price: "$30.99",
        rating: 4.7,
        reviewCount: "34,219",
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
        asin: "B007V4IG80",
        price: "$27.46",
        rating: 4.6,
        reviewCount: "8,142",
        prime: true,
      },
      {
        name: "VetriScience GlycoFlex Stage 3",
        badge: "Best for Large Dogs",
        description:
          "Maximum-strength joint formula with Perna mussel, DMG, and MSM for dogs with advanced joint needs.",
        features: [
          "Perna canaliculus (green-lipped mussel)",
          "DMG for immune and joint support",
          "Clinically proven to increase hind-leg strength",
        ],
        asin: "B0002AQMJK",
        price: "$42.99",
        rating: 4.5,
        reviewCount: "5,618",
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
        name: "Furbo 360 Dog Camera",
        badge: "Best Overall",
        description:
          "360-degree rotating camera with treat tossing, barking alerts, and full-room coverage.",
        features: [
          "360-degree auto-tracking rotation",
          "Treat tossing with adjustable distance",
          "Real-time barking and activity alerts",
        ],
        asin: "B0BN41SN7Y",
        price: "$159.99",
        rating: 4.3,
        reviewCount: "12,814",
        prime: true,
      },
      {
        name: "Wyze Cam v4",
        badge: "Best Budget",
        description:
          "Incredibly affordable indoor camera with color night vision and two-way audio for pet monitoring.",
        features: [
          "Full-color night vision",
          "Two-way audio with noise cancellation",
          "Motion and sound detection zones",
        ],
        asin: "B0CRJWJG16",
        price: "$35.98",
        rating: 4.4,
        reviewCount: "8,429",
        prime: true,
      },
      {
        name: "Petcube Bites 2 Lite",
        badge: "Editor\u2019s Choice",
        description:
          "Sleek treat-dispensing camera with 1080p HD, built-in Alexa, and a wide 160-degree lens.",
        features: [
          "1080p HD with 160-degree wide-angle lens",
          "Built-in treat dispenser",
          "Alexa built-in for voice commands",
        ],
        asin: "B08LM51JDK",
        price: "$149.00",
        rating: 4.2,
        reviewCount: "4,218",
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
        asin: "B0B6GK23VL",
        price: "$29.99",
        rating: 4.5,
        reviewCount: "38,214",
        prime: true,
      },
      {
        name: "Eufy Indoor Cam S350",
        badge: "Best Premium",
        description:
          "Dual-camera system with 4K wide-angle and 2K telephoto for unmatched detail and zoom.",
        features: [
          "4K wide-angle + 2K telephoto dual lens",
          "8x hybrid zoom with AI tracking",
          "Local storage with no monthly fee",
        ],
        asin: "B0CDGS8D2K",
        price: "$64.99",
        rating: 4.4,
        reviewCount: "5,312",
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
        name: "Fi Series 3 Smart Collar",
        badge: "Best Overall",
        description:
          "GPS smart collar with LTE-M tracking, escape alerts, and a battery that lasts up to 3 months.",
        features: [
          "LTE-M, WiFi, and Bluetooth tracking",
          "Battery lasts up to 3 months in normal use",
          "Instant escape alerts via geofencing",
        ],
        asin: "B0BJ6LWQJK",
        price: "$99.00",
        rating: 4.2,
        reviewCount: "3,812",
        prime: true,
      },
      {
        name: "Apple AirTag (with Collar Mount)",
        badge: "Best Budget",
        description:
          "Ultra-affordable Bluetooth tracker that leverages the massive Find My network for passive location.",
        features: [
          "Uses Apple Find My network",
          "Replaceable battery lasts over a year",
          "Waterproof IP67-rated",
        ],
        asin: "B0933BVK6T",
        price: "$27.99",
        rating: 4.7,
        reviewCount: "312,418",
        prime: true,
      },
      {
        name: "Whistle Health + GPS",
        badge: "Editor\u2019s Choice",
        description:
          "Combines GPS location tracking with health monitoring for activity, sleep, and licking behaviors.",
        features: [
          "GPS location + health and fitness tracking",
          "Monitors scratching and licking patterns",
          "24/7 timeline of activities",
        ],
        asin: "B09VYJ3NM8",
        price: "$129.95",
        rating: 4.1,
        reviewCount: "6,217",
        prime: true,
      },
      {
        name: "Tractive GPS Dog Tracker",
        badge: "Best for Large Dogs",
        description:
          "Real-time GPS tracker with worldwide coverage, virtual fences, and a rugged waterproof design.",
        features: [
          "Real-time GPS updates every 2-3 seconds",
          "Works in 175+ countries",
          "Virtual fence with instant alerts",
        ],
        asin: "B07B4TG249",
        price: "$49.99",
        rating: 4.2,
        reviewCount: "14,318",
        prime: true,
      },
      {
        name: "Jiobit Smart Tag",
        badge: "Best for Small Dogs",
        description:
          "One of the smallest GPS trackers available, weighing under an ounce and designed for small pets.",
        features: [
          "Weighs less than 1 ounce",
          "Trusted Circle location sharing",
          "Encrypted end-to-end for privacy",
        ],
        asin: "B08JCXTHJ4",
        price: "$129.99",
        rating: 4.0,
        reviewCount: "2,814",
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
        name: "Virbac C.E.T. Enzymatic Toothpaste",
        badge: "Best Overall",
        description:
          "Veterinary-grade enzymatic toothpaste in poultry flavor that fights plaque without needing to rinse.",
        features: [
          "Dual-enzyme system fights plaque",
          "No rinsing required",
          "Poultry flavor dogs enjoy",
        ],
        asin: "B004ULXZ1I",
        price: "$11.49",
        rating: 4.6,
        reviewCount: "28,714",
        prime: true,
      },
      {
        name: "Arm & Hammer Fresh Spectrum Toothpaste Kit",
        badge: "Best Budget",
        description:
          "Baking-soda-based toothpaste kit with a finger brush and angled toothbrush included.",
        features: [
          "Baking soda neutralizes odors",
          "Includes finger brush and toothbrush",
          "Safe if swallowed",
        ],
        asin: "B003VKXJKW",
        price: "$7.49",
        rating: 4.4,
        reviewCount: "19,318",
        prime: true,
      },
      {
        name: "Whimzees Natural Dental Chews",
        badge: "Editor\u2019s Choice",
        description:
          "Vegetarian dental chews with a unique shape that scrubs teeth and freshens breath as dogs chew.",
        features: [
          "All-natural, vegetarian recipe",
          "Unique grooved shape cleans teeth",
          "Longer chew time than most dental sticks",
        ],
        asin: "B0107RDKSQ",
        price: "$32.99",
        rating: 4.6,
        reviewCount: "22,415",
        prime: true,
      },
      {
        name: "Oxyfresh Pet Dental Water Additive",
        badge: "Best Premium",
        description:
          "Tasteless, odorless water additive that fights bad breath and plaque with no brushing needed.",
        features: [
          "Tasteless and odorless formula",
          "Oxygene neutralizes bacteria",
          "Just add to water bowl daily",
        ],
        asin: "B001P1HQKY",
        price: "$19.95",
        rating: 4.5,
        reviewCount: "15,219",
        prime: true,
      },
      {
        name: "Nylabone Advanced Oral Care Kit",
        badge: "Best for Small Dogs",
        description:
          "Complete dental care kit sized for small dogs with a mini toothbrush, toothpaste, and finger brush.",
        features: [
          "Small-dog-sized brushes included",
          "Denta-C formula reduces plaque",
          "Fresh breath peanut butter flavor",
        ],
        asin: "B003VZ8K32",
        price: "$6.99",
        rating: 4.3,
        reviewCount: "11,842",
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
        name: "Ruffwear Overcoat Fuse Jacket",
        badge: "Best Overall",
        description:
          "Insulated, waterproof jacket with a built-in harness opening and reflective trim for all-weather outings.",
        features: [
          "Waterproof shell with synthetic insulation",
          "Integrated leash portal on back",
          "Reflective trim for low-light visibility",
        ],
        asin: "B07BFXKYBP",
        price: "$79.95",
        rating: 4.6,
        reviewCount: "4,218",
        prime: true,
      },
      {
        name: "Kurgo Loft Reversible Dog Jacket",
        badge: "Best Budget",
        description:
          "Lightweight reversible jacket with ripstop shell on one side and fleece on the other.",
        features: [
          "Reversible ripstop and fleece design",
          "Machine washable",
          "Zippered leash opening on back",
        ],
        asin: "B074M5RDBB",
        price: "$29.95",
        rating: 4.5,
        reviewCount: "12,814",
        prime: true,
      },
      {
        name: "Hurtta Extreme Warmer",
        badge: "Best Premium",
        description:
          "Finnish-designed extreme-cold jacket with Houndtex laminate and reflective 3M piping for harsh winters.",
        features: [
          "Houndtex waterproof breathable laminate",
          "High collar protects neck and throat",
          "Adjustable at back, collar, and hem",
        ],
        asin: "B00A8MJ3JC",
        price: "$89.00",
        rating: 4.5,
        reviewCount: "3,214",
        prime: true,
      },
      {
        name: "Canada Pooch True North Parka",
        badge: "Best for Large Dogs",
        description:
          "Premium parka with a water-resistant shell and Sherpa-lined interior sized up to XXL breeds.",
        features: [
          "Water-resistant exterior fabric",
          "Cozy Sherpa fleece lining",
          "Available up to size 28 (giant breeds)",
        ],
        asin: "B075QHFVG9",
        price: "$69.99",
        rating: 4.4,
        reviewCount: "2,918",
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
        asin: "B00KGXR9QG",
        price: "$15.99",
        rating: 4.4,
        reviewCount: "18,412",
        prime: true,
      },
    ],
  },
  {
    slug: "puppy-essentials",
    title: "New Puppy Essentials Checklist (2026)",
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
        asin: "B000OXAGSM",
        price: "$84.99",
        rating: 4.6,
        reviewCount: "15,412",
        prime: true,
      },
      {
        name: "Nature\u2019s Miracle Advanced Stain & Odor Eliminator",
        badge: "Editor\u2019s Choice",
        description:
          "Bio-enzymatic cleaner that permanently eliminates puppy accident stains and odors from any surface.",
        features: [
          "Bio-enzymatic formula destroys odor at the source",
          "Safe for carpets, hardwood, and fabric",
          "Discourages re-soiling in the same spot",
        ],
        asin: "B00CKFL93K",
        price: "$12.97",
        rating: 4.5,
        reviewCount: "68,214",
        prime: true,
      },
      {
        name: "PetSafe Puppy Starter Kit",
        badge: "Best Budget",
        description:
          "Affordable bundle with a puppy collar, leash, ID tag, and training clicker to get started.",
        features: [
          "Adjustable collar grows with puppy",
          "Matching 6-foot leash included",
          "Training clicker and ID tag in the box",
        ],
        asin: "B078X1T9LJ",
        price: "$19.95",
        rating: 4.4,
        reviewCount: "7,218",
        prime: true,
      },
      {
        name: "Kong Puppy Toy & Treat Bundle",
        badge: "Best for Small Dogs",
        description:
          "Soft rubber Kong puppy toy bundled with stuffable puppy treats designed for teething gums.",
        features: [
          "Softer rubber formula for puppy teeth",
          "Includes Kong puppy treat paste",
          "Helps soothe teething discomfort",
        ],
        asin: "B0002AR15U",
        price: "$14.99",
        rating: 4.7,
        reviewCount: "28,412",
        prime: true,
      },
      {
        name: "Blue Buffalo Life Protection Puppy Food",
        badge: "Best Premium",
        description:
          "Whole-grain puppy food with DHA, ARA, and LifeSource Bits for growth and immune development.",
        features: [
          "DHA and ARA for brain and eye development",
          "LifeSource Bits with antioxidants",
          "Real deboned chicken first ingredient",
        ],
        asin: "B000GKC6YO",
        price: "$44.98",
        rating: 4.7,
        reviewCount: "15,328",
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
