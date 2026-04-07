import Link from "next/link";
import BrandName from "@/components/BrandName";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Blog — Dog Care Tips & Product Reviews | BabyMyDog",
  description: "Expert tips, product reviews, and breed guides from a retired AKC breeder and dog lover.",
  alternates: { canonical: "https://babymydog.com/blog" },
};

const postImages: Record<string, string> = {
  "english-bulldog-care-guide": "/images/english-bulldog-laying-down-resting.jpg",
  "how-to-choose-dog-breeder": "/images/vet-examining-english-bulldog-ear.jpg",
  "choose-right-dog-food": "/images/border-collie-looking-at-food-bowl-kibble.jpg",
  "signs-dog-needs-better-bed": "/images/pug-snuggled-in-patterned-dog-bed.jpg",
  "new-puppy-checklist": "/images/golden-retriever-puppies-in-a-row.jpg",
  "dog-grooming-at-home": "/images/white-dog-getting-groomed-with-scissors.jpg",
  "indestructible-dog-toys": "/images/golden-retriever-with-stuffed-toy-grass.jpg",
  "best-dog-food-for-puppies": "/images/golden-retriever-puppies-in-red-wagon.jpg",
  "best-dog-harness-for-dogs-that-pull": "/images/goldendoodle-wearing-red-harness-and-leash.jpg",
  "how-often-should-i-bathe-my-dog": "/images/poodle-professional-grooming-salon.jpg",
  "best-dog-beds-for-large-breeds": "/images/dog-relaxing-premium-gray-bed-with-plants.jpg",
  "best-gps-tracker-for-dogs": "/images/woman-hiking-with-dog-ocean-cliffs.jpg",
  "dog-joint-supplements-do-they-work": "/images/english-bulldog-at-vet-checkup.jpg",
  "best-dog-crate-for-puppy-training": "/images/boston-terrier-puppy-blue-eyes-close-up.jpg",
  "best-dog-food-for-sensitive-stomach": "/images/chocolate-lab-licking-lips-hungry.jpg",
  "winter-dog-care-tips": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "how-to-stop-dog-from-pulling-on-leash": "/images/english-springer-spaniel-holding-leash-field.jpg",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">The <BrandName /> Blog</h1>
          <p className="text-[#1A1A1A]/50 text-lg max-w-2xl">Expert tips, product reviews, and breed guides from a retired AKC breeder and dog lover.</p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden mb-10 hover:scale-[1.01] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
              <img src={postImages[featured.slug]} alt={featured.title} loading="eager" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-2.5 py-0.5 rounded-full">{featured.category}</span>
                <span className="text-[#1A1A1A]/30 text-xs">{featured.date} &middot; {featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] group-hover:text-[#C4704B] transition leading-tight">{featured.title}</h2>
              <p className="text-[#1A1A1A]/50 mt-3 leading-relaxed line-clamp-3">{featured.description}</p>
              <p className="text-[#C4704B] text-sm font-semibold mt-4 inline-flex items-center gap-1">
                Read More <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </p>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {postImages[p.slug] && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={postImages[p.slug]} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-2.5 py-0.5 rounded-full">{p.category}</span>
                  <span className="text-[#1A1A1A]/30 text-xs">{p.date}</span>
                </div>
                <h2 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#C4704B] transition leading-snug">{p.title}</h2>
                <p className="text-[#1A1A1A]/50 text-sm mt-2 line-clamp-2">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
