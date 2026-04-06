import Link from "next/link";
import { giftGuides } from "@/data/gifts";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dog Gift Guides — BabyMyDog", alternates: { canonical: "https://babymydog.com/gifts" } };
export default function GiftsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Gift Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {giftGuides.map(g => (
          <Link key={g.slug} href={`/gifts/${g.slug}`} className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-gold">
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{g.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{g.gifts.length} gift ideas</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
