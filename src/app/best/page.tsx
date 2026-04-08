import Link from "next/link";
import { productCategories } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dog Products (2026) — Expert Reviews | BabyMyDog",
  description: "Expert-reviewed dog products across 25 categories. Find the best beds, food, toys, grooming tools, and more for your dog.",
  alternates: { canonical: "https://babymydog.com/best" },
};

const categoryImages: Record<string, string> = {
  "dog-beds": "/images/dog-relaxing-premium-gray-bed-with-plants.jpg",
  "dog-food": "/images/excited-husky-getting-fed-dog-bowl.jpg",
  "dog-toys": "/images/golden-retriever-holding-stuffed-toy.jpg",
  "dog-treats": "/images/chocolate-lab-licking-lips-hungry.jpg",
  "dog-grooming": "/images/poodle-professional-grooming-salon.jpg",
  "dog-crates": "/images/hound-dog-resting-on-bed-in-doorway.jpg",
  "dog-harnesses": "/images/goldendoodle-wearing-red-harness-and-leash.jpg",
  "dog-leashes": "/images/english-springer-spaniel-holding-leash-field.jpg",
  "dog-bowls": "/images/border-collie-looking-at-food-bowl-kibble.jpg",
  "dog-supplements": "/images/english-bulldog-at-vet-checkup.jpg",
  "dog-cameras": "/images/happy-dog-owner-hugging-golden-retriever.jpg",
  "dog-gps-trackers": "/images/woman-hiking-with-dog-ocean-cliffs.jpg",
  "dog-dental": "/images/vet-examining-english-bulldog-ear.jpg",
  "dog-coats": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "puppy-essentials": "/images/golden-retriever-puppies-in-a-row.jpg",
  "dog-anxiety": "/images/hound-dog-resting-on-bed-in-doorway.jpg",
  "dog-car-seats": "/images/couple-petting-dog-wearing-harness.jpg",
  "dog-water-fountains": "/images/excited-husky-getting-fed-dog-bowl.jpg",
  "dog-strollers": "/images/fluffy-pomeranian-walking-in-booties.jpg",
  "dog-backpacks": "/images/woman-hiking-with-dog-ocean-cliffs.jpg",
  "dog-feeders": "/images/border-collie-looking-at-food-bowl-kibble.jpg",
  "dog-boots": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "dog-raincoats": "/images/french-bulldog-and-friend-in-designer-outfits.jpg",
  "dog-cooling": "/images/english-bulldog-outdoors-with-frisbee.jpg",
  "dog-puzzle-toys": "/images/golden-retriever-holding-stuffed-toy.jpg",
};

/* eslint-disable @next/next/no-img-element */

export default function BestPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Best Dog Products (2026)</h1>
          <p className="text-[#1A1A1A]/50 text-lg max-w-2xl">Expert-reviewed picks across {productCategories.length} categories &mdash; updated monthly. Every recommendation links directly to Amazon with our honest assessment.</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productCategories.map(c => {
            const avgRating = (c.picks.reduce((sum, p) => sum + p.rating, 0) / c.picks.length).toFixed(1);
            const img = categoryImages[c.slug];
            return (
              <Link
                key={c.slug}
                href={`/best/${c.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                {img && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={img} alt={c.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#C4704B] transition">{c.title}</h2>
                  <p className="text-[#1A1A1A]/50 text-sm mt-2 leading-relaxed line-clamp-2">{c.description}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-[#1A1A1A]/40">
                    <span className="font-semibold text-[#1A1A1A]/60">{c.picks.length} expert picks</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#1A1A1A]/40">
                    <span className="inline-flex items-center gap-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                      {avgRating} avg rating
                    </span>
                  </div>
                  <p className="text-[#C4704B] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                    See {c.picks.length} Expert Picks <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
