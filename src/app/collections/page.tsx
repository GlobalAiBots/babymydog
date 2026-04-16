import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Collections — Themed Product Picks for Dogs | BabyMyDog",
  description: "Shop curated product collections for every occasion: summer essentials, new puppy kits, senior dog comfort, birthday parties, and road trip gear.",
  alternates: { canonical: "https://babymydog.com/collections" },
};

const collections = [
  { slug: "summer-essentials", title: "Summer Essentials", desc: "Cooling mats, paw protection, and hydration gear to beat the heat.", icon: "☀️", color: "#F59E0B" },
  { slug: "new-puppy", title: "New Puppy Starter Kit", desc: "Everything you need for your first week with a new puppy.", icon: "🐶", color: "#D35400" },
  { slug: "senior-dog", title: "Senior Dog Comfort", desc: "Orthopedic beds, joint supplements, and gentle toys for aging pups.", icon: "🤍", color: "#5B7B5E" },
  { slug: "dog-birthday", title: "Dog Birthday Party", desc: "Treats, toys, cake mixes, and celebration gear.", icon: "🎂", color: "#E11D48" },
  { slug: "road-trip", title: "Road Trip Ready", desc: "Car seats, travel bowls, calming chews, and safety gear.", icon: "🚗", color: "#3B82F6" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
          { "@type": "ListItem", position: 2, name: "Collections", item: "https://babymydog.com/collections" },
        ],
      }) }} />
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#2D2006] mb-4 leading-tight">Curated Collections</h1>
        <p className="text-[#8B7355] text-lg mb-12 max-w-2xl">Themed product picks for every stage, season, and occasion in your dog&apos;s life.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="p-8 text-center">
                <span className="text-5xl block mb-4">{c.icon}</span>
                <h2 className="text-xl font-bold text-[#2D2006] group-hover:text-[#D35400] transition mb-2">{c.title}</h2>
                <p className="text-[#8B7355] text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-block text-white font-bold text-sm px-5 py-2 rounded-xl" style={{ background: `linear-gradient(135deg, ${c.color}88, ${c.color})` }}>Shop Collection &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/quiz" className="inline-block text-[#D35400] font-bold hover:underline">Not sure what to get? Take the Quiz &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
