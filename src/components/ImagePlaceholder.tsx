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
  "category-toys": { src: "/images/pug-cuddling-pink-unicorn-plush-toy.jpg", alt: "Adorable pug cuddling a plush unicorn toy - best dog toys reviewed" },
  "category-food": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Excited husky being fed from dog bowl - best dog food reviews" },
  "category-gear": { src: "/images/french-bulldog-and-friend-in-designer-outfits.jpg", alt: "Stylish dogs in designer outfits - best dog gear and accessories" },
  "category-gifts": { src: "/images/small-fluffy-dog-in-banana-pajamas.jpg", alt: "Cute dog in banana pajamas - perfect gift for pampered pups" },
  "category-grooming": { src: "/images/french-bulldog-wearing-cute-shirt.jpg", alt: "Well-groomed French Bulldog in a cute shirt - best dog grooming tools" },
  // Homepage breed spotlight
  "breed-featured-1": { src: "/images/golden-retriever-holding-flower-outdoors.jpg", alt: "Golden Retriever holding a flower - America's favorite family dog" },
  // Blog posts
  "blog-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "German Shepherd catching kibble in mid-air - how to choose the right dog food" },
  "blog-2": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Signs your dog needs a better bed - pug in comfortable dog bed" },
  "blog-3": { src: "/images/two-happy-dogs-goldendoodle-and-black-lab.jpg", alt: "Two happy dogs ready for adventure - new puppy essentials checklist" },
  "blog-4": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Dog grooming at home - golden retriever after grooming session" },
  "blog-5": { src: "/images/yorkie-running-with-kong-ball-outdoors.jpg", alt: "Indestructible dog toys for heavy chewers - yorkie with Kong ball" },
  // Product pages - dog beds
  "best-dog-beds-top-0": { src: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Best dog beds 2026 expert reviewed" },
  "best-dog-beds-review-0": { src: "/images/dachshund-in-cozy-blue-dog-bed.jpg", alt: "Dachshund in a cozy blue dog bed - top rated" },
  "best-dog-beds-review-1": { src: "/images/pug-snuggled-in-patterned-dog-bed.jpg", alt: "Pug snuggled in patterned dog bed" },
  "best-dog-beds-review-2": { src: "/images/puppy-sleeping-peacefully-on-round-bed.jpg", alt: "Puppy sleeping on round dog bed" },
  "best-dog-beds-review-3": { src: "/images/hound-dog-resting-on-bed-in-doorway.jpg", alt: "Hound dog resting on bed in doorway" },
  // Product pages - dog toys
  "best-dog-toys-top-0": { src: "/images/pug-cuddling-pink-unicorn-plush-toy.jpg", alt: "Best dog toys 2026 - pug with plush toy" },
  "best-dog-toys-review-0": { src: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Golden retriever with stuffed toy" },
  "best-dog-toys-review-1": { src: "/images/yorkie-running-with-kong-ball-outdoors.jpg", alt: "Yorkie running with Kong ball" },
  // Product pages - dog food
  "best-dog-food-top-0": { src: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Best dog food 2026 - husky at feeding time" },
  "best-dog-food-review-0": { src: "/images/chocolate-lab-licking-lips-hungry.jpg", alt: "Chocolate lab ready for dinner" },
  "best-dog-food-review-1": { src: "/images/german-shepherd-catching-kibble-midair.jpg", alt: "German Shepherd catching kibble" },
  // Product pages - dog grooming
  "best-dog-grooming-top-0": { src: "/images/french-bulldog-wearing-cute-shirt.jpg", alt: "Best dog grooming tools 2026" },
  // Product pages - dog harnesses
  "best-dog-harnesses-top-0": { src: "/images/french-bulldog-and-friend-in-designer-outfits.jpg", alt: "Best dog harnesses 2026" },
  "best-dog-harnesses-review-0": { src: "/images/couple-petting-dog-wearing-harness.jpg", alt: "Dog wearing a comfortable harness" },
  // Newsletter / about
  "newsletter": { src: "/images/woman-kissing-golden-retriever-outdoors.jpg", alt: "Woman kissing her golden retriever - join the BabyMyDog community" },
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
