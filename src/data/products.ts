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
}

export const productCategories: ProductCategory[] = [
  {
    slug: "dog-beds",
    title: "Best Dog Beds (2026)",
    description:
      "A great dog bed should match your dog's size and sleep style, with durable covers and supportive fill that holds up over time.",
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
      },
      {
        name: "K&H Pet Products Cooling Bed",
        badge: "Editor's Choice",
        description:
          "Gel-infused cooling core keeps dogs comfortable during warm months without electricity.",
        features: [
          "Pressure-activated cooling gel layer",
          "No water or electricity needed",
          "Slip-resistant bottom",
        ],
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
      },
      {
        name: "Taste of the Wild High Prairie",
        badge: "Editor's Choice",
        description:
          "Grain-free recipe inspired by ancestral diets with roasted bison and venison.",
        features: [
          "Roasted bison and venison protein",
          "Grain-free with sweet potatoes and peas",
          "Proprietary K9 probiotic blend",
        ],
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
      },
    ],
  },
  {
    slug: "dog-toys",
    title: "Best Dog Toys (2026)",
    description:
      "The right toy depends on your dog's play style — choose durable rubber for power chewers, puzzles for mental stimulation, and soft plush for gentle cuddlers.",
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
      },
      {
        name: "Outward Hound Nina Ottosson Puzzle",
        badge: "Editor's Choice",
        description:
          "Multi-level puzzle feeder that challenges dogs to slide, flip, and lift compartments for hidden treats.",
        features: [
          "Three difficulty levels in one toy",
          "BPA-free and dishwasher-safe",
          "Slows eating and reduces boredom",
        ],
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
        name: "Zuke's Mini Naturals",
        badge: "Best Overall",
        description:
          "Tiny, soft training treats with real chicken and less than 3 calories each for guilt-free rewarding.",
        features: [
          "Under 3 calories per treat",
          "Real chicken first ingredient",
          "Soft texture for quick eating during training",
        ],
      },
      {
        name: "Greenies Original Dental Chews",
        badge: "Editor's Choice",
        description:
          "VOHC-accepted dental chew that cleans teeth down to the gumline while freshening breath.",
        features: [
          "VOHC seal of acceptance",
          "Unique texture cleans down to gumline",
          "Added vitamins and minerals",
        ],
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
      },
    ],
  },
  {
    slug: "dog-grooming",
    title: "Best Dog Grooming Tools (2026)",
    description:
      "Regular grooming keeps your dog's coat healthy and reduces shedding — invest in quality tools that are comfortable for both you and your dog.",
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
      },
      {
        name: "Burt's Bees Oatmeal Dog Shampoo",
        badge: "Best Budget",
        description:
          "Gentle, pH-balanced shampoo with colloidal oatmeal that soothes dry and itchy skin naturally.",
        features: [
          "Colloidal oatmeal and honey formula",
          "No sulfates, colorants, or harsh chemicals",
          "pH balanced for dogs",
        ],
      },
      {
        name: "Dremel PawControl Nail Grinder",
        badge: "Editor's Choice",
        description:
          "Quiet cordless nail grinder with a paw guard that catches filings for mess-free trimming.",
        features: [
          "Built-in paw guard catches dust",
          "4-speed settings for control",
          "LED light illuminates the nail",
        ],
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
      },
    ],
  },
  {
    slug: "dog-crates",
    title: "Best Dog Crates & Kennels (2026)",
    description:
      "The best crate is one your dog feels safe in — look for appropriate sizing, sturdy construction, and easy assembly with good ventilation.",
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
      },
      {
        name: "Petmate Ultra Vari Kennel",
        badge: "Editor's Choice",
        description:
          "Airline-approved hard-shell kennel with heavy-duty construction for safe travel.",
        features: [
          "Meets most airline cargo requirements",
          "Heavy-duty tie-down strap holes",
          "360-degree ventilation openings",
        ],
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
      },
      {
        name: "Kurgo Tru-Fit Smart Harness",
        badge: "Editor's Choice",
        description:
          "Crash-tested car harness that doubles as a walking harness with a steel nesting buckle.",
        features: [
          "Crash-tested up to 75 lbs",
          "Includes seatbelt tether for car travel",
          "Five adjustment points",
        ],
      },
    ],
  },
  {
    slug: "dog-leashes",
    title: "Best Dog Leashes (2026)",
    description:
      "Choose a leash based on your walking environment and dog's behavior — standard 6-foot leashes work for most, while hands-free and retractable options suit specific needs.",
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
      },
      {
        name: "Mighty Paw Hands-Free Bungee Leash",
        badge: "Editor's Choice",
        description:
          "Waist-worn bungee leash designed for runners and hikers with dual handles and shock absorption.",
        features: [
          "Adjustable waist belt fits up to 42 inches",
          "Dual bungee absorbs sudden pulls",
          "Traffic handle near the collar clip",
        ],
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
      },
    ],
  },
  {
    slug: "dog-bowls",
    title: "Best Dog Bowls & Feeders (2026)",
    description:
      "Stainless steel and ceramic bowls are the most hygienic options — also consider slow feeders for fast eaters and elevated stands for tall or senior dogs.",
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
      },
      {
        name: "Outward Hound Fun Feeder Slo Bowl",
        badge: "Editor's Choice",
        description:
          "Maze-pattern slow feeder that extends mealtime up to 10x, reducing bloat and improving digestion.",
        features: [
          "Meal-lengthening ridge pattern",
          "BPA, PVC, and phthalate-free",
          "Non-slip base prevents sliding",
        ],
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
      },
    ],
  },
  {
    slug: "dog-supplements",
    title: "Best Dog Supplements & Vitamins (2026)",
    description:
      "Supplements can support joint health, digestion, skin and coat, and overall vitality — always consult your vet before starting a new supplement regimen.",
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
      },
      {
        name: "Purina Pro Plan Veterinary FortiFlora",
        badge: "Editor's Choice",
        description:
          "Probiotic supplement that promotes normal intestinal health and firm stool quality.",
        features: [
          "Contains live active cultures",
          "Sprinkle-on powder format",
          "Recommended by veterinarians",
        ],
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
      },
    ],
  },
  {
    slug: "dog-cameras",
    title: "Best Dog Cameras & Monitors (2026)",
    description:
      "Dog cameras let you check in on your pet from anywhere — the best ones offer HD video, two-way audio, treat tossing, and smart alerts for barking.",
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
      },
      {
        name: "Petcube Bites 2 Lite",
        badge: "Editor's Choice",
        description:
          "Sleek treat-dispensing camera with 1080p HD, built-in Alexa, and a wide 160-degree lens.",
        features: [
          "1080p HD with 160-degree wide-angle lens",
          "Built-in treat dispenser",
          "Alexa built-in for voice commands",
        ],
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
      },
    ],
  },
  {
    slug: "dog-gps-trackers",
    title: "Best Dog GPS Trackers (2026)",
    description:
      "A GPS tracker gives you peace of mind by showing your dog's real-time location — look for reliable cellular coverage, long battery life, and a lightweight design.",
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
      },
      {
        name: "Whistle Health + GPS",
        badge: "Editor's Choice",
        description:
          "Combines GPS location tracking with health monitoring for activity, sleep, and licking behaviors.",
        features: [
          "GPS location + health and fitness tracking",
          "Monitors scratching and licking patterns",
          "24/7 timeline of activities",
        ],
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
      },
    ],
  },
  {
    slug: "dog-dental",
    title: "Best Dog Dental Care Products (2026)",
    description:
      "Dental disease affects most dogs over age 3 — daily brushing, dental chews, and water additives work together to keep teeth and gums healthy.",
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
      },
      {
        name: "Whimzees Natural Dental Chews",
        badge: "Editor's Choice",
        description:
          "Vegetarian dental chews with a unique shape that scrubs teeth and freshens breath as dogs chew.",
        features: [
          "All-natural, vegetarian recipe",
          "Unique grooved shape cleans teeth",
          "Longer chew time than most dental sticks",
        ],
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
      },
    ],
  },
  {
    slug: "dog-coats",
    title: "Best Dog Coats & Jackets (2026)",
    description:
      "Short-haired, small, senior, and thin dogs benefit most from outerwear — look for waterproof shells, warm insulation, and easy-on closures that allow harness access.",
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
      },
    ],
  },
  {
    slug: "puppy-essentials",
    title: "New Puppy Essentials Checklist (2026)",
    description:
      "Bringing home a new puppy is exciting — make sure you have all the essentials ready before arrival day so your pup feels safe and you feel prepared.",
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
      },
      {
        name: "Nature's Miracle Advanced Stain & Odor Eliminator",
        badge: "Editor's Choice",
        description:
          "Bio-enzymatic cleaner that permanently eliminates puppy accident stains and odors from any surface.",
        features: [
          "Bio-enzymatic formula destroys odor at the source",
          "Safe for carpets, hardwood, and fabric",
          "Discourages re-soiling in the same spot",
        ],
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
      },
    ],
  },
];

export function getProductCategoryBySlug(
  slug: string
): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
