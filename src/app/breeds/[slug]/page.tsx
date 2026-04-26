import React from "react";
import BrandName from "@/components/BrandName";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breeds, getBreedBySlug } from "@/data/breeds";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

interface TraitGroup {
  products: { label: string; category: string; icon: string }[];
  healthNote: string;
}

const BREED_TRAIT_MAP: Record<string, TraitGroup> = {
  brachycephalic: {
    products: [
      { label: "Cooling mats — flat-faced breeds overheat easily", category: "/products/dog-cooling", icon: "❄️" },
      { label: "Harnesses — safer than collars for short-nosed breeds", category: "/products/dog-harnesses", icon: "🦺" },
      { label: "Grooming wipes — for cleaning skin folds daily", category: "/products/dog-grooming", icon: "🧴" },
      { label: "Slow feeder bowls — prevents eating too fast", category: "/products/dog-bowls", icon: "🥣" },
    ],
    healthNote: "Brachycephalic breeds are prone to breathing difficulties, joint issues, and skin fold infections. Temperature regulation is critical — avoid exercise in hot weather and always have water available.",
  },
  large_active: {
    products: [
      { label: "Heavy-duty chew toys — built for powerful jaws", category: "/products/toys-for-heavy-chewers", icon: "🦴" },
      { label: "Joint supplements — protect hips and knees early", category: "/products/dog-supplements", icon: "💊" },
      { label: "XL orthopedic beds — proper support for big dogs", category: "/products/large-dog-products", icon: "🛏️" },
      { label: "Fetch toys — burn off that high energy", category: "/products/toys-for-fetch", icon: "🎾" },
    ],
    healthNote: "Large active breeds need joint protection starting early in life. Heavy chewing is normal — redirect to appropriate toys rather than trying to stop it.",
  },
  small_breed: {
    products: [
      { label: "Small dental chews — sized for tiny mouths", category: "/products/dental-care", icon: "🦷" },
      { label: "Cozy beds — small dogs love to burrow", category: "/products/small-dog-products", icon: "🛏️" },
      { label: "Harnesses — protects fragile tracheas", category: "/products/dog-harnesses", icon: "🦺" },
      { label: "Training treats — small, low-calorie bites", category: "/products/dog-treats", icon: "🦴" },
    ],
    healthNote: "Small breeds are prone to dental disease, luxating patella, and tracheal collapse. Always use a harness instead of a collar to protect the neck and trachea.",
  },
  double_coat: {
    products: [
      { label: "De-shedding brushes — manage that undercoat", category: "/products/dog-grooming", icon: "🪮" },
      { label: "Deshedding shampoo — reduce loose fur", category: "/products/dog-grooming", icon: "🧴" },
      { label: "Cooling products — double coats trap heat", category: "/products/dog-coats", icon: "❄️" },
      { label: "Heavy-duty vacuum — you'll need one", category: "/products/dog-grooming", icon: "🧹" },
    ],
    healthNote: "Double-coated breeds shed heavily twice a year (\"blowing coat\"). Regular brushing 2-3x per week prevents matting. Never shave a double coat — it damages the fur and removes insulation.",
  },
  senior_prone: {
    products: [
      { label: "Joint supplements with glucosamine & chondroitin", category: "/products/senior-dog-products", icon: "💊" },
      { label: "Orthopedic memory foam beds", category: "/products/senior-dog-products", icon: "🛏️" },
      { label: "Soft toys — gentle on aging teeth", category: "/products/dog-toys", icon: "🧸" },
      { label: "Dog ramps — easy on joints for cars & furniture", category: "/products/senior-dog-products", icon: "📐" },
    ],
    healthNote: "As dogs age, joint support becomes critical. Start supplements before symptoms appear. Softer toys and ramps reduce strain on aging bodies.",
  },
};

const BREED_TRAITS: Record<string, string[]> = {
  "french-bulldog": ["brachycephalic", "small_breed"],
  "bulldog": ["brachycephalic", "senior_prone"],
  "pug": ["brachycephalic", "small_breed"],
  "boston-terrier": ["brachycephalic", "small_breed"],
  "shih-tzu": ["brachycephalic", "small_breed"],
  "cavalier-king-charles-spaniel": ["small_breed", "senior_prone"],
  "golden-retriever": ["large_active", "double_coat"],
  "labrador-retriever": ["large_active", "double_coat"],
  "german-shepherd": ["large_active", "double_coat"],
  "siberian-husky": ["large_active", "double_coat"],
  "australian-shepherd": ["large_active", "double_coat"],
  "border-collie": ["large_active", "double_coat"],
  "bernese-mountain-dog": ["large_active", "double_coat", "senior_prone"],
  "samoyed": ["large_active", "double_coat"],
  "alaskan-malamute": ["large_active", "double_coat"],
  "rottweiler": ["large_active", "senior_prone"],
  "great-dane": ["large_active", "senior_prone"],
  "cane-corso": ["large_active", "senior_prone"],
  "newfoundland": ["large_active", "double_coat", "senior_prone"],
  "rhodesian-ridgeback": ["large_active"],
  "belgian-malinois": ["large_active"],
  "doberman-pinscher": ["large_active"],
  "boxer": ["large_active", "brachycephalic"],
  "weimaraner": ["large_active"],
  "akita": ["large_active", "double_coat"],
  "irish-setter": ["large_active"],
  "dalmatian": ["large_active"],
  "pit-bull-terrier": ["large_active"],
  "australian-cattle-dog": ["large_active"],
  "vizsla": ["large_active"],
  "german-shorthaired-pointer": ["large_active"],
  "english-springer-spaniel": ["large_active", "double_coat"],
  "brittany": ["large_active"],
  "yorkshire-terrier": ["small_breed"],
  "pomeranian": ["small_breed", "double_coat"],
  "havanese": ["small_breed"],
  "maltese": ["small_breed"],
  "chihuahua": ["small_breed"],
  "bichon-frise": ["small_breed"],
  "west-highland-white-terrier": ["small_breed"],
  "miniature-schnauzer": ["small_breed"],
  "dachshund": ["small_breed", "senior_prone"],
  "pembroke-welsh-corgi": ["double_coat", "senior_prone"],
  "shetland-sheepdog": ["double_coat", "small_breed"],
  "cocker-spaniel": ["double_coat"],
  "poodle": [],
  "goldendoodle": [],
  "labradoodle": [],
  "basset-hound": ["senior_prone"],
  "beagle": [],
};

export function generateStaticParams() { return breeds.map(b => ({ slug: b.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const breed = getBreedBySlug(slug);
  if (!breed) return { title: "Not Found" };
  return {
    title: `${breed.name} — Care Guide, Products & Tips | BabyMyDog`,
    description: `Complete ${breed.name} guide: care tips, health info, and the best products for your ${breed.name}.`,
    openGraph: { title: `${breed.name} Guide — BabyMyDog`, url: `https://www.babymydog.com/breeds/${breed.slug}` },
    alternates: { canonical: `https://www.babymydog.com/breeds/${breed.slug}` },
  };
}

function getProductInfo(rec: string): { image: string; link: string; label: string } {
  const r = rec.toLowerCase();
  if (r.includes("bed")) return { image: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", link: "/products/dog-beds", label: "Dog Beds" };
  if (r.includes("food") || r.includes("kibble")) return { image: "/images/border-collie-looking-at-food-bowl-kibble.jpg", link: "/products/dog-food", label: "Dog Food" };
  if (r.includes("toy") || r.includes("fetch") || r.includes("chew") || r.includes("puzzle")) return { image: "/images/golden-retriever-holding-stuffed-toy.jpg", link: "/products/dog-toys", label: "Dog Toys" };
  if (r.includes("brush") || r.includes("groom") || r.includes("deshed")) return { image: "/images/poodle-professional-grooming-salon.jpg", link: "/products/dog-grooming", label: "Grooming Tools" };
  if (r.includes("harness")) return { image: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", link: "/products/dog-harnesses", label: "Dog Harnesses" };
  if (r.includes("leash") || r.includes("collar")) return { image: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", link: "/products/dog-leashes", label: "Dog Leashes" };
  if (r.includes("crate") || r.includes("kennel")) return { image: "/images/hound-dog-resting-on-bed-in-doorway.jpg", link: "/products/dog-crates", label: "Dog Crates" };
  if (r.includes("supplement") || r.includes("joint") || r.includes("vitamin")) return { image: "/images/english-bulldog-at-vet-checkup.jpg", link: "/products/dog-supplements", label: "Supplements" };
  if (r.includes("coat") || r.includes("jacket") || r.includes("cooling") || r.includes("vest") || r.includes("winter")) return { image: "/images/poodle-wearing-red-coat-boots-snow.jpg", link: "/products/dog-coats", label: "Dog Coats" };
  if (r.includes("shampoo")) return { image: "/images/white-dog-getting-groomed-with-scissors.jpg", link: "/products/dog-grooming", label: "Dog Shampoo" };
  if (r.includes("treat")) return { image: "/images/chocolate-lab-licking-lips-hungry.jpg", link: "/products/dog-treats", label: "Dog Treats" };
  if (r.includes("dental")) return { image: "/images/vet-examining-english-bulldog-ear.jpg", link: "/products/dog-dental", label: "Dental Care" };
  if (r.includes("camera") || r.includes("monitor")) return { image: "/images/happy-dog-owner-hugging-golden-retriever.jpg", link: "/products/dog-cameras", label: "Dog Cameras" };
  if (r.includes("tracker") || r.includes("gps")) return { image: "/images/woman-hiking-with-dog-ocean-cliffs.jpg", link: "/products/dog-gps-trackers", label: "GPS Trackers" };
  if (r.includes("bowl") || r.includes("feeder")) return { image: "/images/excited-husky-getting-fed-dog-bowl.jpg", link: "/products/dog-bowls", label: "Bowls & Feeders" };
  if (r.includes("nail") || r.includes("ear")) return { image: "/images/poodle-professional-grooming-salon.jpg", link: "/products/dog-grooming", label: "Grooming Tools" };
  return { image: "/images/golden-retriever-with-stuffed-toy-grass.jpg", link: "/products", label: "Dog Products" };
}

function getCareIcon(tip: string): string {
  const t = tip.toLowerCase();
  if (t.includes("brush") || t.includes("coat") || t.includes("groom") || t.includes("shed")) return "\uD83E\uDEB6";
  if (t.includes("exercise") || t.includes("walk") || t.includes("run") || t.includes("swim") || t.includes("active")) return "\uD83C\uDFC3";
  if (t.includes("ear") || t.includes("clean") || t.includes("wrinkle")) return "\uD83D\uDC42";
  if (t.includes("food") || t.includes("feed") || t.includes("diet") || t.includes("weight") || t.includes("meal")) return "\uD83C\uDF56";
  if (t.includes("train") || t.includes("social") || t.includes("obedien")) return "\uD83C\uDF93";
  if (t.includes("vet") || t.includes("dental") || t.includes("teeth") || t.includes("health")) return "\uD83C\uDFE5";
  return "\u2713";
}

function getInternalLinks(breed: { name: string; size: string; groomingNeeds: string; exerciseNeeds: string; healthIssues: string[] }): React.ReactNode {
  const links: React.ReactNode[] = [];
  if (breed.groomingNeeds === "high") {
    links.push(<span key="groom">our <Link href="/products/dog-grooming" className="text-[#C4704B] hover:underline">top grooming tools</Link></span>);
  }
  if (breed.size === "large" || breed.size === "giant") {
    links.push(<span key="bed">our <Link href="/products/dog-beds" className="text-[#C4704B] hover:underline">best beds for large breeds</Link></span>);
  }
  if (breed.exerciseNeeds === "high") {
    links.push(<span key="toy">our <Link href="/products/dog-toys" className="text-[#C4704B] hover:underline">favorite toys for active dogs</Link></span>);
  }
  if (breed.healthIssues.some(h => h.toLowerCase().includes("hip") || h.toLowerCase().includes("dysplasia"))) {
    links.push(<span key="supp">our <Link href="/products/dog-supplements" className="text-[#C4704B] hover:underline">recommended joint supplements</Link></span>);
  }
  if (links.length === 0) {
    links.push(<span key="all">our <Link href="/products" className="text-[#C4704B] hover:underline">expert-reviewed product picks</Link></span>);
  }
  const display = links.slice(0, 2);
  return (
    <p className="text-[#1A1A1A]/50 leading-relaxed text-sm mt-6 italic">
      Looking for the best products for your {breed.name}? Check out {display[0]}{display[1] ? <> and {display[1]}</> : null}.
    </p>
  );
}

export default async function BreedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const breed = getBreedBySlug(slug);
  if (!breed) notFound();

  const relatedBreeds = breeds.filter(b => b.group === breed.group && b.slug !== breed.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${breed.name} — Care Guide, Products & Tips`,
    "description": breed.description,
    "author": { "@type": "Organization", "name": "BabyMyDog" },
    "publisher": { "@type": "Organization", "name": "BabyMyDog", "url": "https://www.babymydog.com" },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-06",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.babymydog.com" },
          { "@type": "ListItem", "position": 2, "name": "Breeds", "item": "https://www.babymydog.com/breeds" },
          { "@type": "ListItem", "position": 3, "name": breed.name, "item": `https://www.babymydog.com/breeds/${breed.slug}` },
        ],
      }) }} />

      {/* Full-width Hero */}
      <div className="relative w-full">
        <ImagePlaceholder id={`breed-${breed.slug}-hero`} alt={`${breed.name} hero photo`} aspect="wide" className="rounded-none w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[1200px] mx-auto px-6 pb-10">
            <nav className="text-sm text-white/70 mb-4 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-white transition">Home</Link><span>/</span>
              <Link href="/breeds" className="hover:text-white transition">Breeds</Link><span>/</span>
              <span className="text-white font-medium">{breed.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{breed.name}</h1>
            <p className="text-white/80 mt-3 text-lg">{breed.temperament.join(" · ")}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-[#F0EEEB]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          {[
            { label: "Size", value: breed.size },
            { label: "Weight", value: breed.weightRange },
            { label: "Life Span", value: breed.lifeSpan },
            { label: "Energy", value: breed.exerciseNeeds },
            { label: "Shedding", value: breed.shedding },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && <div className="hidden md:block w-px h-8 bg-[#F0EEEB]" />}
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-[#1A1A1A]/40 mb-1">{s.label}</p>
                <p className="font-semibold text-[#1A1A1A] capitalize">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Column — 65% */}
          <div className="lg:w-[65%] space-y-12">

            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">About the {breed.name}</h2>
              <p className="text-[#1A1A1A]/70 leading-relaxed text-lg">{breed.description}</p>
              {getInternalLinks(breed)}
            </section>

            {/* Care Guide */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">Care Guide</h2>
              <div className="space-y-3">
                {breed.careTips.map((tip, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <span className="w-8 h-8 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-lg mt-0.5">{getCareIcon(tip)}</span>
                    <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Health Watch */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">Health Watch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {breed.healthIssues.map((issue, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <span className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500 text-sm">&#9888;</span>
                    <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">{issue}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#1A1A1A]/40 text-xs mt-4 italic">
                Always consult your veterinarian for breed-specific health screenings.
                <Link href="/blog/how-to-choose-dog-breeder" className="text-[#C4704B] hover:underline ml-1">
                  Learn about choosing a reputable breeder &rarr;
                </Link>
              </p>
            </section>

            {/* What Owners Should Know — breed trait products */}
            {(() => {
              const traits = BREED_TRAITS[breed.slug] || [];
              if (traits.length === 0) return null;
              const primaryTrait = BREED_TRAIT_MAP[traits[0]];
              if (!primaryTrait) return null;
              const allProducts = traits.flatMap(t => BREED_TRAIT_MAP[t]?.products || []);
              const seen = new Set<string>();
              const uniqueProducts = allProducts.filter(p => { if (seen.has(p.category)) return false; seen.add(p.category); return true; }).slice(0, 4);
              return (
                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">What {breed.name} Owners Should Know</h2>
                  <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">{primaryTrait.healthNote}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {uniqueProducts.map((p, i) => (
                      <Link key={i} href={p.category} className="group bg-white rounded-2xl p-4 flex items-start gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                        <div>
                          <p className="text-[#1A1A1A] text-sm font-semibold group-hover:text-[#D35400] transition">{p.label}</p>
                          <span className="text-[#D35400] text-xs font-bold mt-1 inline-block">Shop &rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* Health Concerns → Product Links */}
            {breed.healthIssues.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">Health Concerns &amp; What Helps</h2>
                <div className="space-y-3">
                  {breed.healthIssues.slice(0, 4).map((issue, i) => {
                    const il = issue.toLowerCase();
                    let product = { label: "Browse all products", href: "/products" };
                    if (il.includes("hip") || il.includes("dysplasia") || il.includes("joint") || il.includes("elbow")) product = { label: "Joint Supplements", href: "/products/dog-supplements" };
                    else if (il.includes("dental") || il.includes("teeth")) product = { label: "Dental Care Products", href: "/products/dental-care" };
                    else if (il.includes("obesity") || il.includes("weight")) product = { label: "Slow Feeder Bowls", href: "/products/dog-bowls" };
                    else if (il.includes("eye") || il.includes("skin") || il.includes("allerg")) product = { label: "Grooming & Cleanup", href: "/products/dog-grooming" };
                    else if (il.includes("bloat") || il.includes("gastric")) product = { label: "Slow Feeder Bowls", href: "/products/dog-bowls" };
                    else if (il.includes("back") || il.includes("ivdd") || il.includes("spinal")) product = { label: "Dog Ramps & Support", href: "/products/senior-dog-products" };
                    else if (il.includes("heart") || il.includes("cancer")) product = { label: "Health Supplements", href: "/products/dog-supplements" };
                    else if (il.includes("anxiety") || il.includes("separat")) product = { label: "Calming Products", href: "/products/anxious-dogs" };
                    else if (il.includes("trachea") || il.includes("collar")) product = { label: "No-Pull Harnesses", href: "/products/dog-harnesses" };
                    return (
                      <div key={i} className="bg-white rounded-2xl p-5 flex items-center justify-between gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500 text-sm">&#9888;</span>
                          <span className="text-[#1A1A1A]/70 text-sm font-medium">{issue}</span>
                        </div>
                        <Link href={product.href} className="text-[#D35400] text-xs font-bold whitespace-nowrap hover:underline">{product.label} &rarr;</Link>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Column — 35% Sticky Sidebar */}
          <aside className="lg:w-[35%]">
            <div className="lg:sticky lg:top-20 space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Recommended for Your {breed.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {breed.recommendedProducts.map((rec, i) => {
                  const info = getProductInfo(rec);
                  return (
                    <Link key={i} href={info.link} className="group block bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={info.image} alt={info.label} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-[#1A1A1A] text-sm">{info.label}</p>
                        <span className="text-[#C4704B] text-xs font-semibold mt-1 inline-flex items-center gap-1">
                          See Our Picks <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">&rarr;</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Recommended Products for Your {breed.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(() => {
            const recs: { slug: string; label: string; desc: string; icon: string }[] = [];
            // Size-based recommendations
            if (breed.size === "large" || breed.size === "giant") {
              recs.push({ slug: "dog-beds", label: "Large Breed Beds", desc: "Orthopedic support for big dogs", icon: "\uD83D\uDECF" });
              recs.push({ slug: "dog-crates", label: "XL Dog Crates", desc: "Spacious crates for large breeds", icon: "\uD83C\uDFE0" });
            } else {
              recs.push({ slug: "dog-beds", label: "Cozy Dog Beds", desc: "Perfect-sized beds for smaller pups", icon: "\uD83D\uDECF" });
              recs.push({ slug: "dog-coats", label: "Dog Coats & Jackets", desc: "Keep your pup warm in winter", icon: "\uD83E\uDDE5" });
            }
            // Exercise-based
            if (breed.exerciseNeeds === "high") {
              recs.push({ slug: "dog-toys", label: "Active Dog Toys", desc: "Fetch, tug, and puzzle toys for energetic breeds", icon: "\uD83E\uDD8E" });
            } else {
              recs.push({ slug: "dog-toys", label: "Chew Toys", desc: "Keep your pup entertained and happy", icon: "\uD83E\uDD8E" });
            }
            // Grooming-based
            if (breed.groomingNeeds === "high") {
              recs.push({ slug: "dog-grooming", label: "Grooming Tools", desc: "Brushes, combs, and deshedding tools", icon: "\u2702\uFE0F" });
              recs.push({ slug: "dog-shampoo", label: "Dog Shampoo", desc: "Keep that coat clean and shiny", icon: "\uD83D\uDEC1" });
            } else if (breed.shedding === "high") {
              recs.push({ slug: "dog-grooming", label: "Deshedding Tools", desc: "Control shedding with the right brush", icon: "\u2702\uFE0F" });
            }
            // Health-based
            if (breed.healthIssues.some(h => h.toLowerCase().includes("hip") || h.toLowerCase().includes("joint") || h.toLowerCase().includes("dysplasia"))) {
              recs.push({ slug: "dog-supplements", label: "Joint Supplements", desc: "Glucosamine & chondroitin for healthy joints", icon: "\uD83D\uDC8A" });
            }
            // Universal
            recs.push({ slug: "dog-food", label: breed.size === "small" ? "Small Breed Food" : "Premium Dog Food", desc: "Nutrition tailored to your breed", icon: "\uD83C\uDF56" });
            if (breed.size === "small" || breed.healthIssues.some(h => h.toLowerCase().includes("trachea") || h.toLowerCase().includes("back"))) {
              recs.push({ slug: "dog-harnesses", label: "No-Pull Harness", desc: "Safer than collars for this breed", icon: "\uD83E\uDDBA" });
            }
            return recs.slice(0, 6).map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="group bg-white rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <span className="text-3xl block mb-3">{r.icon}</span>
                <h3 className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#C4704B] transition">{r.label}</h3>
                <p className="text-[#1A1A1A]/50 text-xs mt-1">{r.desc}</p>
                <span className="text-[#C4704B] text-xs font-semibold mt-2 inline-block">Shop Now &rarr;</span>
              </Link>
            ));
          })()}
        </div>
      </div>

      {/* Quiz CTA */}
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <Link href="/quiz" className="group block bg-[#C4704B]/5 border-2 border-[#C4704B]/20 hover:border-[#C4704B] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg">
          <span className="text-2xl block mb-2">&#129300;</span>
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Get personalized picks for your {breed.name}</h3>
          <p className="text-[#1A1A1A]/50 text-sm mb-3">Take our 5-question quiz and get product recommendations tailored to your dog.</p>
          <span className="inline-block bg-[#C4704B] text-white font-bold px-5 py-2.5 rounded-full text-sm group-hover:bg-[#b5623f] transition">Take the Quiz &rarr;</span>
        </Link>
      </div>

      {/* Related Breeds */}
      {relatedBreeds.length > 0 && (
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">You Might Also Like</h2>
          <div className="flex gap-8 overflow-x-auto pb-4">
            {relatedBreeds.map((b) => (
              <Link key={b.slug} href={`/breeds/${b.slug}`} className="group flex-shrink-0 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:shadow-xl group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-[#C4704B] transition-all duration-300 mx-auto">
                  <ImagePlaceholder id={`breed-avatar-${b.slug}`} alt={b.name} aspect="square" className="w-full h-full rounded-full" />
                </div>
                <p className="font-semibold text-[#1A1A1A] text-xs mt-3 group-hover:text-[#C4704B] transition-all duration-300">{b.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* BarkSeeker Callout */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#5B7B5E' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='38' rx='8' ry='10' fill='%23fff'/%3E%3Ccircle cx='20' cy='26' r='4' fill='%23fff'/%3E%3Ccircle cx='40' cy='26' r='4' fill='%23fff'/%3E%3Ccircle cx='16' cy='34' r='3.5' fill='%23fff'/%3E%3Ccircle cx='44' cy='34' r='3.5' fill='%23fff'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />
        <div className="relative max-w-[1200px] mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">&#127795;</span>
              <h3 className="text-xl font-bold text-white">Find Dog Parks Near You</h3>
            </div>
            <p className="text-white/80 text-sm max-w-md">Discover off-leash parks, trails, and play areas perfect for your {breed.name}.</p>
          </div>
          <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#5B7B5E] font-bold text-sm px-8 py-3.5 rounded-full hover:shadow-lg transition-all duration-300">
            Explore BarkSeeker &rarr;
          </a>
        </div>
      </div>

      {/* Footer Credit */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 text-center">
        <p className="text-[#1A1A1A]/30 text-xs"><BrandName /> is powered by <strong className="text-[#1A1A1A]/40">CLETUS AI</strong> from <strong className="text-[#1A1A1A]/40">Global AI Bots</strong></p>
      </div>
    </div>
  );
}
