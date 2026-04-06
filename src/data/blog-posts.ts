export interface BlogPost {
  slug: string; title: string; date: string; readTime: string;
  category: string; description: string; gradient: string;
}

export const blogPosts: BlogPost[] = [
  { slug: "choose-right-dog-food", title: "How to Choose the Right Dog Food for Your Breed", date: "April 6, 2026", readTime: "7 min read", category: "Nutrition", description: "Different breeds have different nutritional needs. Here is how to pick the perfect food.", gradient: "linear-gradient(135deg, #E8637A 0%, #D4506A 100%)" },
  { slug: "signs-dog-needs-better-bed", title: "10 Signs Your Dog Needs a Better Bed", date: "April 4, 2026", readTime: "5 min read", category: "Products", description: "Is your dog sleeping on the floor? These signs mean it is time for an upgrade.", gradient: "linear-gradient(135deg, #4A1942 0%, #6B2D63 100%)" },
  { slug: "new-puppy-checklist", title: "The Ultimate New Puppy Checklist: Everything You Need", date: "April 2, 2026", readTime: "8 min read", category: "Puppies", description: "Bringing home a new puppy? Here is everything you need from day one.", gradient: "linear-gradient(135deg, #F0C75E 0%, #D4AD3C 100%)" },
  { slug: "dog-grooming-at-home", title: "Dog Grooming at Home: Save Money Without Sacrificing Quality", date: "March 30, 2026", readTime: "6 min read", category: "Grooming", description: "Professional grooming tips you can do at home with the right tools.", gradient: "linear-gradient(135deg, #87CEEB 0%, #5DADE2 100%)" },
  { slug: "indestructible-dog-toys", title: "Best Dog Toys That Actually Last: Indestructible Picks for Heavy Chewers", date: "March 28, 2026", readTime: "5 min read", category: "Products", description: "Tired of toys lasting 5 minutes? These actually survive heavy chewers.", gradient: "linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)" },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
