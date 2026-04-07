import Link from "next/link";
import { giftGuides } from "@/data/gifts";
import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Dog Gift Guides — Handpicked for Dog People | BabyMyDog",
  description: "Curated gift guides for dog lovers, new puppy parents, dog moms, dog dads, and holiday gifting. 8 picks per guide.",
  alternates: { canonical: "https://babymydog.com/gifts" },
};

const guideImages: Record<string, string> = {
  "dog-lovers": "/images/happy-dog-owner-hugging-golden-retriever.jpg",
  "new-puppy": "/images/golden-retriever-puppies-in-red-wagon.jpg",
  "dog-mom": "/images/woman-kissing-golden-retriever-outdoors.jpg",
  "dog-dad": "/images/happy-dog-owner-hugging-golden-retriever.jpg",
  "dog-christmas": "/images/dog-with-christmas-plush-toy-holiday.jpg",
};

export default function GiftsPage() {
  const top = giftGuides.slice(0, 2);
  const bottom = giftGuides.slice(2);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Gift Guides for Dog People</h1>
          <p className="text-[#1A1A1A]/50 text-lg max-w-2xl">Handpicked gift ideas for every dog lover in your life &mdash; from new puppy parents to the dog dad who has everything.</p>
        </div>

        {/* Top Row — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {top.map(g => (
            <Link
              key={g.slug}
              href={`/gifts/${g.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={guideImages[g.slug]} alt={g.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-[#1A1A1A] text-xl group-hover:text-[#C4704B] transition">&#127873; {g.title}</h2>
                <p className="text-[#1A1A1A]/40 text-sm mt-1">{g.gifts.length} curated picks</p>
                <p className="text-[#C4704B] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                  Shop Guide <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottom.map(g => (
            <Link
              key={g.slug}
              href={`/gifts/${g.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={guideImages[g.slug]} alt={g.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#C4704B] transition">&#127873; {g.title}</h2>
                <p className="text-[#1A1A1A]/40 text-sm mt-1">{g.gifts.length} curated picks</p>
                <p className="text-[#C4704B] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                  Shop Guide <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
