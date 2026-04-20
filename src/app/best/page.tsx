"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { productCategories } from "@/data/products";

/* eslint-disable @next/next/no-img-element */

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
  "dog-dental": "/images/vet-examining-english-bulldog-ear.jpg",
  "dog-coats": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "dog-anxiety": "/images/hound-dog-resting-on-bed-in-doorway.jpg",
  "dog-car-seats": "/images/couple-petting-dog-wearing-harness.jpg",
  "dog-boots": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "dog-raincoats": "/images/french-bulldog-and-friend-in-designer-outfits.jpg",
  "dog-puzzle-toys": "/images/golden-retriever-holding-stuffed-toy.jpg",
  "dog-collars": "/images/couple-petting-dog-wearing-harness.jpg",
  "dog-training": "/images/german-shepherd-sitting-autumn-forest-path.jpg",
};

interface TagMap { [slug: string]: { activity?: string[]; size?: string[]; stage?: string[]; health?: string[] } }
const tags: TagMap = {
  "dog-beds": { activity: ["comfort"], size: ["small", "medium", "large", "xl"] },
  "dog-food": { stage: ["puppy", "adult", "senior"], size: ["small", "medium", "large", "xl"], health: ["weight", "allergies"] },
  "dog-treats": { activity: ["training"], stage: ["puppy", "adult", "senior"], health: ["dental", "weight"] },
  "dog-toys": { activity: ["chewing", "fetch", "tug"], size: ["small", "medium", "large"] },
  "dog-harnesses": { activity: ["training"], size: ["small", "medium", "large", "xl"] },
  "dog-leashes": { activity: ["training"], size: ["small", "medium", "large"] },
  "dog-cameras": { health: ["anxiety"] },
  "dog-dental": { health: ["dental"], stage: ["adult", "senior"] },
  "dog-supplements": { health: ["joint", "allergies"], stage: ["adult", "senior"] },
  "dog-boots": { size: ["small", "medium", "large"] },
  "dog-training": { activity: ["training"], stage: ["puppy", "adult"] },
  "dog-collars": { size: ["small", "medium", "large", "xl"] },
  "dog-coats": { size: ["small", "medium", "large"] },
  "dog-raincoats": { size: ["small", "medium", "large"] },
  "dog-grooming": { health: ["allergies"] },
  "dog-bowls": { size: ["small", "medium", "large", "xl"] },
  "dog-crates": { activity: ["comfort"], size: ["small", "medium", "large", "xl"], stage: ["puppy", "adult"] },
  "dog-anxiety": { health: ["anxiety"] },
  "dog-car-seats": { size: ["small", "medium", "large"] },
  "dog-puzzle-toys": { activity: ["training"], health: ["anxiety"] },
};

const filterGroups = [
  { key: "activity", label: "Activity", options: ["chewing", "fetch", "tug", "training", "comfort"] },
  { key: "size", label: "Dog Size", options: ["small", "medium", "large", "xl"] },
  { key: "stage", label: "Life Stage", options: ["puppy", "adult", "senior"] },
  { key: "health", label: "Health Concern", options: ["joint", "dental", "anxiety", "weight", "allergies"] },
];

const curatedPages = [
  { slug: "toys-for-heavy-chewers", title: "Chew Toys for Destroyers", desc: "For dogs that demolish everything" },
  { slug: "toys-for-fetch", title: "Fetch Toys for Active Dogs", desc: "Balls, frisbees, and launchers" },
  { slug: "puppy-essentials", title: "Puppy Starter Kit", desc: "Everything for a new puppy" },
  { slug: "senior-dog-products", title: "Senior Dog Comfort", desc: "Beds, ramps, and joint care" },
  { slug: "large-dog-products", title: "Large & Giant Breeds", desc: "XL beds, crates, and gear" },
  { slug: "small-dog-products", title: "Small Dog & Toy Breeds", desc: "Sized-down picks for little pups" },
  { slug: "anxious-dogs", title: "Calming & Anxiety Relief", desc: "Thunder shirts, diffusers, and chews" },
  { slug: "dental-care", title: "Dental Care & Hygiene", desc: "Toothpaste, chews, and rinses" },
];

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
        active
          ? "text-white shadow-md"
          : "bg-white text-[#8B7355] border border-[#2D2006]/10 hover:border-[#D35400] hover:text-[#D35400]"
      }`}
      style={active ? { background: "linear-gradient(135deg, #F39C12, #D35400)" } : undefined}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  );
}

export default function BestPage() {
  const [filters, setFilters] = useState<Record<string, Set<string>>>({});

  function toggle(group: string, value: string) {
    setFilters((prev) => {
      const next = { ...prev };
      const s = new Set(prev[group] || []);
      if (s.has(value)) s.delete(value); else s.add(value);
      if (s.size === 0) delete next[group]; else next[group] = s;
      return next;
    });
  }

  const hasFilters = Object.keys(filters).length > 0;

  const filtered = useMemo(() => {
    if (!hasFilters) return productCategories;
    return productCategories.filter((c) => {
      const t = tags[c.slug];
      if (!t) return false;
      for (const [group, selected] of Object.entries(filters)) {
        const catTags = t[group as keyof typeof t];
        if (!catTags) return false;
        if (![...selected].some((v) => catTags.includes(v))) return false;
      }
      return true;
    });
  }, [filters, hasFilters]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="mb-10">
          <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#2D2006] mb-4 leading-tight">Best Dog Products (2026)</h1>
          <p className="text-[#8B7355] text-lg max-w-2xl">Expert-reviewed picks across {productCategories.length} categories — updated monthly.</p>
        </div>

        {/* Curated Collections */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#2D2006] mb-4">Shop by Need</h2>
          <div className="flex gap-3 overflow-x-auto pb-3">
            {curatedPages.map((p) => (
              <Link key={p.slug} href={`/best/${p.slug}`} className="flex-shrink-0 bg-white rounded-xl px-5 py-3 border border-[#2D2006]/8 hover:border-[#D35400] hover:shadow-md transition-all duration-200 group" style={{ minWidth: 160 }}>
                <p className="font-bold text-[#2D2006] text-sm group-hover:text-[#D35400] transition">{p.title}</p>
                <p className="text-[#8B7355] text-xs mt-0.5">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-5 mb-10 border border-[#2D2006]/5" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#2D2006] text-sm">Filter Products</h2>
            {hasFilters && (
              <button onClick={() => setFilters({})} className="text-xs text-[#D35400] font-semibold hover:underline">Clear all</button>
            )}
          </div>
          <div className="space-y-3">
            {filterGroups.map((g) => (
              <div key={g.key} className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-[#8B7355] uppercase tracking-wider w-24 flex-shrink-0">{g.label}</span>
                <div className="flex gap-2 overflow-x-auto">
                  {g.options.map((opt) => (
                    <Chip key={opt} label={opt} active={filters[g.key]?.has(opt) || false} onClick={() => toggle(g.key, opt)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results count */}
        {hasFilters && (
          <p className="text-sm text-[#8B7355] mb-6">Showing {filtered.length} of {productCategories.length} categories</p>
        )}

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((c) => {
            const avgRating = (c.picks.reduce((sum, p) => sum + p.rating, 0) / c.picks.length).toFixed(1);
            const img = categoryImages[c.slug];
            return (
              <Link key={c.slug} href={`/best/${c.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                {img && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={img} alt={c.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-bold text-[#2D2006] text-xl group-hover:text-[#D35400] transition">{c.title}</h2>
                  <p className="text-[#8B7355] text-sm mt-2 leading-relaxed line-clamp-2">{c.description}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-[#8B7355]">
                    <span className="font-semibold">{c.picks.length} expert picks</span>
                    <span className="inline-flex items-center gap-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                      {avgRating}
                    </span>
                  </div>
                  <p className="text-[#D35400] text-sm font-bold mt-3 inline-flex items-center gap-1">
                    See {c.picks.length} Expert Picks <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && hasFilters && (
          <div className="text-center py-16">
            <p className="text-[#8B7355] text-lg mb-4">No categories match your filters.</p>
            <button onClick={() => setFilters({})} className="text-[#D35400] font-bold hover:underline">Clear filters</button>
          </div>
        )}

        {/* Quiz CTA */}
        <div className="mt-16 text-center">
          <Link href="/quiz" className="group inline-block bg-white rounded-2xl p-8 border-2 border-[#D35400]/15 hover:border-[#D35400] hover:shadow-xl transition-all duration-300" style={{ boxShadow: "0 4px 20px rgba(211,84,0,0.08)" }}>
            <span className="text-3xl block mb-2">&#129300;</span>
            <h3 className="text-xl font-bold text-[#2D2006] mb-1">Not sure what to get?</h3>
            <p className="text-[#8B7355] text-sm mb-4">Take our 5-question quiz for personalized picks.</p>
            <span className="inline-block text-white font-bold px-6 py-3 rounded-xl text-sm" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)" }}>Take the Quiz &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
