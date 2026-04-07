/**
 * ImagePlaceholder — renders real photos when available, warm gradient placeholders otherwise.
 * Photos are mapped by image slot ID. Gradients serve as fallback for slots without photos.
 */

/* eslint-disable @next/next/no-img-element */

// Map of image slot IDs to real photo files
const realImages: Record<string, { src: string; alt: string }> = {
  // Homepage hero
  "hero-1": { src: "/images/happy-dog-owner-hugging-golden-retriever.jpg", alt: "Happy dog owner hugging a golden retriever" },
  // Homepage category cards
  "category-beds": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Dog relaxing in a premium gray dog bed" },
  "category-toys": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Golden retriever playing with stuffed toy - best dog toys reviewed by experts" },
  "category-food": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Dog looking at bowl of premium kibble - best dog food reviews and recommendations" },
  "category-gear": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Dog wearing premium red harness and leash - best dog gear and accessories reviewed" },
  "category-gifts": { src: "/images/golden-retriever-puppies-in-red-wagon.jpg", alt: "Adorable golden retriever puppies in a red wagon - best gifts for dog lovers" },
  "category-grooming": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog being professionally groomed - best dog grooming tools reviewed" },
  // Homepage breed spotlight
  "breed-featured-1": { src: "/images/golden-retriever-holding-flower-outdoors.jpg", alt: "Golden Retriever holding a flower - America's favorite family dog" },
  // Blog posts
  "blog-1": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Dog eyeing a bowl of kibble - how to choose the right dog food for your breed" },
  "blog-2": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Signs your dog needs a better bed - pug in comfortable dog bed" },
  "blog-3": { src: "/images/golden-retriever-puppies-in-a-row.jpg", alt: "Five golden retriever puppies - the ultimate new puppy essentials checklist" },
  "blog-4": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog grooming at home - save money with the right tools" },
  "blog-5": { src: "/images/golden-retriever-with-stuffed-toy-grass.jpg", alt: "Golden retriever with favorite toy - best indestructible dog toys" },
  // Product pages - dog beds
  "best-dog-beds-top-0": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Best dog beds 2026 expert reviewed" },
  "best-dog-beds-review-0": { src: "/images/dachshund-in-cozy-blue-dog-bed.jpg", alt: "Dachshund in a cozy blue dog bed - top rated" },
  "best-dog-beds-review-1": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Pug snuggled in patterned dog bed" },
  "best-dog-beds-review-2": { src: "/images/puppy-sleeping-peacefully-on-round-bed.jpg", alt: "Puppy sleeping on round dog bed" },
  "best-dog-beds-review-3": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "Hound dog resting on bed in doorway" },
  // Product pages - dog toys
  "best-dog-toys-top-0": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Best dog toys 2026 - golden retriever with toy" },
  "best-dog-toys-top-1": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Puppies surrounded by colorful toys - best dog toys reviewed" },
  "best-dog-toys-review-0": { src: "/images/pug-cuddling-pink-unicorn-plush-toy.jpg", alt: "Pug cuddling a plush unicorn toy - our favorite indestructible dog toys" },
  "best-dog-toys-review-1": { src: "/images/yorkie-running-with-kong-ball-outdoors.jpg", alt: "Yorkie running with Kong ball" },
  "best-dog-toys-review-2": { src: "/images/weimaraner-puppies-sleeping-with-toys.jpg", alt: "Puppies surrounded by colorful toys" },
  "best-dog-toys-review-3": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Golden retriever with favorite stuffed toy" },
  // Product pages - dog food
  "best-dog-food-top-0": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Best dog food 2026 - husky at feeding time" },
  "best-dog-food-review-0": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Chocolate lab ready for dinner" },
  "best-dog-food-review-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "German Shepherd catching kibble" },
  // Product pages - dog grooming
  "best-dog-grooming-top-0": { src: "/images/french-bulldog-wearing-cute-shirt.jpg", alt: "Best dog grooming tools 2026" },
  // Product pages - dog harnesses
  "best-dog-harnesses-top-0": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Dog modeling a premium red harness - best dog harnesses 2026" },
  "best-dog-harnesses-review-0": { src: "/images/couple-petting-dog-wearing-harness.jpg", alt: "Dog wearing a comfortable harness" },
  "best-dog-harnesses-review-1": { src: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Goldendoodle in red harness on a walk" },
  // Product pages - dog food (additional)
  "best-dog-food-review-2": { src: "/images/border-collie-looking-at-food-bowl-kibble.jpg", alt: "Border collie with premium kibble" },
  // Breed avatars
  "breed-avatar-golden-retriever": { src: "/images/golden-retriever-puppy-portrait-with-collar.jpg", alt: "Golden Retriever puppy - breed guide and product recommendations" },
  "breed-avatar-bulldog": { src: "/images/english-bulldog-outdoors-with-frisbee.jpg", alt: "English Bulldog - breed guide from a retired AKC breeder" },
  "breed-avatar-beagle": { src: "/images/two-beagle-puppies-peeking-over-ledge.jpg", alt: "Two beagle puppies - breed guide and care tips" },
  "breed-avatar-australian-shepherd": { src: "/images/australian-shepherd-blue-eyes-smiling.jpg", alt: "Australian Shepherd with blue eyes - breed guide" },
  "breed-avatar-pembroke-welsh-corgi": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Pembroke Welsh Corgi - breed guide and product picks" },
  "breed-avatar-german-shorthaired-pointer": { src: "/images/german-shorthaired-pointer-resting-on-bed.jpg", alt: "German Shorthaired Pointer - breed guide" },
  "breed-avatar-dachshund": { src: "/images/dachshund-puppy-jumping-mid-air.jpg", alt: "Dachshund puppy jumping through grass - breed guide" },
  "breed-avatar-rottweiler": { src: "/images/rottweiler-smiling-happy-outdoors.jpg", alt: "Rottweiler - breed guide and product recommendations" },
  "breed-avatar-french-bulldog": { src: "/images/french-bulldog-looking-up-big-eyes.jpg", alt: "French Bulldog - breed guide and care tips" },
  "breed-avatar-poodle": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Poodle in winter coat and boots - breed guide" },
  "breed-avatar-english-springer-spaniel": { src: "/images/english-springer-spaniel-wearing-harness.jpg", alt: "English Springer Spaniel - breed guide and product recommendations" },
  "breed-avatar-havanese": { src: "/images/havanese-dog-in-red-harness-outdoors.jpg", alt: "Havanese dog - breed guide and care tips" },
  "breed-avatar-boston-terrier": { src: "/images/boston-terrier-portrait-sitting-indoors.jpg", alt: "Boston Terrier - breed guide and product picks" },
  "breed-avatar-pomeranian": { src: "/images/pomeranian-sitting-on-gray-armchair.jpg", alt: "Pomeranian - breed guide and grooming tips" },
  "breed-avatar-bernese-mountain-dog": { src: "/images/bernese-mountain-dog-standing-in-autumn-leaves.jpg", alt: "Bernese Mountain Dog - breed guide and care recommendations" },
  "breed-avatar-siberian-husky": { src: "/images/siberian-husky-blue-eyes-on-deck.jpg", alt: "Siberian Husky with blue eyes - breed guide and product picks" },
  "breed-avatar-shih-tzu": { src: "/images/shih-tzu-laying-in-green-grass.jpg", alt: "Shih Tzu relaxing in the grass - breed guide and grooming tips" },
  "breed-avatar-great-dane": { src: "/images/great-dane-merle-portrait-autumn.jpg", alt: "Great Dane - breed guide and large dog product recommendations" },
  "breed-avatar-cane-corso": { src: "/images/cane-corso-blue-standing-in-garden.jpg", alt: "Cane Corso - breed guide and care tips for this powerful breed" },
  "breed-avatar-miniature-schnauzer": { src: "/images/miniature-schnauzer-with-harness-smiling.jpg", alt: "Miniature Schnauzer smiling - breed guide and grooming recommendations" },
  "breed-avatar-boxer": { src: "/images/boxer-dog-close-up-face-portrait.jpg", alt: "Boxer dog - breed guide and product picks for active dogs" },
  "breed-avatar-doberman-pinscher": { src: "/images/doberman-pinscher-brown-portrait-chain.jpg", alt: "Doberman Pinscher - breed guide and training product recommendations" },
  "breed-avatar-cavalier-king-charles-spaniel": { src: "/images/cavalier-king-charles-spaniel-on-white-bed.jpg", alt: "Cavalier King Charles Spaniel - breed guide and care tips" },
  // Breed hero images
  "breed-australian-shepherd-hero": { src: "/images/australian-shepherd-blue-eyes-smiling.jpg", alt: "Australian Shepherd - complete breed guide" },
  "breed-pembroke-welsh-corgi-hero": { src: "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg", alt: "Pembroke Welsh Corgi - complete breed guide" },
  "breed-german-shorthaired-pointer-hero": { src: "/images/german-shorthaired-pointer-resting-on-bed.jpg", alt: "German Shorthaired Pointer - complete breed guide" },
  "breed-dachshund-hero": { src: "/images/dachshund-puppy-jumping-mid-air.jpg", alt: "Dachshund - complete breed guide" },
  "breed-rottweiler-hero": { src: "/images/rottweiler-smiling-happy-outdoors.jpg", alt: "Rottweiler - complete breed guide" },
  "breed-french-bulldog-hero": { src: "/images/french-bulldog-looking-up-big-eyes.jpg", alt: "French Bulldog - complete breed guide" },
  "breed-poodle-hero": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Poodle - complete breed guide" },
  "breed-english-springer-spaniel-hero": { src: "/images/english-springer-spaniel-wearing-harness.jpg", alt: "English Springer Spaniel - complete breed guide" },
  "breed-havanese-hero": { src: "/images/havanese-dog-in-red-harness-outdoors.jpg", alt: "Havanese - complete breed guide" },
  "breed-boston-terrier-hero": { src: "/images/boston-terrier-portrait-sitting-indoors.jpg", alt: "Boston Terrier - complete breed guide" },
  "breed-pomeranian-hero": { src: "/images/pomeranian-sitting-on-gray-armchair.jpg", alt: "Pomeranian - complete breed guide" },
  "breed-bernese-mountain-dog-hero": { src: "/images/bernese-mountain-dog-standing-in-autumn-leaves.jpg", alt: "Bernese Mountain Dog - complete breed guide" },
  "breed-siberian-husky-hero": { src: "/images/siberian-husky-blue-eyes-on-deck.jpg", alt: "Siberian Husky - complete breed guide" },
  "breed-shih-tzu-hero": { src: "/images/shih-tzu-laying-in-green-grass.jpg", alt: "Shih Tzu - complete breed guide" },
  "breed-great-dane-hero": { src: "/images/great-dane-merle-portrait-autumn.jpg", alt: "Great Dane - complete breed guide" },
  "breed-cane-corso-hero": { src: "/images/cane-corso-blue-standing-in-garden.jpg", alt: "Cane Corso - complete breed guide" },
  "breed-miniature-schnauzer-hero": { src: "/images/miniature-schnauzer-with-harness-smiling.jpg", alt: "Miniature Schnauzer - complete breed guide" },
  "breed-boxer-hero": { src: "/images/boxer-dog-close-up-face-portrait.jpg", alt: "Boxer - complete breed guide" },
  "breed-doberman-pinscher-hero": { src: "/images/doberman-pinscher-brown-portrait-chain.jpg", alt: "Doberman Pinscher - complete breed guide" },
  "breed-cavalier-king-charles-spaniel-hero": { src: "/images/cavalier-king-charles-spaniel-on-white-bed.jpg", alt: "Cavalier King Charles Spaniel - complete breed guide" },
  "breed-golden-retriever-hero": { src: "/images/golden-retriever-puppy-portrait-with-collar.jpg", alt: "Golden Retriever - complete breed guide" },
  "breed-beagle-hero": { src: "/images/two-beagle-puppies-peeking-over-ledge.jpg", alt: "Beagle - complete breed guide" },
  // Bulldog breed page
  "breed-bulldog-hero": { src: "/images/english-bulldog-whiskey-brindle.jpg", alt: "Beautiful brindle English Bulldog - breed guide and care tips" },
  "breed-bulldog-product-1": { src: "/images/english-bulldog-puppy-king-louis.jpg", alt: "English Bulldog puppy King Louis" },
  "breed-bulldog-product-2": { src: "/images/english-bulldog-puppy-bella.png", alt: "English Bulldog puppy Bella" },
  // Blog - bulldog posts
  "blog-bulldog-care": { src: "/images/english-bulldog-laying-down-resting.jpg", alt: "English Bulldog care guide from a retired breeder" },
  "blog-choose-breeder": { src: "/images/vet-examining-english-bulldog-ear.jpg", alt: "Vet examining English Bulldog - how to choose a reputable breeder" },
  // Bulldog breed page health section
  "bulldog-vet-checkup": { src: "/images/english-bulldog-at-vet-checkup.jpg", alt: "English Bulldog at the veterinarian for regular checkup" },
  // Product pages - grooming
  "best-dog-grooming-top-0": { src: "/images/poodle-professional-grooming-salon.jpg", alt: "Professional dog grooming - best grooming tools 2026" },
  "best-dog-grooming-review-0": { src: "/images/white-dog-getting-groomed-with-scissors.jpg", alt: "Dog being groomed with professional scissors" },
  // Product pages - coats
  "best-dog-coats-top-0": { src: "/images/poodle-wearing-red-coat-boots-snow.jpg", alt: "Dog wearing winter coat and boots - best dog coats 2026" },
  // Gift guide - Christmas
  "gift-christmas-hero": { src: "/images/dog-with-christmas-plush-toy-holiday.jpg", alt: "Happy dog with Christmas plush toy and holiday socks - best dog Christmas gifts" },
  // About / lifestyle
  "about-hero": { src: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", alt: "Woman adventuring with her dog on ocean cliffs - BabyMyDog helps you find the best for your pup" },
  // Newsletter
  "newsletter": { src: "/images/cute-black-dog-holding-thank-you-card.jpg", alt: "Sweet dog saying thank you - join the BabyMyDog pack for weekly picks" },
};

function getGradient(id: string): string {
  if (id.startsWith("hero")) return "linear-gradient(135deg, #C4704B 0%, #D4C5A9 40%, #E8D5C4 100%)";
  if (id.startsWith("breed-avatar")) return "linear-gradient(135deg, #D4A574 0%, #C49A6C 50%, #B8876A 100%)";
  if (id.startsWith("breed")) return "linear-gradient(135deg, #C8A882 0%, #B8956A 40%, #A88254 100%)";
  if (id.startsWith("product") || id.startsWith("best")) return "linear-gradient(135deg, #F0EEEB 0%, #E8D5C4 50%, #D4C5A9 100%)";
  if (id.startsWith("category")) return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
  if (id.startsWith("blog")) return "linear-gradient(135deg, #5B7B5E44 0%, #D4C5A9 40%, #FAF8F5 100%)";
  if (id.startsWith("gift")) return "linear-gradient(135deg, #C4704B22 0%, #F0C75E33 50%, #E8D5C4 100%)";
  return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
}

const pawPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='38' rx='8' ry='10' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='20' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='40' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='16' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='44' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3C/svg%3E")`;

interface Props {
  id: string;
  alt: string;
  aspect?: "square" | "landscape" | "portrait" | "wide" | "hero";
  className?: string;
  priority?: boolean;
}

export default function ImagePlaceholder({ id, alt, aspect = "landscape", className = "", priority = false }: Props) {
  const real = realImages[id];
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[3/2]",
  }[aspect];

  // Real image available
  if (real) {
    return (
      <div
        data-image-id={id}
        className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      >
        <img
          src={real.src}
          alt={real.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Gradient placeholder fallback
  const gradient = getGradient(id);
  return (
    <div
      data-image-id={id}
      className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      style={{ background: gradient }}
      aria-label={alt}
    >
      <div className="absolute inset-0" style={{ backgroundImage: pawPattern, backgroundSize: '60px 60px' }} />
    </div>
  );
}
