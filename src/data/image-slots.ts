export interface ImageSlot {
  id: string;
  location: string;
  dimensions: string;
  alt: string;
}

export const imageSlots: ImageSlot[] = [
  // Homepage
  { id: "hero-1", location: "Homepage hero", dimensions: "1200x800", alt: "Happy dog in a sunlit room" },
  { id: "hero-2", location: "Homepage hero alt", dimensions: "1200x800", alt: "Dog owner and puppy on couch" },
  { id: "category-beds", location: "Homepage category card", dimensions: "600x400", alt: "Cozy dog bed" },
  { id: "category-food", location: "Homepage category card", dimensions: "600x400", alt: "Premium dog food bowl" },
  { id: "category-toys", location: "Homepage category card", dimensions: "600x400", alt: "Dog playing with toy" },
  { id: "category-grooming", location: "Homepage category card", dimensions: "600x400", alt: "Dog being groomed" },
  { id: "category-gear", location: "Homepage category card", dimensions: "600x400", alt: "Dog wearing harness" },
  { id: "category-gifts", location: "Homepage category card", dimensions: "600x400", alt: "Wrapped dog gifts" },
  { id: "breed-featured-1", location: "Homepage breed spotlight", dimensions: "800x600", alt: "Golden Retriever portrait" },
  { id: "lifestyle-1", location: "Homepage lifestyle", dimensions: "1200x600", alt: "Dog at the park" },
  { id: "lifestyle-2", location: "Homepage lifestyle", dimensions: "1200x600", alt: "Dog on a hike" },
  // Breed avatars
  ...["golden-retriever","labrador-retriever","french-bulldog","german-shepherd","poodle","bulldog","beagle","rottweiler"].map(b => ({
    id: `breed-avatar-${b}`, location: "Homepage breed grid", dimensions: "400x400", alt: `${b.replace(/-/g,' ')} portrait`,
  })),
  // Breed heroes (top 10)
  ...["golden-retriever","labrador-retriever","french-bulldog","german-shepherd","poodle","bulldog","beagle","rottweiler","dachshund","corgi"].map(b => ({
    id: `breed-${b}-hero`, location: "Breed page hero", dimensions: "1200x500", alt: `${b.replace(/-/g,' ')} hero photo`,
  })),
  // Breed products
  ...["golden-retriever","labrador-retriever","french-bulldog","german-shepherd","poodle"].flatMap(b => [1,2,3].map(n => ({
    id: `breed-${b}-product-${n}`, location: "Breed page sidebar product", dimensions: "400x300", alt: `Product for ${b.replace(/-/g,' ')}`,
  }))),
  // Product pages
  ...["beds","food","toys","treats","grooming","crates","harnesses","leashes","bowls","supplements","cameras","gps","dental","coats","puppy"].flatMap(c => [
    { id: `product-${c}-best-overall`, location: `${c} page top pick`, dimensions: "600x400", alt: `Best overall ${c} product` },
    { id: `product-${c}-best-budget`, location: `${c} page top pick`, dimensions: "600x400", alt: `Best budget ${c} product` },
    { id: `product-${c}-best-premium`, location: `${c} page top pick`, dimensions: "600x400", alt: `Best premium ${c} product` },
    ...([1,2,3,4,5].map(n => ({ id: `product-${c}-${n}`, location: `${c} page review`, dimensions: "600x400", alt: `${c} product ${n}` }))),
  ]),
  // Gift guides
  ...[1,2,3,4,5,6,7,8].map(n => ({ id: `gift-${n}`, location: "Gift guide item", dimensions: "400x400", alt: `Gift idea ${n}` })),
  // Blog posts
  ...[1,2,3,4,5].map(n => ({ id: `blog-${n}`, location: "Blog post hero", dimensions: "1200x600", alt: `Blog post ${n} hero image` })),
];
