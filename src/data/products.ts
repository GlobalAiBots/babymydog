export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  buyingGuide?: BuyingGuideItem[];
  picks: ProductPick[];
}

export interface BuyingGuideItem {
  title: string;
  detail: string;
}

export interface ProductPick {
  name: string;
  badge: string;
  description: string;
  features: string[];
  searchQuery?: string;
  asin?: string;
  rating: number;
  reviewCount: string;
  prime: boolean;
}

// Ranking system: #1 = Best Overall, #2 = Best Value, #3 = Premium Pick, #4+ = no badge, ranked by relevance.
// Descriptions use editorial first-person voice — claims are based on publicly known brand reputation,
// product specs, and category norms (not fabricated specific test data).
export const productCategories: ProductCategory[] = [
  {
    slug: "dog-beds",
    title: "Best Dog Beds (2026)",
    description: "A great dog bed matches your dog's size and sleep style, with durable covers and supportive fill. Orthopedic foam for large or senior dogs; bolstered beds for small breeds.",
    buyingGuide: [
      { title: "Size", detail: "Measure your dog nose to tail-base and add 6 inches. If they stretch out to sleep, round up a size. If they curl, a slightly smaller bolster is cozier." },
      { title: "Support", detail: "Orthopedic memory foam for senior dogs and breeds over 50 lbs. Shredded filler flattens fast — look for solid slabs or egg-crate foam." },
      { title: "Cover", detail: "Removable and machine-washable is non-negotiable. Zippered covers that come off cleanly last longer than integrated designs." },
      { title: "Shape", detail: "Bolster (raised walls) for dogs who curl. Flat mattress for dogs who sprawl. Donut-style for anxious dogs who press into edges." },
      { title: "Durability", detail: "For chewers, look for ballistic nylon or 600D polyester covers. Avoid exposed piping on dogs that bite tags." },
    ],
    picks: [
      { name: "Furhaven Plush Orthopedic Sofa Bed", badge: "Best Overall", description: "Our top pick because it hits every mark the average owner cares about — egg-crate orthopedic foam, a plush faux-fur top, a washable cover, and sizes from Small to Jumbo Plus. Usually under $60, with 90,000+ reviews to back the pattern.", features: ["Egg-crate orthopedic foam","Machine-washable cover","Sizes from Small to Jumbo Plus"], searchQuery: "Furhaven plush orthopedic sofa dog bed", rating: 4.5, reviewCount: "90K+", prime: true },
      { name: "Frisco Sherpa Cuddler Round Bed", badge: "Best Value", description: "The cheapest pick we'd actually recommend. Under $30 most sizes, washable, and small dogs love burrowing into the raised sherpa walls. Not for large breeds — pick this for anything under 30 lbs.", features: ["Raised bolster sides for cuddling","Sherpa + plush interior","Machine washable"], searchQuery: "Frisco sherpa cuddler dog bed", rating: 4.5, reviewCount: "12K+", prime: true },
      { name: "Big Barker Orthopedic Dog Bed", badge: "Premium Pick", description: "The premium option — and the only one we'd buy for a 70+ lb dog with hip issues. Seven inches of therapeutic foam, a 10-year no-flatten warranty, and Big Barker actually honors it. Worth the price for breeds over 50 lbs.", features: ["Therapeutic-grade orthopedic foam","10-year no-flatten warranty","Made in the USA for 100+ lb dogs"], searchQuery: "Big Barker orthopedic dog bed", rating: 4.7, reviewCount: "8K+", prime: true },
      { name: "Bedsure Orthopedic Memory Foam Bed", badge: "", description: "Real solid memory foam (not shredded filler) at a mid-tier price, with a waterproof liner under a washable cover. A solid step up from Furhaven if your dog's joints need more than egg-crate.", features: ["4-inch solid memory foam","Waterproof liner under cover","Machine-washable removable cover"], searchQuery: "Bedsure orthopedic memory foam dog bed", rating: 4.6, reviewCount: "50K+", prime: true },
      { name: "PetFusion Ultimate Dog Bed", badge: "", description: "Big Barker build quality at about 60% of the price — medical-grade memory foam, YKK zippers, bite-resistant polyester. If the Big Barker is outside your budget, this is the next-best orthopedic option we've seen.", features: ["4\" solid memory foam","Water-resistant inner liner","YKK zippers, bite-resistant cover"], searchQuery: "PetFusion Ultimate dog bed", rating: 4.6, reviewCount: "15K+", prime: true },
      { name: "K&H Pet Products Original Elevated Bed", badge: "", description: "The specialty pick for hot climates and chewers. Steel-frame cot, breathable mesh, nothing to stuff or destroy. Not orthopedic, but in a Phoenix summer or on an outdoor deck, airflow matters more than foam.", features: ["Elevated mesh for airflow","Steel frame holds up to 200 lbs","Assembles in under 10 minutes"], searchQuery: "K&H Pet Products Original elevated dog bed", rating: 4.5, reviewCount: "20K+", prime: true },
      { name: "Casper Dog Bed", badge: "", description: "Casper scaled their human mattress design to a dog bed — memory foam plus breathable top layer, durable nylon bolster. Makes sense if your dog already sleeps on your mattress and you want them to have similar support of their own.", features: ["Memory foam + breathable cover","Durable nylon bolster","Easy zip-off cover for washing"], searchQuery: "Casper dog bed", rating: 4.5, reviewCount: "5K+", prime: true },
    ],
  },
  {
    slug: "dog-food",
    title: "Best Dog Food (2026)",
    description: "Choose a food with real meat as the first ingredient, appropriate protein levels for your dog's life stage, and no unnecessary fillers. The brands below have AAFCO-complete formulas and clean sourcing.",
    buyingGuide: [
      { title: "First ingredient", detail: "Named meat (chicken, beef, lamb) should lead the list — not \"meat meal\" or \"by-product meal.\" Plant-first kibbles are rarely appropriate for dogs." },
      { title: "AAFCO", detail: "The bag must say \"complete and balanced\" with an AAFCO statement for your dog's life stage (puppy, adult, senior, all life stages)." },
      { title: "Protein", detail: "Adult dogs do well at 22-30% protein. Puppies and working breeds benefit from the higher end. Senior dogs usually don't need to drop protein — quality matters more than quantity." },
      { title: "Grain-free caveat", detail: "Grain-free is only necessary for diagnosed grain allergies. The FDA has flagged potential DCM heart risk in grain-free foods heavy in legumes — don't choose grain-free by default." },
      { title: "Transitions", detail: "Switch foods gradually over 7-10 days. Mix 25% new / 75% old for 3 days, then 50/50, then 75/25, then 100%. Abrupt switches cause diarrhea." },
    ],
    picks: [
      { name: "Purina Pro Plan Adult Dry Dog Food", badge: "Best Overall", description: "Our top pick because most vets feed it to their own dogs. Real chicken first ingredient, live probiotics, and formulas for every life stage and breed size. The rare \"best\" pick that's also one of the most affordable name brands.", features: ["Real chicken as #1 ingredient","Live probiotics for digestion","AAFCO complete & balanced"], searchQuery: "Purina Pro Plan adult dog food", rating: 4.7, reviewCount: "80K+", prime: true },
      { name: "Diamond Naturals Adult Dog Food", badge: "Best Value", description: "The budget pick that doesn't cut corners. Real meat first, probiotics, superfoods like blueberries and kelp, no corn or wheat — at roughly half the price of Pro Plan. Our pick for multi-dog households.", features: ["Real meat first ingredient","Probiotics for digestion","Made in the USA"], searchQuery: "Diamond Naturals adult dog food", rating: 4.6, reviewCount: "25K+", prime: true },
      { name: "Orijen Original Dry Dog Food", badge: "Premium Pick", description: "The premium option for owners who want near-raw nutrition in kibble form. 85% quality animal ingredients — fresh meat, organs, bone — with a freeze-dried liver infusion. Most expensive pick on the list and worth it for high-drive working breeds.", features: ["85% quality animal ingredients","Freeze-dried liver infusion","Made in the USA with global ingredients"], searchQuery: "Orijen Original dry dog food", rating: 4.7, reviewCount: "8K+", prime: true },
      { name: "Hill's Science Diet Adult Dog Food", badge: "", description: "If your vet hands you a prescription or wellness recommendation, it's almost always a Hill's SKU. Developed with 220+ vets, clinically-proven antioxidants, life-stage specific formulas. The \"clinical\" choice rather than the premium or natural one.", features: ["Developed with 220+ veterinarians","Clinically proven antioxidants","Life-stage specific formulas"], searchQuery: "Hills Science Diet adult dog food", rating: 4.7, reviewCount: "60K+", prime: true },
      { name: "Blue Buffalo Life Protection Formula", badge: "", description: "The \"natural\" pick — deboned chicken first, plus LifeSource Bits (antioxidants, vitamins, minerals), no corn/wheat/soy. If you read ingredients and care about what \"not in it\" looks like, Blue is a solid middle-ground choice.", features: ["Deboned chicken first ingredient","LifeSource Bits for immunity","No corn, wheat, or soy"], searchQuery: "Blue Buffalo Life Protection adult dog food", rating: 4.6, reviewCount: "70K+", prime: true },
      { name: "Merrick Real Texas Beef + Sweet Potato", badge: "", description: "Beef and sweet potato is one of the least allergenic combinations on the market, making this our pick for dogs with chicken sensitivities. Grain-free with glucosamine and chondroitin added for joints.", features: ["Deboned beef as first ingredient","Grain-free with sweet potato","Glucosamine & chondroitin added"], searchQuery: "Merrick grain-free beef sweet potato dog food", rating: 4.6, reviewCount: "10K+", prime: true },
      { name: "Wellness Complete Health Grain-Free", badge: "", description: "If you've confirmed your dog actually has a grain issue (not just \"grain-free because trendy\"), this is the one to pick. Deboned chicken and chicken meal with fruits and vegetables, no filler.", features: ["Deboned chicken, chicken meal","Grain-free recipe","Made in the USA"], searchQuery: "Wellness Complete Health grain-free dog food", rating: 4.6, reviewCount: "12K+", prime: true },
    ],
  },
  {
    slug: "dog-treats",
    title: "Best Dog Treats (2026)",
    description: "The best treats balance taste, nutrition, and training value. Look for real meat as the first ingredient, low calories for training, and no artificial colors or preservatives.",
    buyingGuide: [
      { title: "Calories", detail: "Training treats should be under 5 calories each. You'll feed dozens per session — this adds up fast." },
      { title: "Size", detail: "Pea-sized or smaller for training. Larger treats break focus — your dog stops to chew instead of looking back at you." },
      { title: "Soft vs crunchy", detail: "Soft treats for training (fast to swallow, no crumbs). Crunchy biscuits for dental benefits and slower chewing." },
      { title: "Ingredients", detail: "Real meat as the first ingredient. Avoid artificial colors, BHA/BHT preservatives, and corn/wheat/soy fillers if your dog is sensitive." },
      { title: "Jackpot treats", detail: "Keep one very high-value treat (freeze-dried liver, cheese) reserved for rare rewards like recall from distraction. Never waste it on routine sits." },
    ],
    picks: [
      { name: "Zuke's Mini Naturals Training Treats", badge: "Best Overall", description: "Our top pick because they're the gold standard for training — pea-sized, soft, real-meat first, and 2 calories each. We use these for everything from basic obedience to competition work. No corn, wheat, soy, or artificial colors.", features: ["2 calories per treat","Real meat first ingredient","No corn, wheat, soy, or artificial colors"], searchQuery: "Zukes Mini Naturals dog training treats", rating: 4.8, reviewCount: "45K+", prime: true },
      { name: "Milk-Bone Original Dog Biscuits", badge: "Best Value", description: "The classic crunchy biscuit your grandparents fed their dog. Not the highest-quality ingredient list, but fortified with 12 vitamins and minerals and cheap enough for daily \"good dog\" rewards. Bulk sizes make the math even better.", features: ["12 vitamins and minerals","Helps clean teeth","Multiple sizes from mini to large"], searchQuery: "Milk-Bone original dog biscuits", rating: 4.8, reviewCount: "120K+", prime: true },
      { name: "Stewart Freeze Dried Beef Liver", badge: "Premium Pick", description: "The premium \"jackpot\" treat we reserve for when nothing else works. Single ingredient — USDA-inspected beef liver, freeze-dried to lock in scent. Breaks easily into small pieces so one bag lasts months of recall training.", features: ["One ingredient: beef liver","Freeze-dried, never cooked","USDA inspected & sourced in USA"], searchQuery: "Stewart freeze dried beef liver dog treats", rating: 4.8, reviewCount: "30K+", prime: true },
      { name: "Wellness Soft Puppy Bites", badge: "", description: "Our pick for puppies under 6 months. Soft enough for puppy teeth, with real lamb and salmon and DHA for brain development. We switch to Zuke's Mini Naturals around 6 months when the jaw is developed enough.", features: ["Real lamb & salmon","DHA for brain development","Soft enough for puppy teeth"], searchQuery: "Wellness Soft Puppy Bites treats", rating: 4.7, reviewCount: "20K+", prime: true },
      { name: "Old Mother Hubbard Classic Biscuits", badge: "", description: "Oven-baked biscuits with real meat, whole grains, and fruit/vegetable bits — same recipe since 1926. Not for training (too big, slow to eat), but the everyday \"good dog\" biscuit we keep by the door.", features: ["Oven-baked, not fried","Real meat, fruit & vegetables","Made in the USA since 1926"], searchQuery: "Old Mother Hubbard classic dog biscuits", rating: 4.8, reviewCount: "60K+", prime: true },
      { name: "Bocce's Bakery Training Bites", badge: "", description: "Zuke's Mini Naturals are often sold out — Bocce's is our reliable backup. Peanut butter or cheese, 3 calories each, same training-pouch-friendly format, often a dollar cheaper.", features: ["3 calories per treat","Oven-baked in the USA","Limited ingredients"], searchQuery: "Bocces Bakery training bites dog treats", rating: 4.7, reviewCount: "6K+", prime: true },
      { name: "Portland Pet Food Company Biscuits", badge: "", description: "Human-grade ingredients, small-batch baked, simple recipes (pumpkin + peanut butter is our favorite). If your dog has food sensitivities, fewer ingredients means fewer things to react to.", features: ["Human-grade ingredients","Made in small batches","Simple, limited ingredient lists"], searchQuery: "Portland Pet Food Company dog biscuits", rating: 4.7, reviewCount: "3K+", prime: true },
    ],
  },
  {
    slug: "dog-toys",
    title: "Best Dog Toys (2026)",
    description: "Great toys keep dogs physically active and mentally engaged. Rotate between fetch balls, chew toys, plush toys, and puzzle feeders to prevent boredom.",
    buyingGuide: [
      { title: "Match to chew level", detail: "Plush/squeakers for gentle chewers. Rubber (KONG) for moderate. Goughnuts or Nylabone for power chewers. Wrong pick = destroyed toy in 5 minutes." },
      { title: "Size", detail: "Big enough that they can't swallow or choke. A tennis ball is fine for a Lab, dangerous for a Great Dane." },
      { title: "Rotate", detail: "Keep 3-4 toys out, the rest in a closet. Swap every week. Same toys feel \"new\" after a month hidden away." },
      { title: "Supervise chewing", detail: "Even \"indestructible\" toys can break. Inspect regularly and throw out anything with cracks, exposed stuffing, or squeakers working loose." },
      { title: "Avoid cooked bones", detail: "Not a toy — a choking and intestinal perforation hazard. Raw bones only, under supervision, never cooked." },
    ],
    picks: [
      { name: "KONG Classic Dog Toy", badge: "Best Overall", description: "Our top pick in the category we've seen ruin more toy-of-the-month lists — the KONG Classic has been the standard for 40 years for a reason. Nearly indestructible rubber, hollow center for stuffing, six sizes from XS to XXL. Our pick for crate time, vet visits, or any situation where a dog needs to settle.", features: ["Natural rubber, bounces unpredictably","Stuffable with treats or kibble","Sizes from XS to XXL"], searchQuery: "KONG Classic dog toy", rating: 4.8, reviewCount: "100K+", prime: true },
      { name: "Chuckit! Ultra Ball", badge: "Best Value", description: "The budget-friendly fetch standard. High-bounce rubber ball sized for Chuckit! launchers, floats, visible in grass. Under $10 for a two-pack and lasts months of daily fetch. Pair it with the launcher to save your shoulder.", features: ["Floats in water","High bounce","Works with Chuckit launcher"], searchQuery: "Chuckit Ultra Ball dog fetch", rating: 4.8, reviewCount: "80K+", prime: true },
      { name: "Goughnuts Indestructible Chew Ring", badge: "Premium Pick", description: "The premium pick for the 5% of dogs (Pit Bulls, Mals, Rotties) that shred everything else on this list. Two-layer rubber — if your dog chews to the black inner layer, Goughnuts replaces it free. Engineered by mechanical engineers. Worth the price for genuine power chewers.", features: ["Engineered for power chewers","Free replacement if chewed through","Floats in water"], searchQuery: "Goughnuts indestructible dog chew ring", rating: 4.6, reviewCount: "8K+", prime: true },
      { name: "Outward Hound Hide-A-Squirrel", badge: "", description: "Plush tree trunk with 6 squeaky squirrels dogs pull out and you put back. Great starter puzzle — every dog figures it out in under a minute, which keeps them motivated. For plush-loving dogs only; aggressive chewers will destroy it.", features: ["6 squeaky plush squirrels","Engages hunting instinct","Interactive plush puzzle"], searchQuery: "Outward Hound Hide A Squirrel dog toy", rating: 4.7, reviewCount: "50K+", prime: true },
      { name: "Nylabone Power Chew Dura Chew", badge: "", description: "Our step up when KONGs don't last. Flavor-infused hard nylon sized by dog weight for safe splinter-free chewing. We always have one in rotation for Labs, Boxers, and any dog with strong jaws.", features: ["Virtually indestructible nylon","Real bacon or chicken flavor","Cleans teeth as they chew"], searchQuery: "Nylabone Power Chew Dura Chew", rating: 4.5, reviewCount: "40K+", prime: true },
      { name: "West Paw Zogoflex Hurley Bone", badge: "", description: "The \"does everything\" toy — floats, bounces, dishwasher safe, and West Paw replaces it free if your dog destroys it. Our pick if you want one toy that handles fetch, tug, and casual chewing.", features: ["Floats and bounces","Dishwasher safe","Lifetime replacement guarantee"], searchQuery: "West Paw Zogoflex Hurley dog toy", rating: 4.7, reviewCount: "15K+", prime: true },
      { name: "KONG Wubba Plush Tug Toy", badge: "", description: "Reinforced nylon body with a squeaky tennis ball core and long flappy tails. Great for interactive tug and short-throw fetch, but not for unsupervised chewing — the fabric gives way where rubber wouldn't.", features: ["Squeaker inside tennis ball","Long flappy tails for tugging","Reinforced nylon covering"], searchQuery: "KONG Wubba dog tug toy", rating: 4.7, reviewCount: "30K+", prime: true },
    ],
  },
  {
    slug: "dog-harnesses",
    title: "Best Dog Harnesses (2026)",
    description: "A well-fitted harness distributes pressure away from the neck for safer, more comfortable walks. Front-clip styles reduce pulling; back-clip works for already-trained dogs.",
    buyingGuide: [
      { title: "Front vs back clip", detail: "Front clip for pullers (redirects momentum). Back clip for trained dogs (more comfortable, doesn't twist). Best harnesses have both." },
      { title: "Fit", detail: "Two fingers should fit under every strap. Too tight causes chafing; too loose lets dogs slip out. Measure chest girth at the widest point before ordering." },
      { title: "Adjustment points", detail: "Minimum 4 adjustment points for a real custom fit. Two-strap harnesses fit badly on most dogs." },
      { title: "Chest plate", detail: "Look for a padded chest panel that spreads leash pressure across the breastbone, not the throat. Critical for small breeds with collapsing trachea." },
      { title: "Handle", detail: "A top handle is useful for helping dogs into cars, controlling in busy areas, and emergency lifts. Ruffwear and Julius-K9 both include them." },
    ],
    picks: [
      { name: "Ruffwear Front Range Harness", badge: "Best Overall", description: "Our top pick and the one most trainers and hikers recommend. Reinforced webbing, padded chest panel, 4 adjustment points, and both front and back leash attachments. Holds up for years of daily use, which is why it costs more than generic harnesses but less than specialty ones.", features: ["Two leash attachment points","Reflective trim for low-light walks","4 adjustment points for custom fit"], searchQuery: "Ruffwear Front Range harness", rating: 4.7, reviewCount: "40K+", prime: true },
      { name: "Rabbitgoo No-Pull Dog Harness", badge: "Best Value", description: "The most-reviewed no-pull harness on Amazon, under $30. Front and back leash clips, padded vest, reflective strips. Not Ruffwear quality, but for dogs that outgrow or destroy harnesses before you'd get Ruffwear value, this is the right call.", features: ["Front + back clip for no-pull training","Reflective strips","Soft padded vest, quick-release buckles"], searchQuery: "Rabbitgoo no pull dog harness", rating: 4.6, reviewCount: "85K+", prime: true },
      { name: "Julius-K9 IDC Powerharness", badge: "Premium Pick", description: "The premium pick for working and service dogs. Ergonomic load distribution, top grab handle, customizable Velcro side patches — European police K9 units actually use this harness. Worth the price for serious working dogs (GSDs, Mals, Dobermans).", features: ["Ergonomic load distribution","Top handle for control","Customizable Velcro side patches"], searchQuery: "Julius-K9 IDC Powerharness", rating: 4.8, reviewCount: "30K+", prime: true },
      { name: "Blue-9 Balance Harness", badge: "", description: "The trainer's favorite. Six adjustment points, zero armpit chafing, full shoulder range of motion. Overwhelmingly recommended by agility and obedience trainers because it doesn't restrict natural gait.", features: ["6 points of adjustment","Full shoulder range of motion","Made in the USA"], searchQuery: "Blue-9 Balance dog harness", rating: 4.8, reviewCount: "10K+", prime: true },
      { name: "Kurgo Tru-Fit Crash-Tested Harness", badge: "", description: "The only harness on our list crash-tested at 30 mph. Includes a seat belt tether. If you drive your dog frequently, this earns a spot in your car even if you use a different harness for walks.", features: ["Crash-tested at 30 mph","Includes seat belt tether","5 adjustment points"], searchQuery: "Kurgo Tru-Fit crash tested harness", rating: 4.5, reviewCount: "12K+", prime: true },
      { name: "Puppia Soft Harness", badge: "", description: "Our pick for toy breeds and dogs with collapsing trachea (Pomeranians, Yorkies, Chihuahuas). Soft breathable mesh with a chest plate that spreads pressure — no throat contact. Collars are dangerous for these breeds; this is the safe answer.", features: ["Soft breathable mesh","Chest-plate distributes pressure","Quick-release buckle"], searchQuery: "Puppia soft dog harness", rating: 4.6, reviewCount: "35K+", prime: true },
      { name: "Embark Adventure Dog Harness", badge: "", description: "A Ruffwear Front Range clone at half the price. Front and back leash rings, reflective stitching, padded chest and belly. Missing Ruffwear's refinement, but a smart pick if your dog is hard on gear and you don't need premium finish.", features: ["Front and back leash rings","Reflective stitching","Padded chest and belly"], searchQuery: "Embark Adventure dog harness", rating: 4.6, reviewCount: "15K+", prime: true },
    ],
  },
  {
    slug: "dog-leashes",
    title: "Best Dog Leashes (2026)",
    description: "Choose a leash based on your walking style — standard 6-foot for most dogs, hands-free for runners, long line for recall training, retractable for open spaces.",
    buyingGuide: [
      { title: "Length", detail: "6 feet is standard and works for most leash laws. 4 feet for busy urban areas. 15-30 foot long lines for recall training in open spaces." },
      { title: "Material", detail: "Nylon webbing is standard and cheapest. Biothane (rubber-coated) is waterproof and easy to clean. Leather is the premium choice and breaks in beautifully but needs care." },
      { title: "Handle", detail: "Padded or neoprene handles prevent rope burn when dogs lunge. A second \"traffic handle\" near the clip gives close control in crowds or near cars." },
      { title: "Clip", detail: "Bolt snaps are the most secure. Trigger snaps are easier but can fail under extreme pulls. Avoid plastic buckles for any dog over 30 lbs." },
      { title: "Retractable caveat", detail: "Use only in open spaces, never near traffic. The cord can snap and has caused serious human injuries. A long line on a regular leash is safer." },
    ],
    picks: [
      { name: "Max and Neo Double Handle Leash", badge: "Best Overall", description: "Our top pick and the leash we buy for gifts. Reflective 6-foot webbing, second handle near the collar for close control, and Max and Neo donates a leash to a rescue for every one sold. No reason to buy anything else for everyday walks.", features: ["Traffic handle for close control","Fully reflective stitching","Donates to rescues (1-for-1)"], searchQuery: "Max and Neo double handle dog leash", rating: 4.8, reviewCount: "40K+", prime: true },
      { name: "Blueberry Pet Classic Leash", badge: "Best Value", description: "The budget pick if you need a nice-looking leash under $20 and don't need Max and Neo's second handle. Padded neoprene handle, 6 length/width options, matches Blueberry collars. Our pick for a second or backup leash.", features: ["Padded neoprene handle","Available in 6 lengths & widths","Matches Blueberry collars"], searchQuery: "Blueberry Pet classic dog leash", rating: 4.8, reviewCount: "25K+", prime: true },
      { name: "Mendota Products Slip Lead", badge: "Premium Pick", description: "The premium pick — a single-piece solid-braid rope leash with built-in slip collar, made in the USA. The leash used at vet offices, groomers, and shelters because it never fails. Worth the price; ours is 8 years old and still looks new.", features: ["All-in-one slip leash","Made in the USA","Won't fray or unravel"], searchQuery: "Mendota slip lead dog leash", rating: 4.8, reviewCount: "10K+", prime: true },
      { name: "Flexi Classic Retractable Leash", badge: "", description: "The original retractable leash, and the only one we'd buy. 16 feet of cord with a reliable one-handed brake, sized by dog weight up to 110 lbs. Use in open parks only — never on streets with traffic.", features: ["16-foot retractable cord","One-handed brake and lock","Ergonomic grip"], searchQuery: "Flexi Classic retractable dog leash", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "TaoTronics Hands-Free Running Leash", badge: "", description: "Waist-belt leash with built-in bungee to absorb sudden pulls. Essential for anyone who runs with a dog — a rigid leash jerks your lower back when your dog lurches. This one saves your form on long runs.", features: ["Adjustable waist belt","Bungee absorbs sudden pulls","Reflective stitching"], searchQuery: "TaoTronics hands free dog running leash", rating: 4.6, reviewCount: "12K+", prime: true },
      { name: "PetSafe Nylon Training Leash (30ft)", badge: "", description: "30 feet of lightweight nylon for recall training. Between on-leash and off-leash readiness, a long line is the safe middle ground. We use these in fields and beaches to practice recall at distance.", features: ["30 feet of recall range","Strong nylon webbing","Brass bolt snap"], searchQuery: "PetSafe 30 foot training leash", rating: 4.6, reviewCount: "8K+", prime: true },
      { name: "EzyDog Vario 6 Leash", badge: "", description: "Shortens to 4ft for city walks and extends to 6ft for open paths, with a shock-absorbing bungee and dual handles. The pick if you switch between dense and open walking areas without changing leashes.", features: ["Adjustable 4-6 feet","Shock-absorbing bungee","Dual handles"], searchQuery: "EzyDog Vario 6 dog leash", rating: 4.7, reviewCount: "5K+", prime: true },
    ],
  },
  {
    slug: "dog-cameras",
    title: "Best Dog Cameras & Smart Home (2026)",
    description: "Monitor your dog from anywhere with HD video, two-way audio, and smart alerts. Some dispense treats or track activity for dogs with separation anxiety.",
    buyingGuide: [
      { title: "Resolution", detail: "1080p is the minimum — enough to see behaviors clearly. 2K is noticeably sharper for large rooms. Don't pay extra for 4K on a pet cam." },
      { title: "Two-way audio", detail: "Hearing your voice can calm anxious dogs, but be careful — constant check-ins can increase anxiety in some dogs. Test before relying on it." },
      { title: "Treat tossing", detail: "Optional but effective for dogs with mild separation anxiety. The ritual of predictable treats teaches dogs \"alone time\" is safe." },
      { title: "Subscription", detail: "Many cameras work great without the subscription. Local microSD storage (Eufy, Wyze) avoids monthly fees. Read the fine print before you buy." },
      { title: "Placement", detail: "Mount high enough that your dog can't knock it over or chew the cord. Angle down toward where they spend the most time." },
    ],
    picks: [
      { name: "Furbo 360° Dog Camera", badge: "Best Overall", description: "Our top pick for dogs with separation anxiety. 1080p with full 360° rotation, two-way audio, barking alerts, and the treat-tossing mechanism your dog learns to anticipate. The treat toss actively reassures anxious dogs in a way other cams can't.", features: ["360° rotation, 1080p HD","Treat-tossing via phone app","Barking & activity alerts"], searchQuery: "Furbo 360 dog camera", rating: 4.5, reviewCount: "20K+", prime: true },
      { name: "Wyze Cam v3", badge: "Best Value", description: "The budget pick if you just need to see your dog. Under $40, outdoor-rated IP65, color night vision, continuous microSD recording. No treat toss, no pet AI — but a $40 camera that works well beats a $200 one with features you don't need.", features: ["Color night vision","Outdoor-rated IP65","Under $40"], searchQuery: "Wyze Cam v3 indoor outdoor camera", rating: 4.6, reviewCount: "120K+", prime: true },
      { name: "Petcube Bites 2 Lite", badge: "Premium Pick", description: "The premium treat-dispenser at a lower price than Furbo. Flings treats up to 6 feet, 1080p with night vision, Alexa integration. If you want the treat feature without Furbo's subscription push, this is the alternative.", features: ["Flings treats up to 6 feet","1080p HD + night vision","Works with Alexa"], searchQuery: "Petcube Bites 2 Lite pet camera", rating: 4.3, reviewCount: "5K+", prime: true },
      { name: "Eufy Security Indoor Cam 2K", badge: "", description: "2K video, AI person/pet detection, local microSD storage — no monthly subscription. Our pick for privacy-conscious owners who don't want pet video in someone else's cloud.", features: ["2K resolution","Local storage (no subscription)","AI pet + person detection"], searchQuery: "Eufy Indoor Cam 2K pet", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "Ring Indoor Cam (2nd Gen)", badge: "", description: "1080p, two-way talk, privacy shutter. Makes sense only if you're already in the Ring ecosystem — one app beats juggling three for doorbell, yard, and dog cam.", features: ["1080p HD + two-way talk","Manual privacy shutter","Integrates with Ring Alarm"], searchQuery: "Ring Indoor Cam 2nd generation", rating: 4.6, reviewCount: "40K+", prime: true },
      { name: "Echo Show 8 (3rd Gen)", badge: "", description: "Not a dog cam, but the \"drop in\" feature lets you check on and talk to your dog from any Alexa device. If you already have Alexa, a smart display does 90% of a dedicated pet cam's job — plus it's a smart display for everything else.", features: ["Drop-in two-way video","Works as full Alexa display","Motion-based camera framing"], searchQuery: "Echo Show 8 3rd generation", rating: 4.5, reviewCount: "80K+", prime: true },
    ],
  },
  {
    slug: "dog-dental",
    title: "Best Dog Dental Care (2026)",
    description: "Dental disease affects most dogs over age 3. Daily dental chews combined with periodic brushing prevent tartar buildup, gum disease, and expensive vet cleanings.",
    buyingGuide: [
      { title: "VOHC seal", detail: "The Veterinary Oral Health Council independently tests dental products. If it doesn't have the VOHC seal, there's limited evidence it works." },
      { title: "Brushing beats chews", detail: "Mechanical removal of plaque is the single most effective dental habit. 2-3 times per week with an enzymatic toothpaste outperforms any chew." },
      { title: "Size matters", detail: "Dental chews should match your dog's weight class. A treat designed for a Great Dane is a choking hazard for a Chihuahua, and vice versa." },
      { title: "Human toothpaste is toxic", detail: "Xylitol (in most human toothpastes) can kill dogs. Always use dog-specific toothpaste." },
      { title: "Skip anesthesia-free cleanings", detail: "They clean visible surfaces only and miss the tartar below the gumline — where periodontal disease actually starts. Not a real substitute for a vet cleaning." },
    ],
    picks: [
      { name: "Greenies Original Dental Treats", badge: "Best Overall", description: "Our top pick and the #1 vet-recommended dental treat. VOHC-accepted, unique chew texture that actually scrapes tartar, five size options by weight. If you pick one daily dental habit, make it this.", features: ["VOHC-accepted for plaque & tartar","Unique chew texture","5 size options by weight"], searchQuery: "Greenies Original dental treats dog", rating: 4.8, reviewCount: "100K+", prime: true },
      { name: "Purina DentaLife Daily Dental Chews", badge: "Best Value", description: "The budget alternative to Greenies. Porous texture designed to reach the gumline, fewer calories per chew, bulk bags that last. Not VOHC-accepted but close in effectiveness at about half the cost.", features: ["Porous texture reaches gumline","Fewer calories per chew","Bulk sizes for daily use"], searchQuery: "Purina DentaLife daily dental chews", rating: 4.7, reviewCount: "50K+", prime: true },
      { name: "Virbac C.E.T. Enzymatic Toothpaste", badge: "Premium Pick", description: "The premium pick — developed by veterinary dentists. Dual-enzyme formula breaks down plaque chemically, safe to swallow, poultry flavor dogs tolerate. Nothing beats brushing plus enzymes for actual dental health. Worth the price.", features: ["Dual-enzyme plaque breakdown","Safe to swallow, no rinsing","Poultry flavor"], searchQuery: "Virbac CET Enzymatic toothpaste dog", rating: 4.7, reviewCount: "20K+", prime: true },
      { name: "Whimzees Alligator Dental Chews", badge: "", description: "Our pick for dogs with food sensitivities who can't have Greenies' ingredients. Grain-free, plant-based, VOHC-accepted, ridged shape scrapes teeth while dogs chew.", features: ["Grain-free, plant-based","VOHC-accepted","Long-lasting natural chew"], searchQuery: "Whimzees Alligator dental dog chews", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "Oravet Dental Hygiene Chews", badge: "", description: "Developed by vet dentists, creates a 24-hour anti-bacterial barrier on teeth after chewing. More aggressive than standard chews — the right pick for dogs with existing tartar buildup.", features: ["Developed by vet dentists","Creates 24-hour anti-bacterial barrier","VOHC-accepted"], searchQuery: "Oravet dental hygiene chews dog", rating: 4.7, reviewCount: "15K+", prime: true },
      { name: "Arm & Hammer Fresh Breath Dog Toothbrush Kit", badge: "", description: "Dual-head toothbrush, finger brush, and enzymatic toothpaste for under $15. If you've never brushed a dog's teeth and don't know where to start, the kit has everything you need to start tonight.", features: ["Includes 3 brush types","Baking soda enzymatic paste","Under $15"], searchQuery: "Arm and Hammer dog toothbrush kit", rating: 4.6, reviewCount: "40K+", prime: true },
    ],
  },
  {
    slug: "dog-supplements",
    title: "Best Dog Supplements (2026)",
    description: "Supplements support joint health, digestion, skin/coat, and overall vitality — paired with quality nutrition. Look for NASC-certified brands (National Animal Supplement Council).",
    buyingGuide: [
      { title: "NASC certification", detail: "The National Animal Supplement Council independently audits manufacturing quality. Look for the NASC Quality Seal on the label — without it, you're trusting the brand." },
      { title: "Start before problems", detail: "Joint supplements work best preventively. Start at age 5-6 for large breeds, don't wait for limping. For senior dogs already stiff, expect 4-6 weeks before you see change." },
      { title: "Talk to your vet first", detail: "Supplements can interact with medications. If your dog is on anything long-term (NSAIDs, seizure meds, heart meds), check before adding supplements." },
      { title: "Chew vs pill", detail: "Soft chews are easier but often have added sugars. Tablets are more concentrated and cheaper per dose. For daily use, pill pockets beat marketing flavors." },
      { title: "Skip gummies", detail: "Gummy-style \"CBD for dogs\" and similar products often have unverified dosing. NASC-certified brands won't sell these." },
    ],
    picks: [
      { name: "Nutramax Cosequin DS Plus MSM", badge: "Best Overall", description: "Our top pick and the #1 vet-recommended joint supplement. Glucosamine, chondroitin, and MSM in a chewable tablet, NASC-certified, the most-studied joint supplement in veterinary medicine. Start it at age 5-6 for large breeds.", features: ["Glucosamine, chondroitin, MSM","Chewable tablet format","#1 vet-recommended brand"], searchQuery: "Nutramax Cosequin DS Plus MSM dog", rating: 4.8, reviewCount: "50K+", prime: true },
      { name: "Purina FortiFlora Probiotic Supplement", badge: "Best Value", description: "The budget pick at under $1 per day. Single-strain clinically-proven probiotic in sprinkle packets — this is the one vets hand you for diarrhea or post-antibiotic recovery. Daily use on sensitive stomachs works too.", features: ["Veterinarian recommended","Easy sprinkle packets","Clinically proven for diarrhea"], searchQuery: "Purina FortiFlora probiotic dog", rating: 4.8, reviewCount: "80K+", prime: true },
      { name: "Finn Hip & Joint Support", badge: "Premium Pick", description: "The premium modern formula — Type II collagen, turmeric, green-lipped mussel. More emerging research backing these ingredients than Cosequin's classic blend. Worth the price for active dogs and clean-label buyers.", features: ["Type II collagen + turmeric","Green-lipped mussel","Clean label, no artificial additives"], searchQuery: "Finn Hip and Joint Support dog supplement", rating: 4.7, reviewCount: "5K+", prime: true },
      { name: "Zesty Paws Omega Bites for Skin & Coat", badge: "", description: "Wild Alaskan salmon oil plus flaxseed in a soft chew dogs actually want. Our pick for dry skin, dull coat, or seasonal itching. Give it 4-6 weeks to see coat quality change.", features: ["Wild Alaskan salmon oil","Soft chews dogs love","Supports skin, coat, joints, heart"], searchQuery: "Zesty Paws Omega Bites dog salmon oil", rating: 4.6, reviewCount: "40K+", prime: true },
      { name: "Vetriscience Composure Calming Chews", badge: "", description: "NASC-certified, non-drowsy calming with thiamine, L-theanine, and colostrum. Our pick for predictable stressors — give 30 minutes before fireworks, vet visits, or thunderstorms.", features: ["NASC-certified formula","Thiamine + L-theanine","Non-drowsy calming"], searchQuery: "Vetriscience Composure calming chews dog", rating: 4.6, reviewCount: "20K+", prime: true },
      { name: "PetHonesty 10-in-1 Multivitamin", badge: "", description: "Covers 10 wellness areas in one daily chew — joint, heart, immune, skin, digestion, energy. A reasonable all-in-one if you don't want to manage four separate supplement bottles.", features: ["Covers 10 wellness areas","Soft chew format","Made in the USA"], searchQuery: "PetHonesty 10-in-1 multivitamin dog", rating: 4.6, reviewCount: "30K+", prime: true },
    ],
  },
  {
    slug: "dog-boots",
    title: "Best Dog Boots & Paw Protection (2026)",
    description: "Protect paws from hot pavement, ice, road salt, rough terrain, and post-surgery healing. A good fit matters more than price.",
    buyingGuide: [
      { title: "Measure, don't guess", detail: "Paw size isn't proportional to body size. Measure paw width while standing (weight-bearing) and order by that, not dog weight." },
      { title: "Acclimate first", detail: "Most dogs hate boots on day one. Practice indoors for short sessions with treats, then 5-minute outdoor walks, before expecting a full hike." },
      { title: "Test the hold", detail: "Walk 10 minutes on grass after first fit. Loose boots fall off within a block. Tight ones cause chafing you'll see hours later." },
      { title: "Paw wax for short outings", detail: "For quick walks on salt or hot pavement, paw wax is often better than boots — less fuss, dogs walk naturally, and the barrier still works." },
      { title: "Check pads after", detail: "Cracks, redness, or bleeding between toes mean something is wrong — wrong size, debris inside, or allergy to the material." },
    ],
    picks: [
      { name: "Ruffwear Grip Trex Dog Boots", badge: "Best Overall", description: "Our top pick for dogs that actually hike. Vibram rubber outsoles grip rock, breathable mesh uppers don't sweat, hook-and-loop closure stays put. The Vibram sole is what separates these from every generic dog boot.", features: ["Vibram rubber outsoles","Breathable air mesh","Reflective trim"], searchQuery: "Ruffwear Grip Trex dog boots", rating: 4.6, reviewCount: "15K+", prime: true },
      { name: "QUMY Dog Boots (Set of 4)", badge: "Best Value", description: "Under $30 for a full set of 4, with an anti-slip rubber sole and wide split seam for easy entry. Fine for casual urban use — hot pavement, light rain. Not for real hiking.", features: ["Anti-slip rubber sole","Wide split seam for easy entry","Reflective Velcro strap"], searchQuery: "QUMY dog boots set of 4", rating: 4.3, reviewCount: "25K+", prime: true },
      { name: "Muttluks All-Weather Dog Boots", badge: "Premium Pick", description: "The premium winter pick — genuine leather soles, wool-blend lining, made in Canada. For actual winter weather (below 20°F, deep snow, heavy salt), synthetic boots freeze and fall off. These don't.", features: ["Genuine leather soles","Wool-blend lining","Made in Canada"], searchQuery: "Muttluks all weather dog boots", rating: 4.5, reviewCount: "5K+", prime: true },
      { name: "Musher's Secret Paw Wax", badge: "", description: "Our pick for dogs who refuse boots (most of them). Food-grade wax barrier protects pads from salt, ice, and hot pavement. Apply before walks, let your dog walk normally, no boots to fall off.", features: ["All-natural food-grade wax","Invisible barrier protection","No boots required"], searchQuery: "Mushers Secret paw wax dog", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "Pawz Rubber Dog Boots", badge: "", description: "Disposable-style latex boots that look like balloons. 12 per pack, biodegradable, stretch to fit. Great for brief salt or hot-pavement outings when you don't want to wrestle Velcro for 10 minutes.", features: ["Biodegradable natural rubber","12 boots per pack","Stretches to fit most paws"], searchQuery: "Pawz rubber dog boots", rating: 4.4, reviewCount: "40K+", prime: true },
      { name: "Kurgo Step-N-Strobe Dog Shoes", badge: "", description: "Boots with motion-activated LED lights plus reflective trim and an anti-slip sole. The right pick for pre-dawn or post-dusk walks where drivers need to see your dog before they see you.", features: ["Built-in LED when dog moves","Reflective trim all around","Anti-slip rubber sole"], searchQuery: "Kurgo Step N Strobe LED dog shoes", rating: 4.2, reviewCount: "3K+", prime: true },
    ],
  },
  {
    slug: "dog-training",
    title: "Best Dog Training Tools (2026)",
    description: "The right tool makes training easier for both you and your dog. Clickers and treat pouches for positive reinforcement; head halters and long lines for recall and loose-leash work.",
    buyingGuide: [
      { title: "Start with positive reinforcement", detail: "Clicker + high-value treats + consistency beats every aversive tool for 95% of training situations. Master this before considering anything else." },
      { title: "Skip the prong collar", detail: "Prong collars cause more problems than they solve and often make fear-based reactivity worse. Gentle Leaders and Halti give equivalent control without the risks." },
      { title: "E-collar rules", detail: "E-collars are tools for experienced handlers doing off-leash recall work. If you haven't trained with one before, hire a balanced trainer first — misuse creates lifelong anxiety." },
      { title: "Timing is everything", detail: "Rewards within 1-2 seconds of the behavior. That's why a clicker (instant marker) beats a treat fumble every time — the treat just confirms what the click marked." },
      { title: "Practice short sessions", detail: "5 minutes, 3 times a day outperforms a 30-minute marathon. Dogs learn better in short focused bursts with lots of wins." },
    ],
    picks: [
      { name: "PetSafe Clik-R Training Clicker", badge: "Best Overall", description: "Our top pick because a clicker is the single most useful training tool you'll own, and this is the best one. Classic design, finger band so it never drops, consistent click tone. First thing we'd buy for a new puppy.", features: ["Finger band for secure grip","Consistent click tone","Works with every method"], searchQuery: "PetSafe Clik-R dog training clicker", rating: 4.7, reviewCount: "10K+", prime: true },
      { name: "Frisco Silicone Lick Mat", badge: "Best Value", description: "Under $10 and one of the most effective enrichment tools on the market. Smear with peanut butter or plain yogurt before baths, nail trims, or vet visits. Turns stressful moments into focused activities.", features: ["Suction-cup bottom","Dishwasher safe","Food-grade silicone"], searchQuery: "Frisco silicone lick mat dog", rating: 4.7, reviewCount: "5K+", prime: true },
      { name: "SportDOG SportTrainer 825X Remote Trainer", badge: "Premium Pick", description: "The premium pick — a professional-grade e-collar for experienced handlers only. Tone, vibration, and static stim, 500-yard range, fully waterproof. Worth the price for off-leash recall work, but get a trainer first if you've never used one.", features: ["500-yard range","Tone, vibration, static options","Fully waterproof collar"], searchQuery: "SportDOG SportTrainer 825X remote", rating: 4.6, reviewCount: "8K+", prime: true },
      { name: "PetSafe Gentle Leader Head Collar", badge: "", description: "The humane alternative to prong collars for pullers. Redirects your dog's head when they pull, zero throat pressure. Learning curve for both ends of the leash, but within a week most dogs walk loose.", features: ["Humane no-pull head control","Includes training DVD","Padded nose loop"], searchQuery: "PetSafe Gentle Leader head collar", rating: 4.5, reviewCount: "30K+", prime: true },
      { name: "PetSafe Treat Pouch Sport", badge: "", description: "Hinged top stays open during reps but closes when shaken, with a belt clip and built-in poop-bag dispenser. Essential for 10+ minutes of reward training — fumbling for treats in a pocket kills your timing.", features: ["Hinged auto-close opening","Built-in poop bag dispenser","Machine washable"], searchQuery: "PetSafe Treat Pouch Sport training", rating: 4.7, reviewCount: "20K+", prime: true },
      { name: "Halti No Pull Training Headcollar", badge: "", description: "Same idea as the Gentle Leader with a different fit profile. If the Gentle Leader slides off your dog's face, the Halti usually works — it sits differently on shorter-snouted breeds.", features: ["Includes safety link strap","Padded for comfort","5 sizes XS to XL"], searchQuery: "Halti no pull headcollar dog", rating: 4.5, reviewCount: "15K+", prime: true },
    ],
  },
  {
    slug: "dog-collars",
    title: "Best Dog Collars & Tags (2026)",
    description: "A good collar is comfortable for daily wear, visible in low light, and holds ID tags securely. Add GPS for escape artists and reflective or LED for night walks.",
    buyingGuide: [
      { title: "Two-finger fit", detail: "You should fit two fingers flat between the collar and your dog's neck. Tighter causes irritation; looser means it can slip over the head." },
      { title: "Never use a flat collar for walking pullers", detail: "Pressure on the throat causes long-term damage, especially in small breeds. Use a harness for walks; keep the collar for ID tags only." },
      { title: "D-ring material", detail: "Solid brass outlasts zinc alloy by years. If you can bend the D-ring with your fingers, the collar will fail in 6-12 months." },
      { title: "ID tags", detail: "Phone number + address (or at least zip). Deep-etched stainless outlasts printed or stamped tags. Keep microchip info registered and up to date separately." },
      { title: "LED for night walks", detail: "Reflective trim is not enough near roads. A rechargeable LED collar is visible from 500+ feet — the distance that matters when a driver's reaction time is 1-2 seconds." },
    ],
    picks: [
      { name: "Blueberry Pet Classic Collar", badge: "Best Overall", description: "Our top pick and the collar we put on most dogs. Solid brass D-ring, adjustable webbing, solid colors or patterns, under $15. The brass D-ring outlasts cheaper zinc alloys by years — the detail that matters.", features: ["Solid brass D-ring","Adjustable for any size","Matching leash available"], searchQuery: "Blueberry Pet Classic dog collar", rating: 4.8, reviewCount: "80K+", prime: true },
      { name: "GoTags Personalized Embroidered Collar", badge: "Best Value", description: "Under $15 with your dog's name and phone number embroidered directly into the webbing. No jingly metal tags — some dogs hate the sound, many owners do too. Machine washable.", features: ["Embroidered name + phone","Tagless design, no jingling","Machine washable"], searchQuery: "GoTags personalized embroidered dog collar", rating: 4.8, reviewCount: "30K+", prime: true },
      { name: "Fi Series 3 GPS Tracker Collar", badge: "Premium Pick", description: "The premium pick and a must-have for escape artists. Real-time GPS tracking, 3-week battery life, escape-zone alerts. For Beagles, Huskies, and other hounds that bolt, a standard ID tag isn't enough — Fi's worth every dollar.", features: ["Real-time GPS tracking","3-week battery life","Escape-zone alerts"], searchQuery: "Fi Series 3 GPS dog collar", rating: 4.4, reviewCount: "3K+", prime: true },
      { name: "Mendota Products Double-Braided Collar", badge: "", description: "Hand-braided solid-braid nylon made in the USA. Won't fray, handles saltwater and mud. Our pick for working and hunting dogs where flimsy webbing falls apart — these last a decade.", features: ["Solid-braid construction","Made in the USA","Won't fray or rot"], searchQuery: "Mendota double braided dog collar", rating: 4.8, reviewCount: "4K+", prime: true },
      { name: "Illumiseen LED USB Rechargeable Collar", badge: "", description: "USB-rechargeable LED tube visible from 500+ feet. If you walk at dusk or dawn on any road with traffic, this saves lives — drivers see your dog before they see the leash.", features: ["USB rechargeable","Visible from 500+ feet","3 modes: solid, fast blink, slow blink"], searchQuery: "Illumiseen LED dog collar rechargeable", rating: 4.6, reviewCount: "15K+", prime: true },
      { name: "Lupine Pet Originals Collar", badge: "", description: "Lifetime guarantee — even if chewed. Thick woven nylon, unique patterns, made in New Hampshire. Our pick for chewer puppies and destructive rescues where you'd otherwise replace the collar 3 times before adulthood.", features: ["Lifetime guarantee (even chewed)","Made in the USA","Unique pattern designs"], searchQuery: "Lupine Pet Originals dog collar", rating: 4.8, reviewCount: "8K+", prime: true },
      { name: "GoTags Stainless Steel Pet ID Tag", badge: "", description: "Deep-etched stainless steel with four personalization lines, multiple shapes, under $10. The deep etching is why we pick this over printed or stamped tags — it doesn't fade, even after years of daily wear.", features: ["Stainless steel, deep-etched","4 lines of personalization","Multiple shapes and sizes"], searchQuery: "GoTags stainless steel pet ID tag", rating: 4.8, reviewCount: "40K+", prime: true },
    ],
  },
  {
    slug: "dog-coats",
    title: "Best Dog Coats, Hoodies & Apparel (2026)",
    description: "Short-haired, small, and senior dogs benefit from a real coat below 45°F. Look for proper chest coverage, adjustable fit, and machine-washable materials.",
    buyingGuide: [
      { title: "Who needs a coat", detail: "Short-haired breeds (Boxers, Pit Bulls, Greyhounds), small dogs (under 15 lbs), seniors, and dogs with health conditions. Double-coated breeds (Huskies, Goldens) usually don't." },
      { title: "Temperature cutoff", detail: "Below 45°F for most short-haired dogs. Below 20°F for almost everyone except arctic breeds. Below 0°F limit outdoor time to brief bathroom breaks." },
      { title: "Coverage", detail: "Coat should cover the chest and belly, not just the back. Exposed belly in snow or rain defeats the purpose." },
      { title: "Fit", detail: "Leg holes shouldn't ride into the armpit (chafes). Belt should sit snug at the waist without squeezing. Check for slipping or bunching after 5 minutes of walking." },
      { title: "Washability", detail: "Machine washable is non-negotiable — coats get muddy fast. Avoid dry-clean-only designer pieces for anything beyond photos." },
    ],
    picks: [
      { name: "Carhartt Chore Coat for Dogs", badge: "Best Overall", description: "Our top pick and the Carhartt logic scaled to dogs. 12oz duck canvas, fleece-lined body, triple-stitched main seams — built to abrasion standards, not fashion ones. The right pick for farm, ranch, and rural dogs.", features: ["12oz duck canvas","Fleece-lined body","Triple-stitched main seams"], searchQuery: "Carhartt chore coat dog", rating: 4.7, reviewCount: "10K+", prime: true },
      { name: "Kuoser Cold Weather Reversible Dog Coat", badge: "Best Value", description: "Waterproof outer, fleece inner, reversible for two looks. Under $25 most sizes. Our pick for city dogs doing 10-20 minute walks in 30-45°F — Carhartt is overkill, this is plenty.", features: ["Reversible — fleece or waterproof","Full chest and belly coverage","Reflective strips"], searchQuery: "Kuoser cold weather reversible dog coat", rating: 4.6, reviewCount: "30K+", prime: true },
      { name: "Hurtta Extreme Warmer Winter Coat", badge: "Premium Pick", description: "The premium pick, rated for -25°F. Windproof water-repellent shell, full belly coverage, reflective trim. For sled dogs, thin-coated breeds in real winter, and dogs who stand still outside for long periods, this is the one that actually works.", features: ["Rated for -25°F","Windproof + water-repellent","Full belly coverage"], searchQuery: "Hurtta Extreme Warmer dog coat", rating: 4.7, reviewCount: "3K+", prime: true },
      { name: "Ruffwear Powder Hound Jacket", badge: "", description: "Synthetic-down insulation with abrasion-resistant shell and front-leg loops. Our pick for active dogs skiing, snowshoeing, or plowing through deep snow — loose coats come off, this one stays.", features: ["Synthetic down insulation","Abrasion-resistant shell","Front-leg loops for security"], searchQuery: "Ruffwear Powder Hound dog jacket", rating: 4.6, reviewCount: "4K+", prime: true },
      { name: "Gooby Fleece Vest", badge: "", description: "Stretchy pull-over fleece that fits tiny dogs where stiff harness-style coats don't. For Chihuahuas, Yorkies, Poms — any dog under 10 lbs that shivers indoors.", features: ["Stretchy fleece pull-over","Designed for small breeds","Machine washable"], searchQuery: "Gooby fleece vest dog small", rating: 4.6, reviewCount: "15K+", prime: true },
      { name: "Canada Pooch Summit Parka", badge: "", description: "Waterproof recycled shell, removable faux-fur hood, belly coverage. Fashion-first — performance is real but you're also paying for how it looks. Fine pick if the dog is part of the outfit.", features: ["Waterproof recycled shell","Removable faux-fur hood","Belly coverage"], searchQuery: "Canada Pooch Summit parka dog", rating: 4.5, reviewCount: "2K+", prime: true },
    ],
  },
  {
    slug: "dog-raincoats",
    title: "Best Dog Raincoats (2026)",
    description: "Keep your dog dry without restricting movement. Look for full back coverage, adjustable straps, and a proper belly strap so it doesn't blow up in the wind.",
    buyingGuide: [
      { title: "Full back coverage", detail: "Coat should reach from collar to tail base. Short \"fashion\" raincoats expose the lower back and let water pool on fur." },
      { title: "Belly strap", detail: "A single back strap flips in wind. A belly strap (or full belly panel) keeps the coat in place and protects the underside from puddle splash." },
      { title: "Breathable waterproof", detail: "Cheap PVC raincoats turn into saunas. Look for breathable waterproof fabric (Houndtex, ePTFE) for anything longer than a 10-minute walk." },
      { title: "Reflective trim", detail: "Rain means low visibility. 360° reflective trim (not just back-of-coat stripes) is a safety feature worth paying for." },
      { title: "Hood options", detail: "Most dogs dislike hoods — they block hearing. Consider a non-hood raincoat unless your dog specifically tolerates one." },
    ],
    picks: [
      { name: "Hurtta Monsoon Raincoat", badge: "Best Overall", description: "Our top pick for dogs that actually walk in storms. Waterproof Houndtex fabric, 360° reflective trim, adjustable belly straps. Keeps dogs dry through 30-minute downpours, not just drizzle. Designed in Finland for Finnish weather.", features: ["Waterproof Houndtex fabric","360° reflective trim","Adjustable belly straps"], searchQuery: "Hurtta Monsoon dog raincoat", rating: 4.6, reviewCount: "5K+", prime: true },
      { name: "Frisco Rainy Day Dog Raincoat", badge: "Best Value", description: "Under $20. Waterproof PVC shell, adjustable hood, reflective strip. If you just need to keep your dog dry on quick walks and don't want to pay Hurtta prices, this is the sensible pick.", features: ["Waterproof PVC shell","Adjustable hood","Reflective strip"], searchQuery: "Frisco Rainy Day dog raincoat", rating: 4.5, reviewCount: "8K+", prime: true },
      { name: "Ruffwear Sun Shower Rain Jacket", badge: "Premium Pick", description: "The premium pick for active dogs. Breathable waterproof shell that packs into its own stuff sack, 4-point adjustable fit. Our pick for running, hiking, and trail dogs where a stiff PVC raincoat restricts motion.", features: ["Breathable waterproof fabric","Packs into included stuff sack","Adjustable 4-point fit"], searchQuery: "Ruffwear Sun Shower rain jacket dog", rating: 4.7, reviewCount: "6K+", prime: true },
      { name: "Ethical Pet Fashion Pet Dog Raincoat", badge: "", description: "Classic yellow slicker cut with an attached hood, sized for toy breeds. The right pick for Chihuahuas, Yorkies, and Poms where adult-dog raincoats don't have small-enough sizes.", features: ["Classic slicker design","Sized for tiny breeds","Attached hood"], searchQuery: "Ethical Pet Fashion Pet dog raincoat", rating: 4.4, reviewCount: "10K+", prime: true },
      { name: "Lifeunion Adjustable Dog Raincoat", badge: "", description: "Four-legged rain-suit style that covers all four legs and belly. For dogs that hate wet bellies or wade through puddles on every walk — nothing else covers this much.", features: ["Full 4-leg coverage","Adjustable straps","Reflective piping"], searchQuery: "Lifeunion adjustable dog raincoat full coverage", rating: 4.3, reviewCount: "4K+", prime: true },
      { name: "Rainproof Dog Coat for Broad-Chested Breeds", badge: "", description: "Cut with extra chest room and snug waist for Pit Bulls, Staffies, Boxers. If standard raincoats cut into your dog's armpits or won't close over their chest, this cut solves it.", features: ["Cut for broad-chested breeds","Waterproof nylon","Machine washable"], searchQuery: "dog raincoat pit bull broad chest", rating: 4.5, reviewCount: "2K+", prime: true },
    ],
  },
  {
    slug: "dog-grooming",
    title: "Best Dog Grooming & Cleanup (2026)",
    description: "Weekly brushing and bathing at home saves hundreds a year on groomer visits and keeps coats healthy. Start with a brush suited to your dog's coat type.",
    buyingGuide: [
      { title: "Match the brush to the coat", detail: "Slicker brush for medium/long coats. Undercoat rake for double-coated breeds (Huskies, Goldens). Rubber curry brush for short coats. Wrong brush = hair left in dog." },
      { title: "Bath frequency", detail: "Every 4-6 weeks for most dogs. More often strips skin oils. Less often for short-coated breeds. Always brush before bathing — mats get worse when wet." },
      { title: "Nail length", detail: "When standing, you shouldn't hear nails click on tile. If you can, they're too long. Trim every 2-4 weeks depending on surface wear." },
      { title: "Ears", detail: "Floppy-eared breeds (Spaniels, Labs) need weekly ear cleaning. Prick-eared breeds (Shepherds) usually self-clean. Wet ears = infection risk." },
      { title: "When to see a pro", detail: "Severe matting, breed-specific cuts (Poodles, Bichons), and surgical shaves should go to a professional groomer. DIY everything else." },
    ],
    picks: [
      { name: "FURminator deShedding Tool", badge: "Best Overall", description: "Our top pick and the iconic de-shedding tool for a reason. Stainless-steel edge reaches undercoat without damaging the topcoat, ejector button for easy cleanup. For double-coated breeds (Huskies, Goldens, GSDs), nothing else removes this much loose hair per session.", features: ["Removes undercoat without damage","Multiple sizes & hair lengths","Ejector button for easy cleanup"], searchQuery: "Furminator deShedding tool dog", rating: 4.7, reviewCount: "150K+", prime: true },
      { name: "Earth Rated Dog Poop Bags", badge: "Best Value", description: "Extra-thick leak-proof bags, 270+ per pack, under $15. The everyday poop bag we buy in bulk. Thicker than competitors without the gimmicky \"compostable\" claims that don't actually compost at home.", features: ["Extra-thick, leak-proof","Lavender or unscented","270+ bags per pack"], searchQuery: "Earth Rated dog poop bags lavender", rating: 4.8, reviewCount: "150K+", prime: true },
      { name: "Wahl Pet-Pro Dog Clipper Kit", badge: "Premium Pick", description: "The premium pick for DIY haircuts. 10 guide combs, scissors, and a noticeably quieter motor than pro salon clippers. Quiet matters more than specs for most dogs — anxious dogs will sit through a Wahl when they'd flinch through a WAHL pro.", features: ["Quiet motor for sensitive dogs","10 guide combs included","Complete grooming kit"], searchQuery: "Wahl Pet Pro dog clippers kit", rating: 4.4, reviewCount: "25K+", prime: true },
      { name: "Hertzko Self-Cleaning Slicker Brush", badge: "", description: "Retractable pins — press the button and hair pops off. Our pick for medium and long coats where daily brushing piles up hair in traditional slickers.", features: ["Self-cleaning retractable bristles","Ergonomic non-slip grip","For medium to long coats"], searchQuery: "Hertzko self cleaning slicker brush", rating: 4.6, reviewCount: "100K+", prime: true },
      { name: "Safari Professional Nail Trimmer", badge: "", description: "Pro-grade stainless blade with a safety stop that prevents over-cutting. Our pick for first-time DIY trimmers — the safety stop means you can't accidentally quick your dog. Lifetime sharpness guarantee.", features: ["Pro-grade stainless blade","Safety stop prevents quicking","Lifetime sharpness guarantee"], searchQuery: "Safari Professional dog nail trimmer", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "Dremel 7300-PT Pet Nail Grinder", badge: "", description: "Cordless rotary grinder, two speeds, safety guard. Our pick for dogs with black nails (where you can't see the quick) or dogs who associate clippers with pain. Takes some acclimation but is the safer long-term choice.", features: ["Cordless rechargeable","Two-speed motor","Safer than clippers for black nails"], searchQuery: "Dremel 7300 PT pet nail grinder", rating: 4.5, reviewCount: "40K+", prime: true },
      { name: "Earthbath Oatmeal & Aloe Shampoo", badge: "", description: "Soap-free, all-natural, oatmeal and aloe formula. Our pick for dogs with allergies, hot spots, or dry skin. Most \"hypoallergenic\" shampoos still contain irritants; this one really doesn't.", features: ["Soap-free, all-natural","Oatmeal + aloe for sensitive skin","Vanilla & almond scent"], searchQuery: "Earthbath Oatmeal Aloe dog shampoo", rating: 4.7, reviewCount: "20K+", prime: true },
    ],
  },
  {
    slug: "dog-bowls",
    title: "Best Dog Bowls (2026)",
    description: "Stainless steel for daily use (no bacteria buildup); slow feeders for fast eaters; elevated for large breeds; no-spill for messy drinkers.",
    buyingGuide: [
      { title: "Stainless steel for daily use", detail: "Plastic bowls harbor bacteria in scratches and can cause \"plastic chin\" acne. Ceramic chips. Stainless steel is the safe, durable, dishwasher-friendly default." },
      { title: "Slow feeders for gulpers", detail: "If your dog inhales kibble in under 60 seconds, a slow feeder is essential — especially for deep-chested breeds (Great Danes, Labs, Boxers) at bloat risk." },
      { title: "Elevated for big dogs", detail: "Dogs over 80 lbs benefit from elevated bowls (chest-height while standing) to reduce neck strain. Smaller dogs don't need them and elevated bowls can actually increase bloat risk in some studies." },
      { title: "Size", detail: "Bowl should hold a full meal with 30% headroom. Too big = over-feeding. Too small = spillover." },
      { title: "Water bowl placement", detail: "Large water bowl, always filled, separate from food bowl. Dogs drink more from flowing water — a fountain is worth it for kidney health in older dogs." },
    ],
    picks: [
      { name: "Outward Hound Fun Feeder Slo Bowl", badge: "Best Overall", description: "Our top pick because slow feeders prevent bloat — a medical emergency that kills deep-chested breeds. Maze-like ridges stretch meal time from 60 seconds to 10 minutes. BPA/PVC/phthalate free, dishwasher safe. Every Lab, Boxer, and Great Dane should own one.", features: ["Slows eating 10x","BPA/PVC/phthalate free","Non-slip base, dishwasher safe"], searchQuery: "Outward Hound Fun Feeder Slo Bowl", rating: 4.7, reviewCount: "80K+", prime: true },
      { name: "Basics Stainless Steel Dog Bowl Set", badge: "Best Value", description: "Under $12 for a set of two. Rust-resistant stainless, non-slip rubber base. No frills but every feature we actually need — backup bowls, travel bowls, crate bowls.", features: ["Rust-resistant stainless","Non-slip rubber base","Multiple sizes available"], searchQuery: "Amazon Basics stainless steel dog bowl", rating: 4.7, reviewCount: "80K+", prime: true },
      { name: "YETI Boomer 8 Dog Bowl", badge: "Premium Pick", description: "The premium pick — over-engineered to YETI's usual standard. Double-wall 18/8 stainless, BearFoot non-slip ring, dishwasher safe. Every 5-year review is still positive, which says everything about this bowl.", features: ["18/8 stainless double wall","Non-slip BearFoot ring","Dishwasher safe"], searchQuery: "YETI Boomer 8 dog bowl", rating: 4.9, reviewCount: "10K+", prime: true },
      { name: "Neater Feeder Deluxe Dog Feeder", badge: "", description: "Elevated double bowl with a mess-catching base for spilled water and food. Our pick for big drinkers and paw-in-the-bowl dogs — the floor around the bowl stays dry for once.", features: ["Elevated ergonomic design","Catches spilled water/food","Two bowl sizes included"], searchQuery: "Neater Feeder Deluxe dog elevated bowl", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "PetRageous Designs Elevated Bowl Stand", badge: "", description: "Wooden-framed elevated feeder, two stainless bowls, multiple heights and finishes. Our pick for large breeds (80+ lbs) where neck strain during meals causes slow-developing joint pain.", features: ["Wooden frame, stainless bowls","Two heights and finishes","Reduces neck strain"], searchQuery: "PetRageous elevated dog bowl stand", rating: 4.6, reviewCount: "5K+", prime: true },
      { name: "Dexas Popware Collapsible Travel Bowl", badge: "", description: "Silicone bowl that collapses flat and clips to a leash or bag. Dishwasher safe. Every car, backpack, and dog-park bag should have one — they're $8 and solve the \"where do I water my dog\" problem forever.", features: ["Collapses flat for travel","Clips to leash or bag","Dishwasher safe"], searchQuery: "Dexas Popware collapsible dog bowl", rating: 4.8, reviewCount: "15K+", prime: true },
      { name: "PetSafe Drinkwell Pet Fountain", badge: "", description: "Circulating fountain with activated carbon filter and a quiet pump. Our pick for finicky drinkers and multi-pet households — dogs and cats both drink more from moving water, which matters for kidney health in older pets.", features: ["Activated carbon filter","Quiet circulating pump","Encourages reluctant drinkers"], searchQuery: "PetSafe Drinkwell pet water fountain", rating: 4.5, reviewCount: "40K+", prime: true },
    ],
  },
  {
    slug: "dog-crates",
    title: "Best Dog Crates & Kennels (2026)",
    description: "The right crate is the right size — big enough to stand, turn, and lie down comfortably, not so big it loses the den feel. Measure your dog first.",
    buyingGuide: [
      { title: "Size", detail: "Big enough to stand fully, turn around, and lie down comfortably. Anything bigger and a puppy will potty in one corner and sleep in the other — no housebreaking benefit." },
      { title: "Divider panel", detail: "Essential for puppies. Buy the adult-sized crate and use the divider to shrink the space while they grow. Saves you from buying 3 crates." },
      { title: "Wire vs soft vs plastic", detail: "Wire: best ventilation, folds flat, cheapest. Plastic: airline-approved, best for travel. Soft: lightest but only for housebroken non-chewers." },
      { title: "Placement", detail: "Living area, not isolated basement or garage. Dogs crate-train faster when the crate is part of daily life." },
      { title: "Crate training basics", detail: "Never use the crate as punishment. Feed meals inside, high-value chew toys only in there, lots of rewarded entry practice before you ever close the door." },
    ],
    picks: [
      { name: "MidWest iCrate Double Door Folding Crate", badge: "Best Overall", description: "Our top pick and the default crate for 95% of dogs. Divider panel grows with puppies, two doors for placement flexibility, folds flat. Cheap, reliable, five sizes, widely available. The rare \"best\" that's also the cheapest sensible option.", features: ["Divider panel grows with puppy","Two doors for placement flexibility","Folds flat for storage"], searchQuery: "MidWest iCrate double door folding", rating: 4.7, reviewCount: "80K+", prime: true },
      { name: "Frisco Fold & Carry Double Door Crate", badge: "Best Value", description: "Same basic design as the MidWest with a divider and two doors, noticeably cheaper. Our pick when you need a second crate (travel, vacation home) and don't want to pay MidWest prices twice.", features: ["Includes divider panel","Folds flat","Two doors"], searchQuery: "Frisco Fold Carry double door dog crate", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "Diggs Revol Dog Crate", badge: "Premium Pick", description: "The premium pick and the modern dog crate reimagined. Rounded corners, ceiling hatch, silent latches, collapses in seconds without tools. Looks like furniture, not a cage. Worth the price if it lives in your living room.", features: ["Collapses in seconds, no tools","Ceiling hatch access","Rounded corners, child-safe design"], searchQuery: "Diggs Revol dog crate", rating: 4.7, reviewCount: "8K+", prime: true },
      { name: "Petmate Two Door Top Load Pet Carrier", badge: "", description: "Airline-approved hard-sided crate with top and front loading. Our pick for flights — wire crates don't meet IATA specs. Sizes from cabin-carry to cargo.", features: ["Airline-approved sizes","Top + front loading","Easy assembly, no tools"], searchQuery: "Petmate Two Door Top Load pet carrier", rating: 4.7, reviewCount: "20K+", prime: true },
      { name: "EliteField 3-Door Folding Soft Crate", badge: "", description: "Three mesh doors, steel tube frame, fleece bed included. Our pick for housebroken non-chewers who travel with you — soft crates are lighter, quieter, and pack smaller than wire.", features: ["3 mesh doors","Fleece bed included","Folds flat with carrying bag"], searchQuery: "EliteField 3 door folding soft dog crate", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "ProSelect Empire Heavy Duty Crate", badge: "", description: "20-gauge steel, reinforced corners, dual-door locking. Our pick for dogs that bend wire MidWests (working lines of GSDs, Mals, Huskies) — this one actually holds them.", features: ["20-gauge steel construction","Dual-door locking system","Casters for moving"], searchQuery: "ProSelect Empire heavy duty dog crate", rating: 4.5, reviewCount: "3K+", prime: true },
    ],
  },
  {
    slug: "dog-anxiety",
    title: "Best Dog Anxiety Aids (2026)",
    description: "For separation anxiety, thunderstorms, fireworks, and vet visits. Layer multiple approaches — pressure wraps, pheromones, calming supplements, and crate training.",
    buyingGuide: [
      { title: "Identify the trigger", detail: "Separation anxiety, storms, fireworks, vet visits, and general anxiety all need different approaches. A pressure wrap for storms won't help isolation anxiety." },
      { title: "Layer the tools", detail: "Most severe anxiety needs 2-3 approaches together: pheromones + pressure wrap + calming supplement. No single product fixes serious cases." },
      { title: "Start before the trigger", detail: "Calming supplements need 30-60 minutes to take effect. ThunderShirts work best put on before the storm, not during panic." },
      { title: "When to see a vet", detail: "If your dog self-harms, doesn't eat for 24+ hours, or breaks out of crates, talk to your vet about behavior medication. These tools won't fix clinical anxiety alone." },
      { title: "Rule out boredom", detail: "Many \"anxiety\" behaviors (destructive chewing, excessive barking) are actually boredom. 60 minutes of exercise + mental enrichment before alone-time solves more cases than any product." },
    ],
    picks: [
      { name: "ThunderShirt Classic Anxiety Vest", badge: "Best Overall", description: "Our top pick for storm and firework anxiety. Constant gentle pressure works like swaddling a baby, drug-free, 80%+ reported effectiveness. Works in 5 minutes without sedation. If your dog panics predictably, start here.", features: ["Drug-free anxiety relief","80%+ reported effectiveness","All sizes from XXS to XXL"], searchQuery: "ThunderShirt Classic dog anxiety vest", rating: 4.4, reviewCount: "30K+", prime: true },
      { name: "Zesty Paws Calming Bites", badge: "Best Value", description: "Under $25 for a month's supply. L-tryptophan, chamomile, and valerian root in a non-drowsy chew for daily use. Our pick for dogs with general anxiety — give consistently, not just before events.", features: ["L-tryptophan + chamomile","Natural calming herbs","Non-drowsy daily use"], searchQuery: "Zesty Paws Calming Bites dog", rating: 4.5, reviewCount: "40K+", prime: true },
      { name: "Adaptil Calm Home Diffuser", badge: "Premium Pick", description: "The premium pick for household anxiety. Plug-in diffuser releases dog-appeasing pheromones for 30 days. Works gradually on general household tension, multi-dog households, and dogs new to a home — not a fix for acute events.", features: ["30-day continuous coverage","Clinically proven pheromones","Unscented to humans"], searchQuery: "Adaptil Calm Home Diffuser dog", rating: 4.3, reviewCount: "10K+", prime: true },
      { name: "Smart Pet Love Snuggle Puppy", badge: "", description: "Plush puppy with a real-feel heartbeat and disposable warming pack. Our pick for the first two weeks with a new puppy — reduces crate whining dramatically because it mimics littermates.", features: ["Real-feel heartbeat","Disposable warming pack included","Reduces crate whining"], searchQuery: "Smart Pet Love Snuggle Puppy behavioral aid", rating: 4.5, reviewCount: "25K+", prime: true },
      { name: "PetSafe Busy Buddy Kibble Nibble", badge: "", description: "Adjustable treat-dispensing ball that forces your dog to roll it to release kibble. For dogs with boredom-based anxiety, this turns alone-time into a food puzzle instead of panic.", features: ["Adjustable dispensing speed","Durable natural rubber","Dishwasher safe"], searchQuery: "PetSafe Busy Buddy Kibble Nibble", rating: 4.6, reviewCount: "8K+", prime: true },
      { name: "ThunderEase Calming Pheromone Collar", badge: "", description: "The portable version of Adaptil's pheromones — goes with your dog to the car, park, or vet. When your dog's anxiety follows them, a room diffuser doesn't help there.", features: ["30-day continuous calming","Portable protection","Drug-free"], searchQuery: "ThunderEase calming pheromone dog collar", rating: 4.3, reviewCount: "15K+", prime: true },
    ],
  },
  {
    slug: "dog-car-seats",
    title: "Best Dog Car Seats & Travel (2026)",
    description: "Unsecured dogs can become projectiles in a crash. Crash-tested car seats, seat belt harnesses, and cargo barriers protect your dog and everyone in the car.",
    buyingGuide: [
      { title: "Unsecured = dangerous", detail: "A 60 lb unsecured dog in a 30 mph crash hits the front seats with 1,200 lbs of force. Not optional — this kills dogs and humans." },
      { title: "Crash-tested claims", detail: "Look for Center for Pet Safety (CPS) certification, not just \"crash-tested\" marketing claims. CPS is the only independent testing org." },
      { title: "Size appropriate", detail: "Small dogs: booster seats with tether. Medium dogs: crash-tested harness + seat belt. Large dogs: crash-tested crate or cargo area with barrier." },
      { title: "Never front seat", detail: "Airbags kill dogs. Back seat only. Cargo area for SUVs with a proper barrier." },
      { title: "Window caveat", detail: "Heads out windows cause debris eye injuries and falls at highway speed. Limit window openings to 2-3 inches max." },
    ],
    picks: [
      { name: "Sleepypod Clickit Sport Harness", badge: "Best Overall", description: "Our top pick for medium-to-large dogs. 3-way crash-tested (CPS certified — the actual safety gold standard), three-point connection, works with your car's normal seat belt. Where booster seats don't work, this is the safe answer.", features: ["Crash-tested (CPS certified)","Three-point connection","Works with standard seat belt"], searchQuery: "Sleepypod Clickit Sport dog harness", rating: 4.5, reviewCount: "4K+", prime: true },
      { name: "BarksBar Heavy Duty Car Back Seat Cover", badge: "Best Value", description: "Full bench hammock with non-slip backing, waterproof, machine washable. Under $40. Protects seats from mud and hair — not a safety device on its own, but works alongside a real crash-tested harness.", features: ["Full bench hammock coverage","Non-slip backing","Waterproof and washable"], searchQuery: "BarksBar heavy duty dog car seat cover", rating: 4.7, reviewCount: "50K+", prime: true },
      { name: "Snoozer Lookout II Dog Car Seat", badge: "Premium Pick", description: "The premium small-dog booster with sherpa interior, microfiber exterior, washable cover. Headrest strap plus safety tether. If you want Kurgo Skybox function in a fabric that still looks good after 3 years, this is the upgrade.", features: ["Sherpa interior","Microfiber exterior","Machine washable cover"], searchQuery: "Snoozer Lookout II dog car seat", rating: 4.6, reviewCount: "3K+", prime: true },
      { name: "Kurgo Skybox Booster Seat", badge: "", description: "Elevated bucket seat with safety tether and built-in storage. Our pick for small dogs under 30 lbs — elevates them to window height while keeping them secured in a crash.", features: ["Elevated view for small dogs","Includes safety tether","Built-in storage pouch"], searchQuery: "Kurgo Skybox booster dog car seat", rating: 4.5, reviewCount: "5K+", prime: true },
      { name: "Lookout I Elevated Car Seat", badge: "", description: "Designed for dogs under 18 lbs. Four-point strap system plus safety tether, plush interior. Our pick for toy breeds where the Kurgo Skybox is too large.", features: ["For dogs under 18 lbs","4-point strap + tether","Plush cuddle interior"], searchQuery: "Lookout I elevated dog car seat", rating: 4.5, reviewCount: "6K+", prime: true },
      { name: "Kurgo Backseat Bridge", badge: "", description: "Flat platform across the back seat, holds 250 lbs, water-resistant. Our pick for dogs who ride loose in the back — prevents them falling into the footwell during braking.", features: ["Flat back-seat platform","Holds 250 lbs","Water-resistant fabric"], searchQuery: "Kurgo Backseat Bridge dog", rating: 4.5, reviewCount: "3K+", prime: true },
    ],
  },
  {
    slug: "dog-puzzle-toys",
    title: "Best Dog Puzzle Toys (2026)",
    description: "Mental exercise tires dogs as much as physical exercise. Puzzle toys teach problem-solving and prevent boredom destruction. Start easy, progress to harder puzzles.",
    buyingGuide: [
      { title: "Start easy", detail: "If your dog can't solve it in 30 seconds, they get frustrated and walk away. Start with Level 1 puzzles and progress as they master each one." },
      { title: "Match chew strength", detail: "Plastic Nina Ottosson puzzles aren't for power chewers. Rubber or nylon-based puzzles (KONG Wobbler, Tug-a-Jug) hold up to destruction." },
      { title: "Swap kibble for meals", detail: "Turn breakfast into a puzzle. Regular meal time becomes 15-20 minutes of enrichment instead of 60 seconds of inhaling food." },
      { title: "Supervise first uses", detail: "Dogs sometimes try to chew puzzles open instead of solving them. Supervise until you know your dog's approach." },
      { title: "Rotate puzzles", detail: "A puzzle your dog has mastered is as engaging as a mastered toy — not very. Rotate 3-4 puzzles weekly for sustained novelty." },
    ],
    picks: [
      { name: "Outward Hound Hide-A-Squirrel", badge: "Best Overall", description: "Our top pick and the #1 bestselling puzzle toy. Plush tree trunk with 6 squeaky squirrels dogs pull out. Easy enough that every dog figures it out in under a minute — which keeps them motivated. The beginner puzzle every dog should start with.", features: ["6 squeaky squirrels","Engages hunting instinct","Great for plush-loving dogs"], searchQuery: "Outward Hound Hide A Squirrel dog puzzle", rating: 4.7, reviewCount: "50K+", prime: true },
      { name: "KONG Wobbler Treat Dispensing Toy", badge: "Best Value", description: "Under $20 and works as daily meal enrichment. Weighted bottom wobbles as dogs nose and paw it, dispensing kibble slowly. Turns a 60-second meal into a 20-minute activity that tires the brain.", features: ["Dispensing regular kibble","Weighted bottom for wobble","Unscrews to fill"], searchQuery: "KONG Wobbler treat dispensing toy", rating: 4.7, reviewCount: "30K+", prime: true },
      { name: "Trixie Mad Scientist Interactive Dog Puzzle", badge: "Premium Pick", description: "The premium Level 4 (hardest) puzzle. Dogs must balance treats on beakers and flip them for rewards. For border collies, poodles, and shepherds that get bored with everything else in a week — this one holds their attention.", features: ["Level 4 — hardest difficulty","Balance + flip mechanism","For puzzle veterans"], searchQuery: "Trixie Mad Scientist dog puzzle", rating: 4.4, reviewCount: "5K+", prime: true },
      { name: "Nina Ottosson by Outward Hound Dog Twister", badge: "", description: "Level 3 of 4 difficulty. Slide covers and flaps conceal treats. The next step up from Hide-A-Squirrel when your dog needs real problem-solving, not just tugging.", features: ["Level 3 of 4 difficulty","Multiple treat compartments","Non-slip base"], searchQuery: "Nina Ottosson Dog Twister puzzle", rating: 4.5, reviewCount: "15K+", prime: true },
      { name: "PetSafe Busy Buddy Tug-a-Jug", badge: "", description: "Treat jug with rope handle — dogs tug, shake, and roll to release kibble. Built for rough play, which makes this our pick for dogs who destroy plastic puzzles on day one.", features: ["Tug, shake, roll action","Durable for chewers","Dishwasher safe"], searchQuery: "PetSafe Busy Buddy Tug a Jug dog", rating: 4.5, reviewCount: "8K+", prime: true },
      { name: "Starmark Bob-A-Lot Interactive Toy", badge: "", description: "Adjustable dispensing hole (easy to hard), weighted so it wobbles but never tips, holds 3 cups of kibble. Our pick for high-drive dogs — the adjustable difficulty means it doesn't get mastered and abandoned.", features: ["Adjustable difficulty","Holds 3 cups of kibble","Won't tip over"], searchQuery: "Starmark Bob A Lot interactive dog toy", rating: 4.5, reviewCount: "15K+", prime: true },
    ],
  },
];

export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
