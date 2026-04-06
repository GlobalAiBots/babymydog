"use client";
import { useState } from "react";
import Link from "next/link";
import { breeds, breedSizes } from "@/data/breeds";

export default function BreedsPage() {
  const [sizeFilter, setSizeFilter] = useState<string>("");
  const filtered = sizeFilter ? breeds.filter(b => b.size === sizeFilter) : breeds;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Dog Breeds A-Z</h1>
      <p className="text-gray-500 mb-8">{breeds.length} popular breeds with care guides and product recommendations.</p>
      <div className="flex gap-2 mb-6 flex-wrap">
        <button onClick={() => setSizeFilter("")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${!sizeFilter ? "bg-rose text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-rose"}`}>All</button>
        {breedSizes.map(s => (
          <button key={s} onClick={() => setSizeFilter(s)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition capitalize ${sizeFilter === s ? "bg-rose text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-rose"}`}>{s}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map(b => (
          <Link key={b.slug} href={`/breeds/${b.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl font-bold text-rose" style={{background:'linear-gradient(135deg, #FFF0F3, #E8637A22)'}}>{b.name.charAt(0)}</div>
            <p className="font-bold text-charcoal text-sm group-hover:text-rose transition">{b.name}</p>
            <p className="text-gray-400 text-xs mt-0.5 capitalize">{b.size} &middot; {b.temperament[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
