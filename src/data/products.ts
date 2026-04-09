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
  rating: number;
  reviewCount: string;
  prime: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "dog-beds",
    title: "Best Dog Beds (2026)",
    description: "A great dog bed should match your dog\u2019s size and sleep style, with durable covers and supportive fill that holds up over time.",
    picks: [
      { name: "Bedsure Orthopedic Dog Bed", badge: "Best Overall", description: "Egg-crate foam mattress with a plush bolster surround and waterproof liner that keeps the fill protected.", features: ["Egg-crate orthopedic foam base", "Removable washable cover with zipper", "Nonskid bottom for hardwood floors"], asin: "B089RGDQBB", rating: 4.5, reviewCount: "85K+", prime: true },
      { name: "EHEYCIGA Orthopedic XL Dog Bed", badge: "Best for Large Dogs", description: "Extra-large memory foam bed with raised bolster edges designed for dogs over 80 pounds.", features: ["High-density memory foam core", "Raised bolster edges for head support", "Machine-washable removable cover"], asin: "B0BDLGZCTY", rating: 4.4, reviewCount: "15K+", prime: true },
      { name: "Amazon Basics Cooling Elevated Bed", badge: "Best Budget", description: "Breathable mesh cot on a powder-coated steel frame that keeps dogs cool and off the ground.", features: ["Elevated mesh promotes airflow", "Steel frame supports up to 150 lbs", "No tools assembly in minutes"], asin: "B076VXVB2L", rating: 4.4, reviewCount: "65K+", prime: true },
      { name: "Comfort Expression Orthopedic Bed", badge: "Premium Pick", description: "Thick orthopedic foam mattress with a quilted microfiber top and waterproof liner underneath.", features: ["4-inch solid orthopedic foam", "Waterproof inner liner", "Quilted soft-touch sleeping surface"], asin: "B0B1ZYGR52", rating: 4.3, reviewCount: "10K+", prime: true },
      { name: "KSIIA Washable Plush Crate Pad", badge: "Best Value", description: "Soft plush crate pad that fits standard wire crates and goes straight into the washing machine.", features: ["Fits standard crate sizes", "Fully machine washable and dryer safe", "Anti-slip bottom dots"], asin: "B09D7DWTVB", rating: 4.4, reviewCount: "12K+", prime: true },
    ],
  },
  {
    slug: "dog-food",
    title: "Best Dog Food (2026)",
    description: "Choose a food with real meat as the first ingredient, appropriate protein levels, and no unnecessary fillers.",
    picks: [
      { name: "Blue Buffalo Life Protection Adult", badge: "Best Overall", description: "Whole-grain recipe with real deboned chicken, LifeSource Bits antioxidants, and omega fatty acids for coat health.", features: ["Real deboned chicken first ingredient", "LifeSource Bits with vitamins and antioxidants", "No poultry by-products, corn, wheat, or soy"], asin: "B0009YWKUA", rating: 4.6, reviewCount: "42K+", prime: true },
      { name: "Purina ONE Lamb & Rice Formula", badge: "Best Value", description: "Easily digestible lamb and rice formula with a SmartBlend of nutrients for immune and digestive health.", features: ["Real lamb is the #1 ingredient", "SmartBlend of fiber for digestive health", "Omega-6 for healthy skin and coat"], asin: "B009IOCCD2", rating: 4.6, reviewCount: "30K+", prime: true },
      { name: "Cesar Wet Dog Food Variety Pack", badge: "Best for Small Dogs", description: "Gourmet wet food trays in multiple flavors that small and picky dogs consistently eat without fuss.", features: ["Variety pack with multiple flavors", "Single-serve trays for portion control", "Complete and balanced nutrition"], asin: "B071J1BFTX", rating: 4.6, reviewCount: "55K+", prime: true },
      { name: "Rachael Ray Nutrish Natural", badge: "Editor\u2019s Choice", description: "Natural dry food with real chicken and veggies, no artificial flavors or preservatives.", features: ["Real chicken is the first ingredient", "No artificial flavors or preservatives", "Added vitamins and minerals"], asin: "B01EY9KQ2Y", rating: 4.6, reviewCount: "25K+", prime: true },
      { name: "Diamond Naturals All Life Stages", badge: "Best Budget", description: "Budget-friendly food with cage-free chicken, probiotics, and omega fatty acids at under a dollar per pound.", features: ["Cage-free chicken first ingredient", "Proprietary probiotics for digestion", "Omega fatty acids for skin and coat"], asin: "B003CL3PTM", rating: 4.5, reviewCount: "20K+", prime: true },
    ],
  },
  {
    slug: "dog-treats",
    title: "Best Dog Treats (2026)",
    description: "The best treats balance taste, nutrition, and training value \u2014 look for single-ingredient options and avoid artificial fillers.",
    picks: [
      { name: "Greenies Original Dental Treats", badge: "Best Overall", description: "VOHC-accepted dental chew that cleans teeth while providing a tasty daily treat.", features: ["VOHC accepted for tartar control", "Unique texture cleans to the gumline", "Made with natural ingredients"], asin: "B0114BNXQ6", rating: 4.7, reviewCount: "75K+", prime: true },
      { name: "Milk-Bone Original Dog Biscuits", badge: "Most Popular", description: "The classic crunchy biscuit fortified with 12 vitamins and minerals that dogs have loved for over a century.", features: ["12 vitamins and minerals added", "Crunchy texture helps clean teeth", "Made in the USA"], asin: "B000I82DTU", rating: 4.7, reviewCount: "90K+", prime: true },
      { name: "Blue Buffalo Health Bars", badge: "Editor\u2019s Choice", description: "Crunchy baked biscuits made with real fruit and no chicken by-products, corn, wheat, or soy.", features: ["Made with real fruit and veggies", "No artificial preservatives", "Oven-baked for a satisfying crunch"], asin: "B003P9XG68", rating: 4.7, reviewCount: "18K+", prime: true },
      { name: "Milk-Bone MaroSnacks", badge: "Best Value", description: "Crunchy biscuits with a real bone marrow center that dogs go absolutely crazy for.", features: ["Real bone marrow center", "Calcium for strong bones and teeth", "Resealable pouch stays fresh"], asin: "B003PMQMK2", rating: 4.7, reviewCount: "50K+", prime: true },
      { name: "Pur Luv Grande Chicken Jerky", badge: "Premium Pick", description: "Single-ingredient chicken jerky strips made from 100% real chicken breast with no fillers.", features: ["100% real chicken breast", "No artificial preservatives or fillers", "High protein training treat"], asin: "B08P2D95G8", rating: 4.5, reviewCount: "12K+", prime: true },
    ],
  },
  {
    slug: "dog-toys",
    title: "Best Dog Toys (2026)",
    description: "Great toys keep dogs physically active and mentally engaged \u2014 rotate between fetch, chew, and puzzle toys.",
    picks: [
      { name: "KONG Classic Dog Toy", badge: "Best Overall", description: "The gold standard stuffable rubber toy \u2014 fill it, freeze it, and give your dog hours of enrichment.", features: ["Ultra-durable natural rubber", "Stuff with treats for enrichment", "Unpredictable bounce for solo play"], asin: "B000AYN7LU", rating: 4.6, reviewCount: "95K+", prime: true },
      { name: "KONG Extreme Dog Toy", badge: "Best for Large Dogs", description: "Black rubber compound for the most powerful chewers \u2014 noticeably tougher than the classic red.", features: ["Ultra-strong black rubber for power chewers", "Stuff and freeze for longer challenge", "Available in sizes up to XXL"], asin: "B0002AR0II", rating: 4.6, reviewCount: "45K+", prime: true },
      { name: "Outward Hound Hide-A-Squirrel", badge: "Best Value", description: "Plush tree trunk with squeaky squirrels hidden inside \u2014 the best-selling interactive toy on Amazon.", features: ["Multiple squeaky squirrels included", "Stimulates natural foraging instinct", "Available in 4 sizes"], asin: "B0002I0O60", rating: 4.5, reviewCount: "80K+", prime: true },
      { name: "Jolly Pets Tug-n-Toss Ball", badge: "Editor\u2019s Choice", description: "Virtually indestructible ball with a built-in handle that floats, bounces, and withstands aggressive play.", features: ["Made in the USA, non-toxic", "Floats in water for pool play", "Handle doubles as tug toy"], asin: "B0006G570G", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "KONG Puppy Teething Toy", badge: "Best for Small Dogs", description: "Softer rubber formula designed specifically for puppy teeth during the teething phase.", features: ["Softer rubber for puppy teeth", "Stuff with puppy treats or kibble", "Soothes teething discomfort"], asin: "B0002AR182", rating: 4.6, reviewCount: "25K+", prime: true },
    ],
  },
  {
    slug: "dog-harnesses",
    title: "Best Dog Harnesses (2026)",
    description: "A well-fitted harness distributes pressure away from the neck and gives you better control, especially for dogs that pull.",
    picks: [
      { name: "Rabbitgoo No-Pull Dog Harness", badge: "Best Overall", description: "Adjustable no-pull harness with front and back clip attachments and padded breathable mesh.", features: ["Front and back leash attachment points", "Four adjustable straps for custom fit", "Padded breathable air mesh"], asin: "B01M8JT6FT", rating: 4.4, reviewCount: "120K+", prime: true },
      { name: "PetSafe Easy Walk Harness", badge: "Best Value", description: "Front-clip harness that gently steers dogs who pull without choking or restricting breathing.", features: ["Front chest clip discourages pulling", "Quick-snap buckles for easy on/off", "Belly strap prevents chafing"], asin: "B0009ZBKG4", rating: 4.3, reviewCount: "55K+", prime: true },
      { name: "Voyager Step-in Air Dog Harness", badge: "Best for Small Dogs", description: "Lightweight all-weather mesh harness with a simple step-in design.", features: ["Step-in design for easy dressing", "Breathable air mesh fabric", "Reflective bands for visibility"], asin: "B08CCG96FR", rating: 4.4, reviewCount: "40K+", prime: true },
      { name: "Ruffwear Front Range Harness", badge: "Premium Pick", description: "Trail-ready padded harness with front and back attachment points and foam-padded panels.", features: ["Padded chest and belly panels", "Two leash attachment points", "Four adjustment points"], asin: "B0CLB4ZBWF", rating: 4.7, reviewCount: "14K+", prime: true },
      { name: "ShawnCo Essential Dog Harness", badge: "Editor\u2019s Choice", description: "No-pull harness with quick-snap buckles and reflective stitching throughout.", features: ["Quick-snap buckle system", "Reflective stitching for night walks", "Lightweight breathable design"], asin: "B08QV42S5F", rating: 4.4, reviewCount: "10K+", prime: true },
    ],
  },
  {
    slug: "dog-leashes",
    title: "Best Dog Leashes (2026)",
    description: "Choose a leash based on your walking style \u2014 standard 6-foot for most, hands-free for runners, retractable for open areas.",
    picks: [
      { name: "Taglory Rope Dog Leash", badge: "Best Overall", description: "Durable braided rope leash with a comfortable padded handle and reflective threads.", features: ["Strong braided rope construction", "Padded comfortable handle", "Reflective threads for visibility"], asin: "B099WM7ZT7", rating: 4.5, reviewCount: "18K+", prime: true },
      { name: "TUG 360\u00b0 Retractable Leash", badge: "Most Popular", description: "Anti-tangle retractable leash with a 360-degree swivel and heavy-duty nylon tape.", features: ["360-degree tangle-free swivel", "Heavy-duty nylon tape", "Quick-lock braking system"], asin: "B076F7HM8T", rating: 4.4, reviewCount: "28K+", prime: true },
      { name: "Joytale Reflective Dog Leash", badge: "Best Value", description: "Simple reflective nylon leash with a padded handle and sturdy clasp at a great price.", features: ["Reflective stitching throughout", "Padded neoprene handle", "360-degree swivel clasp"], asin: "B08574XLL8", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "iYoShop Hands-Free Dog Leash", badge: "Editor\u2019s Choice", description: "Dual-handle bungee leash with an adjustable waist belt for runners and active dog owners.", features: ["Adjustable waist belt", "Dual bungee absorbs shock", "Reflective stitching for night runs"], asin: "B07R56CBWX", rating: 4.4, reviewCount: "12K+", prime: true },
      { name: "BAAPET Strong Dog Leash", badge: "Best for Large Dogs", description: "Heavy-duty climbing rope leash with a padded handle rated for dogs up to 120 pounds.", features: ["Rock-climbing grade rope", "Padded handle with reflective threads", "Heavy-duty clasp"], asin: "B08DCCGNZN", rating: 4.5, reviewCount: "20K+", prime: true },
    ],
  },
  {
    slug: "dog-cameras",
    title: "Best Dog Cameras (2026)",
    description: "Dog cameras let you check in from anywhere \u2014 the best ones offer HD video, two-way audio, and smart alerts.",
    picks: [
      { name: "Furbo 360\u00b0 Dog Camera", badge: "Best Overall", description: "360-degree rotating camera with treat tossing, barking alerts, and full-room coverage.", features: ["360-degree auto-tracking", "Treat tossing feature", "Real-time barking alerts"], asin: "B0BWN22T25", rating: 4.3, reviewCount: "28K+", prime: true },
      { name: "Furbo Mini Pet Camera", badge: "Best Value", description: "Compact Furbo with 1080p HD, night vision, and two-way audio in a smaller form factor.", features: ["1080p HD with night vision", "Two-way audio", "Barking alerts to phone"], asin: "B0CTKXQNPX", rating: 4.3, reviewCount: "8K+", prime: true },
      { name: "TP-Link Tapo C100", badge: "Best Budget", description: "Feature-packed 1080p camera with motion detection and night vision at an incredibly low price.", features: ["1080p HD with night vision", "Motion detection zones", "Two-way audio"], asin: "B0866S3D82", rating: 4.4, reviewCount: "50K+", prime: true },
      { name: "TP-Link Tapo C200 Pan/Tilt", badge: "Editor\u2019s Choice", description: "Pan and tilt camera with 360-degree coverage and privacy mode shutter.", features: ["360\u00b0 horizontal coverage", "Motion tracking", "Physical privacy shutter"], asin: "B0829KDY9X", rating: 4.4, reviewCount: "45K+", prime: true },
      { name: "Kasa Indoor Pan/Tilt Camera", badge: "Most Popular", description: "Smart home camera with pan/tilt, starlight night vision, and free cloud storage.", features: ["Starlight color night vision", "360\u00b0 pan and tilt", "Works with Alexa and Google"], asin: "B08GHX9G5L", rating: 4.4, reviewCount: "35K+", prime: true },
    ],
  },
  {
    slug: "dog-dental",
    title: "Best Dog Dental Care (2026)",
    description: "Dental disease affects most dogs over age 3 \u2014 daily dental chews and brushing keep teeth and gums healthy.",
    picks: [
      { name: "Minties FreshBites Dental Treats", badge: "Best Overall", description: "Bone-shaped dental chews with a unique texture that reaches between teeth and freshens breath.", features: ["Cleans teeth with textured shape", "Freshens breath naturally", "No artificial colors or flavors"], asin: "B0FSMSWZMY", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "Pedigree Dentastix Large", badge: "Most Popular", description: "X-shaped dental sticks clinically proven to reduce tartar buildup by up to 80 percent.", features: ["X-shape cleans to gumline", "Clinically proven tartar reduction", "Low fat"], asin: "B00CU2CMOI", rating: 4.7, reviewCount: "95K+", prime: true },
      { name: "Greenies Regular Dental Chews", badge: "Editor\u2019s Choice", description: "VOHC-accepted dental chew that cleans teeth and freshens breath with every chew.", features: ["VOHC seal of acceptance", "Cleans to gumline", "Added vitamins and minerals"], asin: "B006W6YHHI", rating: 4.8, reviewCount: "85K+", prime: true },
      { name: "Greenies Teenie Dental Chews", badge: "Best for Small Dogs", description: "Same VOHC formula sized for toy and small breeds between 5 and 15 pounds.", features: ["Sized for 5-15 lb dogs", "VOHC accepted", "43-count value pack"], asin: "B006W6YHYQ", rating: 4.8, reviewCount: "70K+", prime: true },
      { name: "Virbac C.E.T. Enzymatic Toothpaste", badge: "Premium Pick", description: "Veterinary-grade enzymatic toothpaste in poultry flavor that fights plaque without rinsing.", features: ["Dual-enzyme system fights plaque", "No rinsing required", "Poultry flavor dogs enjoy"], asin: "B00RZDXA7K", rating: 4.5, reviewCount: "20K+", prime: true },
    ],
  },
  {
    slug: "dog-supplements",
    title: "Best Dog Supplements (2026)",
    description: "Supplements can support joint health, digestion, and vitality \u2014 always consult your vet before starting a new regimen.",
    picks: [
      { name: "Purina FortiFlora Probiotics", badge: "Best Overall", description: "The #1 vet-recommended probiotic that promotes intestinal health and firm stools.", features: ["Live active cultures", "Sprinkle-on powder format", "#1 vet-recommended probiotic"], asin: "B001650NNW", rating: 4.7, reviewCount: "48K+", prime: true },
      { name: "Nutramax Cosequin Joint Health", badge: "Premium Pick", description: "Gold standard joint supplement with glucosamine, chondroitin, and MSM backed by research.", features: ["#1 vet-recommended joint supplement", "Glucosamine, chondroitin, and MSM", "Chewable tablet format"], asin: "B003ULL1NQ", rating: 4.6, reviewCount: "42K+", prime: true },
      { name: "Nutramax Proviable Probiotics", badge: "Editor\u2019s Choice", description: "Veterinary-strength probiotic with paste for acute episodes and capsules for daily maintenance.", features: ["Multi-strain probiotic formula", "Paste plus capsule combination", "Veterinarian recommended"], asin: "B0050JM626", rating: 4.6, reviewCount: "15K+", prime: true },
      { name: "Wuffes Hip & Joint Supplement", badge: "Best Value", description: "Duck-flavored chewable joint supplement with glucosamine, chondroitin, and organic turmeric.", features: ["Glucosamine and chondroitin", "Organic turmeric for inflammation", "Duck-flavored soft chew"], asin: "B0C1HG6XC8", rating: 4.4, reviewCount: "10K+", prime: true },
      { name: "Zesty Paws Allergy Immune Bites", badge: "Most Popular", description: "Soft chews with colostrum and probiotics to support immune health and seasonal allergies.", features: ["EpiCor and colostrum for immunity", "Probiotics for gut health", "Salmon oil for skin and coat"], asin: "B071WCV19B", rating: 4.4, reviewCount: "35K+", prime: true },
    ],
  },
  {
    slug: "dog-boots",
    title: "Best Dog Boots (2026)",
    description: "Protect paws from hot pavement, ice, salt, and rough terrain with boots and paw protection that actually works.",
    picks: [
      { name: "QUMY Waterproof Dog Boots", badge: "Best Overall", description: "Rugged waterproof boots with anti-slip soles and two reflective straps per boot.", features: ["Waterproof with anti-slip sole", "Two reflective adjustable straps", "Wide split seam for easy on/off"], asin: "B01LYITJ4S", rating: 4.3, reviewCount: "28K+", prime: true },
      { name: "DOK TigerToes Non-Slip Socks", badge: "Best Value", description: "Grip socks with silicone tread that help senior dogs on slippery floors.", features: ["Silicone tread for grip", "Lightweight and breathable", "Multiple sizes available"], asin: "B0BHKN1G9C", rating: 4.2, reviewCount: "8K+", prime: true },
      { name: "EXPAWLORER Anti-Slip Socks", badge: "Best Budget", description: "Indoor socks with rubber traction dots preventing slipping on hardwood and tile.", features: ["Rubber traction dots", "Knit material for comfort", "Adjustable straps"], asin: "B089SWQQNX", rating: 4.2, reviewCount: "10K+", prime: true },
      { name: "Musher\u2019s Secret Paw Wax", badge: "Editor\u2019s Choice", description: "All-natural wax balm creating an invisible barrier protecting paws from salt, ice, and heat.", features: ["100% natural food-grade waxes", "Invisible protective barrier", "Absorbs quickly, no residue"], asin: "B0002IJQDC", rating: 4.5, reviewCount: "22K+", prime: true },
      { name: "XSY&G Waterproof Dog Boots", badge: "Best for Large Dogs", description: "Heavy-duty waterproof boots with thick rubber soles and high-shaft design for large breeds.", features: ["Thick rubber anti-slip sole", "High shaft with adjustable straps", "Waterproof and snow-resistant"], asin: "B08DD3SP4F", rating: 4.3, reviewCount: "6K+", prime: true },
    ],
  },
  {
    slug: "dog-collars",
    title: "Best Dog Collars (2026)",
    description: "A good collar is comfortable for daily wear, visible in low light, and holds ID tags securely.",
    picks: [
      { name: "Joytale Reflective Dog Collar", badge: "Best Overall", description: "Nylon collar with reflective stitching and a quick-release buckle.", features: ["Reflective threads in nylon", "Quick-release safety buckle", "12 colors, 4 sizes"], asin: "B08CK5Z5Q1", rating: 4.5, reviewCount: "25K+", prime: true },
      { name: "GoTags Personalized ID Tags", badge: "Best Value", description: "Stainless steel tags with deep laser engraving that won\u2019t fade.", features: ["Deep laser engraving", "Stainless steel", "Multiple shapes"], asin: "B085MH756K", rating: 4.6, reviewCount: "40K+", prime: true },
      { name: "DAGANXI Tactical Dog Collar", badge: "Best for Large Dogs", description: "Heavy-duty collar with metal buckle, control handle, and MOLLE system.", features: ["Metal buckle for strong dogs", "Built-in handle", "MOLLE webbing for patches"], asin: "B0962R78HN", rating: 4.4, reviewCount: "8K+", prime: true },
      { name: "TagME Small Dog Collar", badge: "Best for Small Dogs", description: "Lightweight collar with personalized nameplate built into the buckle.", features: ["Personalized nameplate", "Soft padded lining", "Adjustable for small necks"], asin: "B08PK7YRK7", rating: 4.4, reviewCount: "12K+", prime: true },
      { name: "Reflective Nylon Dog Collar", badge: "Best Budget", description: "Simple durable collar with reflective trim at a wallet-friendly price.", features: ["Reflective trim", "Adjustable nylon", "D-ring for leash and tags"], asin: "B08NSMMQFH", rating: 4.3, reviewCount: "15K+", prime: true },
    ],
  },
  {
    slug: "dog-training",
    title: "Best Dog Training Tools (2026)",
    description: "The right training tool makes learning easier for both you and your dog.",
    picks: [
      { name: "Jugbow Dog Training Collar", badge: "Best Overall", description: "Rechargeable remote collar with beep, vibration, and adjustable levels plus 1600-foot range.", features: ["3 modes: beep, vibration, stimulation", "1600-foot range", "Waterproof and rechargeable"], asin: "B0FN7S5WMJ", rating: 4.4, reviewCount: "10K+", prime: true },
      { name: "FAFAFROG Bark Collar", badge: "Best Value", description: "Automatic bark detection collar with progressive correction, no remote needed.", features: ["Smart bark detection", "5 sensitivity levels", "14-day rechargeable battery"], asin: "B09VT74GKL", rating: 4.3, reviewCount: "18K+", prime: true },
      { name: "Bousnic Dog Training Collar", badge: "Editor\u2019s Choice", description: "Dual-dog system controlling two dogs from one remote with independent channels.", features: ["Controls 2 dogs from 1 remote", "Waterproof receivers", "Security keypad lock"], asin: "B0BCDH7CS1", rating: 4.4, reviewCount: "22K+", prime: true },
      { name: "PetSafe Gentle Leader Headcollar", badge: "Premium Pick", description: "Head halter that steers by the nose for instant pulling control without choking.", features: ["Controls head to control body", "Padded nose loop", "Includes training guide"], asin: "B00074L4RW", rating: 4.2, reviewCount: "30K+", prime: true },
      { name: "Baskerville Ultra Muzzle", badge: "Most Popular", description: "Basket-style muzzle allowing panting, drinking, and treats while preventing biting.", features: ["Allows panting and drinking", "Heat-moldable for custom fit", "Safety strap prevents removal"], asin: "B0051H45GC", rating: 4.3, reviewCount: "20K+", prime: true },
    ],
  },
  {
    slug: "dog-coats",
    title: "Best Dog Coats & Jackets (2026)",
    description: "Short-haired, small, and senior dogs benefit most from outerwear in cold or wet weather.",
    picks: [
      { name: "Spark Paws Dog Hoodie", badge: "Best Overall", description: "Soft fleece hoodie with leash hole and kangaroo pocket for small and medium dogs.", features: ["Soft fleece with stretch", "Leash opening on back", "Kangaroo pocket"], asin: "B0CBVTKP97", rating: 4.4, reviewCount: "8K+", prime: true },
      { name: "Dog Sweaters 3-Pack", badge: "Best Value", description: "Three knit sweaters in different colors for everyday warmth at a great per-unit price.", features: ["3 sweaters included", "Soft knit material", "Easy pull-on design"], asin: "B0F1Y78NQJ", rating: 4.3, reviewCount: "5K+", prime: true },
      { name: "Cotton Dog Shirt Vest", badge: "Best Budget", description: "Lightweight cotton vest for cool spring and fall days.", features: ["Breathable cotton", "Easy Velcro closure", "Machine washable"], asin: "B0CMD17929", rating: 4.2, reviewCount: "6K+", prime: true },
      { name: "Winter Waterproof Dog Jacket", badge: "Best for Large Dogs", description: "Insulated waterproof jacket with fleece lining and reflective trim.", features: ["Waterproof outer shell", "Warm fleece lining", "Reflective trim"], asin: "B0FDXCRNQ2", rating: 4.3, reviewCount: "4K+", prime: true },
      { name: "Fleece Dog Vest", badge: "Editor\u2019s Choice", description: "Lightweight fleece pullover with built-in D-ring for leash attachment.", features: ["Soft fleece", "Built-in D-ring", "Easy step-in design"], asin: "B0CKYNJ1PS", rating: 4.3, reviewCount: "7K+", prime: true },
    ],
  },
  {
    slug: "dog-raincoats",
    title: "Best Dog Raincoats (2026)",
    description: "Waterproof coats that keep your dog dry without restricting movement on rainy walks.",
    picks: [
      { name: "Spark Paws Dog Raincoat", badge: "Best Overall", description: "Lightweight waterproof raincoat with reflective trim and harness opening.", features: ["Fully waterproof", "Reflective safety trim", "Harness-compatible opening"], asin: "B0CPYPSC2Q", rating: 4.4, reviewCount: "5K+", prime: true },
      { name: "HDE Dog Raincoat", badge: "Best Value", description: "Affordable hooded raincoat with reflective strips and leash hole in bright colors.", features: ["Waterproof with taped seams", "Transparent hood", "Reflective strips"], asin: "B079J57J9M", rating: 4.3, reviewCount: "18K+", prime: true },
    ],
  },
  {
    slug: "dog-grooming",
    title: "Best Dog Grooming & Cleanup (2026)",
    description: "Essential cleanup and grooming supplies every dog owner reaches for daily.",
    picks: [
      { name: "Amazon Basics Dog Training Pads", badge: "Best Overall", description: "Super-absorbent 5-layer pads with quick-dry surface and leak-proof backing.", features: ["5-layer construction", "Quick-dry surface", "Built-in attractant"], asin: "B00MW8G62E", rating: 4.4, reviewCount: "180K+", prime: true },
      { name: "Earth Rated Dog Wipes", badge: "Best Value", description: "Plant-based grooming wipes for paws, coat, and skin between baths.", features: ["Plant-based and compostable", "USDA certified biobased", "Lavender-scented"], asin: "B07NHL31CC", rating: 4.5, reviewCount: "25K+", prime: true },
      { name: "Rocco & Roxie Stain & Odor Remover", badge: "Editor\u2019s Choice", description: "Professional-strength enzymatic cleaner that permanently eliminates pet stains and odors.", features: ["Enzymatic formula", "Safe for all surfaces", "Chlorine-free"], asin: "B00CKFL93K", rating: 4.4, reviewCount: "75K+", prime: true },
      { name: "Nature\u2019s Miracle Stain Destroyer", badge: "Most Popular", description: "Bio-enzymatic formula that eliminates tough messes and discourages re-soiling.", features: ["Bacteria-based deep cleaning", "Discourages remarking", "Light citrus scent"], asin: "B07C22NTL4", rating: 4.4, reviewCount: "40K+", prime: true },
    ],
  },
  {
    slug: "dog-crates",
    title: "Best Dog Crates (2026)",
    description: "The best crate is one your dog feels safe in \u2014 look for proper sizing with a divider for growing puppies.",
    picks: [
      { name: "MidWest iCrate Double Door", badge: "Best Overall", description: "The most recommended crate in America with double doors, divider panel, and fold-flat design.", features: ["Double door for flexible placement", "Included divider for puppies", "Folds flat for storage"], asin: "B000QFT1R2", rating: 4.7, reviewCount: "95K+", prime: true },
    ],
  },
  {
    slug: "dog-anxiety",
    title: "Best Dog Anxiety Products (2026)",
    description: "Calming aids for dogs experiencing stress from storms, separation, travel, or loud noises.",
    picks: [
      { name: "Happy Hoodie Calming Band", badge: "Best Overall", description: "Gentle compression band swaddling a dog\u2019s head and ears to reduce noise-related anxiety.", features: ["Gentle compression reduces anxiety", "Muffles loud noises", "Machine washable fleece"], asin: "B00B0I5Z42", rating: 4.3, reviewCount: "12K+", prime: true },
    ],
  },
  {
    slug: "dog-car-seats",
    title: "Best Dog Car Safety (2026)",
    description: "Keep your dog secure and safe on every car ride with tested restraints.",
    picks: [
      { name: "Dog Seat Belt Harness Attachment", badge: "Best Overall", description: "Adjustable seat belt tether clipping to any harness and buckling into standard car receivers.", features: ["Universal fit for all vehicles", "Adjustable length", "Heavy-duty clip and buckle"], asin: "B0DD3MQXX3", rating: 4.3, reviewCount: "8K+", prime: true },
    ],
  },
  {
    slug: "dog-gps-trackers",
    title: "Best Dog GPS Trackers (2026)",
    description: "A GPS tracker shows your dog\u2019s real-time location anywhere they roam.",
    picks: [
      { name: "Apple AirTag (4-Pack)", badge: "Best Overall", description: "Bluetooth tracker leveraging the massive Find My network for passive location tracking.", features: ["Apple Find My network", "Battery lasts over a year", "IP67 waterproof"], asin: "B0D54JZTHY", rating: 4.7, reviewCount: "120K+", prime: true },
      { name: "Fi Series 3 Smart Collar", badge: "Premium Pick", description: "GPS smart collar with LTE tracking, escape alerts, and 3-month battery life.", features: ["LTE-M, WiFi, Bluetooth tracking", "3-month battery life", "Escape alerts via geofencing"], asin: "B0CYL4MH2K", rating: 4.2, reviewCount: "4K+", prime: true },
      { name: "Samsung Galaxy SmartTag2", badge: "Best Value", description: "Compact Bluetooth/UWB tracker with 500-day battery and SmartThings integration.", features: ["Bluetooth and UWB precision", "IP67 waterproof", "500 days battery"], asin: "B0CF1H4D9W", rating: 4.5, reviewCount: "18K+", prime: true },
      { name: "Tile Mate (2024)", badge: "Editor\u2019s Choice", description: "Cross-platform tracker with 250-foot range and loud speaker for nearby finding.", features: ["250-foot range", "Loud speaker", "iOS and Android"], asin: "B0CKXG2YCN", rating: 4.3, reviewCount: "12K+", prime: true },
      { name: "Jiobit GPS Tracker", badge: "Best for Small Dogs", description: "One of the smallest GPS trackers at under an ounce, designed for small pets.", features: ["Under 1 ounce", "Real-time GPS", "Encrypted privacy"], asin: "B0C9S6Z7KM", rating: 4.0, reviewCount: "2K+", prime: true },
    ],
  },
  {
    slug: "dog-puzzle-toys",
    title: "Best Dog Puzzle Toys (2026)",
    description: "Mental stimulation is as important as physical exercise \u2014 puzzle toys fight boredom and reduce anxiety.",
    picks: [
      { name: "Nina Ottosson Interactive Puzzle", badge: "Best Overall", description: "Multi-level puzzle with sliding covers and flip-up compartments for hidden treats.", features: ["Multiple difficulty levels", "BPA and phthalate-free", "Dishwasher safe"], asin: "B0711Y9Y8W", rating: 4.5, reviewCount: "45K+", prime: true },
      { name: "AWOOF Snuffle Mat", badge: "Best Value", description: "Dense fleece mat hiding kibble for foraging enrichment and slower eating.", features: ["Dense fleece strips", "Non-slip backing", "Machine washable"], asin: "B07N1CTWVS", rating: 4.4, reviewCount: "18K+", prime: true },
      { name: "West Paw Toppl Interactive Toy", badge: "Premium Pick", description: "Stuffable rubber toy with open design that interlocks in two sizes.", features: ["Made in USA, Zogoflex", "Dishwasher safe, BPA-free", "Two sizes interlock"], asin: "B00KCBG2C0", rating: 4.5, reviewCount: "12K+", prime: true },
      { name: "LickiMat Classic Soother", badge: "Editor\u2019s Choice", description: "Textured lick mat promoting calming through repetitive licking of spread food.", features: ["Promotes calming", "Textured for dental health", "Freeze for longer use"], asin: "B07FXDD4PC", rating: 4.4, reviewCount: "25K+", prime: true },
      { name: "Bob-A-Lot Treat Dispenser", badge: "Most Popular", description: "Wobbling dispenser with adjustable openings making dogs work for every kibble.", features: ["Adjustable difficulty", "Holds a full meal", "Weighted bottom wobbles"], asin: "B003ARUKU0", rating: 4.4, reviewCount: "30K+", prime: true },
    ],
  },
];

export function getProductCategoryBySlug(
  slug: string
): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
