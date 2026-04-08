export interface GiftGuide {
  slug: string;
  title: string;
  description: string;
  gifts: GiftItem[];
}

export interface GiftItem {
  name: string;
  price: string;
  description: string;
  asin?: string;
}

export const giftGuides: GiftGuide[] = [
  {
    slug: "dog-lovers",
    title: "Best Gifts for Dog Lovers (2026)",
    description:
      "Thoughtful gifts that celebrate the bond between dogs and their humans, from personalized keepsakes to practical everyday items.",
    gifts: [
      { name: "Custom Pet Portrait by Crown & Paw", price: "$50-90", description: "Upload a photo and get a Renaissance-style oil painting of their dog on premium canvas." },
      { name: "Yeti Boomer Dog Bowl", price: "$40-50", description: "Nearly indestructible stainless steel dog bowl that matches the iconic Yeti aesthetic.", asin: "B08F4WWJ68" },
      { name: "Personalized Dog Breed Mug by Rifle Paper Co.", price: "$15-25", description: "Beautifully illustrated ceramic mug featuring their specific dog breed with gold foil accents." },
      { name: "Dog Mom or Dog Dad T-Shirt by The Bark", price: "$25-35", description: "Super-soft tri-blend tee with a minimalist breed silhouette and witty tagline." },
      { name: "Diggs Groov Training Treat Dispenser", price: "$25-30", description: "Crate-mounted treat dispenser that keeps dogs calm and makes crate training easier." },
      { name: "BarkBox Subscription (3-Month)", price: "$75-95", description: "Three months of themed toys, treats, and chews delivered to their door each month." },
      { name: "Pawprints Keepsake Ornament Kit", price: "$12-18", description: "DIY clay paw-print ornament kit that creates a lasting memento of their furry friend." },
      { name: "Willow Tree 'My Dog' Figurine", price: "$20-30", description: "Hand-painted resin figurine of a person lovingly embracing their dog, a timeless shelf display." },
    ],
  },
  {
    slug: "new-puppy",
    title: "New Puppy Owner Gift Guide",
    description:
      "Help new puppy parents survive the first weeks with practical gifts that make housetraining, teething, and bonding a little easier.",
    gifts: [
      { name: "Kong Puppy Starter Kit", price: "$25-35", description: "Includes a puppy Kong, treat paste, and teething stick sized for small mouths.", asin: "B0002AR15U" },
      { name: "Nature\u2019s Miracle Puppy Stain & Odor Remover", price: "$10-15", description: "Bio-enzymatic cleaner every new puppy owner will use more than they expect.", asin: "B06XKBS9YJ" },
      { name: "Snuggle Puppy Behavioral Aid Toy", price: "$30-40", description: "Plush toy with a real-feel heartbeat and heat pack that soothes puppies on their first nights home." },
      { name: "PupBox Monthly Subscription", price: "$40-50", description: "Age-appropriate toys, treats, and training guides delivered monthly as the puppy grows." },
      { name: "Frisco Puppy Training Pads (100-Pack)", price: "$20-30", description: "Leak-proof, quick-absorbing training pads with attractant built in for faster housetraining.", asin: "B00MW8G62E" },
      { name: "Zak George\u2019s Dog Training Revolution (Book)", price: "$12-18", description: "Bestselling positive-reinforcement training guide that is perfect for first-time dog owners." },
      { name: "MidWest iCrate with Divider", price: "$35-60", description: "The go-to puppy crate with a divider panel so it grows with the pup from 8 weeks to adulthood.", asin: "B000QFT1R2" },
      { name: "Burt\u2019s Bees Puppy Shampoo & Conditioner Set", price: "$10-15", description: "Tearless, pH-balanced puppy shampoo and conditioner set with buttermilk and linseed oil.", asin: "B00CSNQRI0" },
    ],
  },
  {
    slug: "dog-mom",
    title: "Best Gifts for Dog Moms",
    description:
      "Celebrate the dog moms in your life with gifts that honor their dedication, from cozy apparel to sentimental keepsakes.",
    gifts: [
      { name: "Dog Mom Sweatshirt by Simply Sage Market", price: "$30-40", description: "Cozy oversized crewneck with an embroidered paw print and \u2018Dog Mom\u2019 in a modern script font." },
      { name: "Custom Dog Ear Necklace by CaitlynMinimalist", price: "$30-45", description: "Dainty gold or silver pendant shaped like the outline of their dog\u2019s actual ears from a photo." },
      { name: "Homesick Dog Mom Candle", price: "$30-35", description: "Hand-poured soy candle with a warm cedar and vanilla scent designed to smell like puppy snuggles." },
      { name: "FurBaby Photo Book by Artifact Uprising", price: "$40-65", description: "Hardcover linen photo book to curate their best dog photos into a coffee-table-worthy keepsake." },
      { name: "Barefoot Dreams CozyChic Dog Mom Blanket", price: "$60-80", description: "Ultra-plush microfiber throw blanket that is as irresistible to dogs as it is to humans.", asin: "B07GTRML7X" },
      { name: "Harry Barker Dog Treat Jar", price: "$20-30", description: "Ceramic treat jar with an airtight bamboo lid and playful \u2018Treats\u2019 lettering for the countertop." },
      { name: "Rifle Paper Co. Dog Walking Tote", price: "$30-40", description: "Sturdy canvas tote with floral dog illustrations, perfect for carrying leashes, bags, and treats." },
      { name: "Paw Print Birthstone Ring by Etsy", price: "$25-40", description: "Adjustable sterling silver ring with a tiny paw print and their dog\u2019s birthstone accent." },
    ],
  },
  {
    slug: "dog-dad",
    title: "Best Gifts for Dog Dads",
    description:
      "Practical, rugged, and fun gifts for the guys who never miss a morning walk and always share the last bite of steak.",
    gifts: [
      { name: "Ruffwear Switchbak Hands-Free Leash", price: "$40-50", description: "Convertible leash that goes from handheld to waist-worn for runs and hikes with a padded handle." },
      { name: "Carhartt Dog Chore Coat", price: "$40-55", description: "Rugged duck-canvas dog coat that matches Carhartt\u2019s iconic workwear aesthetic for the matching duo.", asin: "B07L6C5KRM" },
      { name: "YETI Rambler 20 oz Tumbler (Dog Dad Edition)", price: "$35-40", description: "Stainless steel insulated tumbler custom-engraved with \u2018Dog Dad\u2019 and their dog\u2019s name." },
      { name: "Whiskey Peaks Dog Breed Rocks Glasses", price: "$30-40", description: "Hand-blown rocks glasses with a 3D dog breed molded into the base for an elevated happy hour." },
      { name: "Ruffwear Trail Runner Running Vest", price: "$50-70", description: "Lightweight running vest with pockets for dog bags, treats, keys, and a phone while on the trail." },
      { name: "Fi Series 3 Smart Collar", price: "$100-150", description: "GPS tracking collar that satisfies the data-loving dog dad with step counts, location, and escape alerts.", asin: "B0CYL4MH2K" },
      { name: "Dog Dad Baseball Cap by Pacific Brim", price: "$20-30", description: "Vintage-wash cotton cap with an embroidered dog silhouette and \u2018Dog Dad\u2019 on the front." },
      { name: "Traeger x Bark Puppy Pizza Kit", price: "$15-25", description: "DIY dog-treat pizza kit with peanut butter dough and dog-safe toppings for a fun bonding activity." },
    ],
  },
  {
    slug: "dog-christmas",
    title: "Best Dog Christmas Gifts & Stockings",
    description:
      "Make the holidays special for your four-legged family member with festive toys, treat-stuffed stockings, and cozy seasonal gear.",
    gifts: [
      { name: "ZippyPaws Holiday Burrow Toy (Christmas Tree)", price: "$12-18", description: "Plush Christmas tree with squeaky ornament toys hidden inside for a festive hide-and-seek game." },
      { name: "BarkBox Holiday Gift Box", price: "$35-45", description: "Curated holiday box with two themed toys, two bags of treats, and a chew, wrapped and ready to gift." },
      { name: "KONG Holiday Goodie Bone", price: "$8-12", description: "Classic KONG Goodie Bone in red and green with treat-stuffable ends for holiday chewing fun.", asin: "B0002AR0I8" },
      { name: "Outward Hound Christmas Stocking for Dogs", price: "$15-20", description: "Pre-filled dog stocking with toys, treats, and a tennis ball \u2014 ready to hang on the mantle." },
      { name: "Frisco Holiday Reindeer Antler Headband", price: "$5-10", description: "Adjustable plush reindeer antler headband for the obligatory holiday photo card moment." },
      { name: "West Paw Holiday Zogoflex Hurley Bone", price: "$15-25", description: "Tough, recyclable chew bone in seasonal red and green that is guaranteed against dog damage.", asin: "B00N938KGU" },
      { name: "Pet Krewe Elf Dog Costume", price: "$15-25", description: "Adorable elf costume with hat and collar that turns any dog into Santa\u2019s little helper." },
      { name: "Three Dog Bakery Holiday Cookie Assortment", price: "$20-30", description: "Festive box of hand-decorated, all-natural dog cookies shaped like candy canes, snowflakes, and trees." },
    ],
  },
  {
    slug: "personalized-dog-gifts",
    title: "Personalized Dog Gifts",
    description:
      "One-of-a-kind gifts featuring their dog\u2019s name, photo, or breed \u2014 keepsakes they\u2019ll treasure forever.",
    gifts: [
      { name: "Custom Pet Portrait Canvas by Crown & Paw", price: "$50-90", description: "Upload a photo and get a museum-quality Renaissance-style portrait of their dog on canvas.", asin: "B0874LWC1Z" },
      { name: "GoTags Personalized Dog Collar", price: "$15-25", description: "Embroidered nylon collar with the dog\u2019s name and phone number stitched directly into the fabric.", asin: "B01MQKJFWZ" },
      { name: "Custom Dog Blanket by Furhaven", price: "$25-40", description: "Plush personalized blanket with the dog\u2019s name and breed silhouette embroidered in the corner.", asin: "B07WGFK3NL" },
      { name: "Providence Engraving Dog ID Tag", price: "$6-12", description: "Stainless steel bone-shaped tag with deep laser engraving that won\u2019t fade or wear off.", asin: "B009VVKZ1Y" },
      { name: "Custom Dog Photo Pillow", price: "$20-35", description: "Double-sided throw pillow printed with your dog\u2019s photo on ultra-soft microfiber." },
      { name: "Personalized Dog Bowl by Loving Pets", price: "$12-20", description: "Stainless steel bowl with a removable custom-printed outer ring featuring the dog\u2019s name.", asin: "B00HSMBRBA" },
      { name: "Pearhead My First Year Photo Frame", price: "$15-22", description: "12-month photo frame designed for puppies with space for month-by-month growth photos.", asin: "B07Q3TKNFY" },
      { name: "Custom Dog Ornament by Hallmark", price: "$15-25", description: "Personalized Christmas ornament shaped like a dog bone with the pet\u2019s name and year." },
    ],
  },
  {
    slug: "funny-dog-gifts",
    title: "Funny Dog Gifts",
    description:
      "Hilarious gifts for people who think their dog is funnier than most humans \u2014 guaranteed laughs.",
    gifts: [
      { name: "Dog Butt Towel Holder", price: "$20-30", description: "Wall-mounted resin dog figurine whose rear end holds a roll of paper towels. Classy." },
      { name: "Dog Shaming 2026 Daily Calendar", price: "$12-18", description: "Page-a-day calendar with photos of guilty dogs and their written confessions. A desk essential.", asin: "B0CXNQMV9H" },
      { name: "\"It\u2019s Not Dog Hair, It\u2019s Glitter\" Wine Glass", price: "$15-20", description: "Stemless wine glass with a paw print and the most relatable quote for any dog owner." },
      { name: "Funny Dog Dad/Mom Socks", price: "$8-15", description: "Novelty crew socks printed with dog faces and \u2018If You Can Read This, The Dog Needs Me.\u2019", asin: "B07MGYHFLV" },
      { name: "BarkBox Super Chewer Toy Box", price: "$29-35", description: "Monthly subscription box of hilariously themed ultra-tough toys and treats." },
      { name: "Pooping Dogs 2026 Wall Calendar", price: "$12-18", description: "Twelve months of dogs caught in their most vulnerable position. A gag gift that keeps on giving.", asin: "B0CWN1SG5F" },
      { name: "Dog Poop Emoji Plush Toy", price: "$8-12", description: "Squeaky plush poop emoji toy that dogs love and humans find hilarious.", asin: "B074KPP19V" },
      { name: "Funny Dog Bandana \u2018I Do What I Want\u2019", price: "$8-14", description: "Triangle bandana with sassy phrases like \u2018Bad to the Bone\u2019 or \u2018I Do What I Want.\u2019", asin: "B07JM5LDW8" },
    ],
  },
  {
    slug: "dog-gifts-under-25",
    title: "Best Dog Lover Gifts Under $25",
    description:
      "Thoughtful, budget-friendly gifts for dog people that don\u2019t feel cheap \u2014 perfect for stocking stuffers and Secret Santa.",
    gifts: [
      { name: "Benebone Wishbone Chew", price: "$12-16", description: "Real-flavor-infused nylon chew bone shaped for a dog\u2019s grip. Made in the USA.", asin: "B00CPDWT2M" },
      { name: "Outward Hound Hide-A-Squirrel Puzzle", price: "$10-15", description: "Plush tree trunk with squeaky squirrels inside \u2014 the best-selling dog toy on Amazon.", asin: "B0002I0O60" },
      { name: "Milk-Bone MaroSnacks Dog Treats (40 oz)", price: "$10-14", description: "Real bone marrow treats in a giant tub \u2014 every dog goes nuts for these.", asin: "B000KRFZK6" },
      { name: "ChuckIt! Ultra Ball (2-Pack)", price: "$8-12", description: "High-bounce, ultra-durable rubber ball that\u2019s the gold standard for fetch.", asin: "B000F4AVPA" },
      { name: "Paw Print Keychain with Photo", price: "$8-15", description: "Stainless steel paw-shaped keychain locket that holds a tiny photo of their dog." },
      { name: "Dog Treat Baking Kit", price: "$15-22", description: "DIY dog treat kit with bone-shaped cookie cutters, mix, and icing. Fun for dog and human.", asin: "B09NKHKNKZ" },
      { name: "Nylabone Power Chew Variety Pack", price: "$12-18", description: "Pack of three durable nylon chews in different flavors for aggressive chewers.", asin: "B003SLRG3G" },
      { name: "KONG Classic (Medium)", price: "$10-15", description: "The original stuffable rubber toy that has been keeping dogs busy for decades.", asin: "B0002AR0I8" },
    ],
  },
  {
    slug: "dog-gifts-under-50",
    title: "Best Dog Lover Gifts Under $50",
    description:
      "Step up the gift game with premium picks that show you really get them \u2014 and their dog.",
    gifts: [
      { name: "Furbo Mini Dog Camera", price: "$39-49", description: "Compact treat-tossing camera with 1080p HD, night vision, and barking alerts.", asin: "B09BKGG67G" },
      { name: "Ruffwear Front Range Harness", price: "$40-45", description: "Premium padded everyday harness with front and back leash clips \u2014 a gift they\u2019ll use every day.", asin: "B01N7YDQKH" },
      { name: "YETI Boomer 8 Dog Bowl", price: "$40-50", description: "Nearly indestructible stainless steel dog bowl with non-slip base. The Yeti of dog bowls.", asin: "B08F4WWJ68" },
      { name: "Kurgo Loft Reversible Dog Jacket", price: "$35-45", description: "Reversible jacket with ripstop shell on one side and fleece on the other.", asin: "B07L6C5KRM" },
      { name: "PetSafe Smart Feed Automatic Feeder", price: "$45-50", description: "Wi-Fi connected feeder with app scheduling \u2014 perfect for the tech-savvy dog parent." },
      { name: "Embark Dog DNA Test", price: "$99-159", description: "Breed identification, health screening, and relative finder for their dog \u2014 the #1 rated dog DNA kit.", asin: "B01EINBA76" },
      { name: "ThunderShirt Classic Anxiety Vest", price: "$40-50", description: "The vet-recommended calming vest that uses gentle pressure to reduce anxiety.", asin: "B0028QK6IS" },
      { name: "Fi Series 3 Smart Collar", price: "$99-150", description: "GPS tracking collar with escape alerts, step counting, and 3-month battery life.", asin: "B0CYL4MH2K" },
    ],
  },
  {
    slug: "dog-memorial",
    title: "Dog Memorial Gifts",
    description:
      "Thoughtful keepsakes for someone grieving the loss of a beloved dog \u2014 gifts that honor the bond and keep the memory alive.",
    gifts: [
      { name: "Pearhead Pet Pawprints Clay Keepsake", price: "$8-14", description: "Non-toxic clay impression kit to preserve a paw print in a tin keepsake.", asin: "B00I9Y3GYC" },
      { name: "Pet Memorial Stone by Trixie & Peanut", price: "$20-35", description: "Engraved garden stone with \u2018You Left Paw Prints on My Heart\u2019 and space for a name." },
      { name: "Willow Tree \u2018Angel of Friendship\u2019 Figurine", price: "$25-35", description: "Hand-painted resin figurine of an angel cradling a dog, a timeless memorial display.", asin: "B000E5OARU" },
      { name: "Rainbow Bridge Pet Memorial Frame", price: "$15-25", description: "Double-frame with space for a photo and the Rainbow Bridge poem on the opposite side.", asin: "B073R88TDR" },
      { name: "Pet Memorial Wind Chimes", price: "$20-30", description: "Aluminum wind chimes with a paw-print sail and \u2018No Longer By My Side, Forever in My Heart.\u2019", asin: "B09TVRGFWY" },
      { name: "Custom Pet Memorial Ornament", price: "$15-25", description: "Personalized photo ornament with the pet\u2019s name, dates, and a heartfelt message." },
      { name: "Dog Heaven Book by Cynthia Rylant", price: "$8-12", description: "Beautifully illustrated children\u2019s book about Dog Heaven that brings comfort to grieving owners.", asin: "B000FC0PEA" },
      { name: "Paw Print Cremation Urn Necklace", price: "$15-25", description: "Stainless steel pendant that holds a tiny amount of ashes or fur, worn close to the heart.", asin: "B07MQZRPWL" },
    ],
  },
];

export function getGiftGuideBySlug(slug: string): GiftGuide | undefined {
  return giftGuides.find((g) => g.slug === slug);
}
