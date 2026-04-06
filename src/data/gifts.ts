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
}

export const giftGuides: GiftGuide[] = [
  {
    slug: "dog-lovers",
    title: "Best Gifts for Dog Lovers (2026)",
    description:
      "Thoughtful gifts that celebrate the bond between dogs and their humans, from personalized keepsakes to practical everyday items.",
    gifts: [
      {
        name: "Custom Pet Portrait by Crown & Paw",
        price: "$50-90",
        description:
          "Upload a photo and get a Renaissance-style oil painting of their dog on premium canvas.",
      },
      {
        name: "Yeti Boomer Dog Bowl",
        price: "$40-50",
        description:
          "Nearly indestructible stainless steel dog bowl that matches the iconic Yeti aesthetic.",
      },
      {
        name: "Personalized Dog Breed Mug by Rifle Paper Co.",
        price: "$15-25",
        description:
          "Beautifully illustrated ceramic mug featuring their specific dog breed with gold foil accents.",
      },
      {
        name: "Dog Mom or Dog Dad T-Shirt by The Bark",
        price: "$25-35",
        description:
          "Super-soft tri-blend tee with a minimalist breed silhouette and witty tagline.",
      },
      {
        name: "Diggs Groov Training Treat Dispenser",
        price: "$25-30",
        description:
          "Crate-mounted treat dispenser that keeps dogs calm and makes crate training easier.",
      },
      {
        name: "BarkBox Subscription (3-Month)",
        price: "$75-95",
        description:
          "Three months of themed toys, treats, and chews delivered to their door each month.",
      },
      {
        name: "Pawprints Keepsake Ornament Kit",
        price: "$12-18",
        description:
          "DIY clay paw-print ornament kit that creates a lasting memento of their furry friend.",
      },
      {
        name: "Willow Tree 'My Dog' Figurine",
        price: "$20-30",
        description:
          "Hand-painted resin figurine of a person lovingly embracing their dog, a timeless shelf display.",
      },
    ],
  },
  {
    slug: "new-puppy",
    title: "New Puppy Owner Gift Guide",
    description:
      "Help new puppy parents survive the first weeks with practical gifts that make housetraining, teething, and bonding a little easier.",
    gifts: [
      {
        name: "Kong Puppy Starter Kit",
        price: "$25-35",
        description:
          "Includes a puppy Kong, treat paste, and teething stick sized for small mouths.",
      },
      {
        name: "Nature's Miracle Puppy Stain & Odor Remover",
        price: "$10-15",
        description:
          "Bio-enzymatic cleaner every new puppy owner will use more than they expect.",
      },
      {
        name: "Snuggle Puppy Behavioral Aid Toy",
        price: "$30-40",
        description:
          "Plush toy with a real-feel heartbeat and heat pack that soothes puppies on their first nights home.",
      },
      {
        name: "PupBox Monthly Subscription",
        price: "$40-50",
        description:
          "Age-appropriate toys, treats, and training guides delivered monthly as the puppy grows.",
      },
      {
        name: "Frisco Puppy Training Pads (100-Pack)",
        price: "$20-30",
        description:
          "Leak-proof, quick-absorbing training pads with attractant built in for faster housetraining.",
      },
      {
        name: "Zak George's Dog Training Revolution (Book)",
        price: "$12-18",
        description:
          "Bestselling positive-reinforcement training guide that is perfect for first-time dog owners.",
      },
      {
        name: "MidWest iCrate with Divider",
        price: "$35-60",
        description:
          "The go-to puppy crate with a divider panel so it grows with the pup from 8 weeks to adulthood.",
      },
      {
        name: "Burt's Bees Puppy Shampoo & Conditioner Set",
        price: "$10-15",
        description:
          "Tearless, pH-balanced puppy shampoo and conditioner set with buttermilk and linseed oil.",
      },
    ],
  },
  {
    slug: "dog-mom",
    title: "Best Gifts for Dog Moms",
    description:
      "Celebrate the dog moms in your life with gifts that honor their dedication, from cozy apparel to sentimental keepsakes.",
    gifts: [
      {
        name: "Dog Mom Sweatshirt by Simply Sage Market",
        price: "$30-40",
        description:
          "Cozy oversized crewneck with an embroidered paw print and 'Dog Mom' in a modern script font.",
      },
      {
        name: "Custom Dog Ear Necklace by CaitlynMinimalist",
        price: "$30-45",
        description:
          "Dainty gold or silver pendant shaped like the outline of their dog's actual ears from a photo.",
      },
      {
        name: "Homesick Dog Mom Candle",
        price: "$30-35",
        description:
          "Hand-poured soy candle with a warm cedar and vanilla scent designed to smell like puppy snuggles.",
      },
      {
        name: "FurBaby Photo Book by Artifact Uprising",
        price: "$40-65",
        description:
          "Hardcover linen photo book to curate their best dog photos into a coffee-table-worthy keepsake.",
      },
      {
        name: "Barefoot Dreams CozyChic Dog Mom Blanket",
        price: "$60-80",
        description:
          "Ultra-plush microfiber throw blanket that is as irresistible to dogs as it is to humans.",
      },
      {
        name: "Harry Barker Dog Treat Jar",
        price: "$20-30",
        description:
          "Ceramic treat jar with an airtight bamboo lid and playful 'Treats' lettering for the countertop.",
      },
      {
        name: "Rifle Paper Co. Dog Walking Tote",
        price: "$30-40",
        description:
          "Sturdy canvas tote with floral dog illustrations, perfect for carrying leashes, bags, and treats.",
      },
      {
        name: "Paw Print Birthstone Ring by Etsy",
        price: "$25-40",
        description:
          "Adjustable sterling silver ring with a tiny paw print and their dog's birthstone accent.",
      },
    ],
  },
  {
    slug: "dog-dad",
    title: "Best Gifts for Dog Dads",
    description:
      "Practical, rugged, and fun gifts for the guys who never miss a morning walk and always share the last bite of steak.",
    gifts: [
      {
        name: "Ruffwear Switchbak Hands-Free Leash",
        price: "$40-50",
        description:
          "Convertible leash that goes from handheld to waist-worn for runs and hikes with a padded handle.",
      },
      {
        name: "Carhartt Dog Chore Coat",
        price: "$40-55",
        description:
          "Rugged duck-canvas dog coat that matches Carhartt's iconic workwear aesthetic for the matching duo.",
      },
      {
        name: "YETI Rambler 20 oz Tumbler (Dog Dad Edition)",
        price: "$35-40",
        description:
          "Stainless steel insulated tumbler custom-engraved with 'Dog Dad' and their dog's name.",
      },
      {
        name: "Whiskey Peaks Dog Breed Rocks Glasses",
        price: "$30-40",
        description:
          "Hand-blown rocks glasses with a 3D dog breed molded into the base for an elevated happy hour.",
      },
      {
        name: "Ruffwear Trail Runner Running Vest",
        price: "$50-70",
        description:
          "Lightweight running vest with pockets for dog bags, treats, keys, and a phone while on the trail.",
      },
      {
        name: "Fi Series 3 Smart Collar",
        price: "$100-150",
        description:
          "GPS tracking collar that satisfies the data-loving dog dad with step counts, location, and escape alerts.",
      },
      {
        name: "Dog Dad Baseball Cap by Pacific Brim",
        price: "$20-30",
        description:
          "Vintage-wash cotton cap with an embroidered dog silhouette and 'Dog Dad' on the front.",
      },
      {
        name: "Traeger x Bark Puppy Pizza Kit",
        price: "$15-25",
        description:
          "DIY dog-treat pizza kit with peanut butter dough and dog-safe toppings for a fun bonding activity.",
      },
    ],
  },
  {
    slug: "dog-christmas",
    title: "Best Dog Christmas Gifts & Stockings",
    description:
      "Make the holidays special for your four-legged family member with festive toys, treat-stuffed stockings, and cozy seasonal gear.",
    gifts: [
      {
        name: "ZippyPaws Holiday Burrow Toy (Christmas Tree)",
        price: "$12-18",
        description:
          "Plush Christmas tree with squeaky ornament toys hidden inside for a festive hide-and-seek game.",
      },
      {
        name: "BarkBox Holiday Gift Box",
        price: "$35-45",
        description:
          "Curated holiday box with two themed toys, two bags of treats, and a chew, wrapped and ready to gift.",
      },
      {
        name: "KONG Holiday Goodie Bone",
        price: "$8-12",
        description:
          "Classic KONG Goodie Bone in red and green with treat-stuffable ends for holiday chewing fun.",
      },
      {
        name: "Outward Hound Christmas Stocking for Dogs",
        price: "$15-20",
        description:
          "Pre-filled dog stocking with toys, treats, and a tennis ball — ready to hang on the mantle.",
      },
      {
        name: "Frisco Holiday Reindeer Antler Headband",
        price: "$5-10",
        description:
          "Adjustable plush reindeer antler headband for the obligatory holiday photo card moment.",
      },
      {
        name: "West Paw Holiday Zogoflex Hurley Bone",
        price: "$15-25",
        description:
          "Tough, recyclable chew bone in seasonal red and green that is guaranteed against dog damage.",
      },
      {
        name: "Pet Krewe Elf Dog Costume",
        price: "$15-25",
        description:
          "Adorable elf costume with hat and collar that turns any dog into Santa's little helper.",
      },
      {
        name: "Three Dog Bakery Holiday Cookie Assortment",
        price: "$20-30",
        description:
          "Festive box of hand-decorated, all-natural dog cookies shaped like candy canes, snowflakes, and trees.",
      },
    ],
  },
];

export function getGiftGuideBySlug(slug: string): GiftGuide | undefined {
  return giftGuides.find((g) => g.slug === slug);
}
