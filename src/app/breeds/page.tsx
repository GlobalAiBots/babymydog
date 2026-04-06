"use client";
import { useState } from "react";
import Link from "next/link";
import { breeds, breedSizes } from "@/data/breeds";

export default function BreedsPage() {
  const [sizeFilter, setSizeFilter] = useState<string>("");
  const filtered = sizeFilter ? breeds.filter(b => b.size === sizeFilter) : breeds;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9F0' }}>
      <div className="max-w-5xl mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4A1942] mb-3" style={{ fontFamily: 'Playfair Display,serif' }}>Dog Breeds A-Z</h1>
        <p className="text-gray-500 text-lg mb-10">{breeds.length} popular breeds with care guides and product recommendations.</p>

        {/* Filter Pills */}
        <div className="flex gap-3 mb-10 flex-wrap">
          <button onClick={() => setSizeFilter("")} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!sizeFilter ? "bg-[#E8637A] text-white shadow-sm" : "bg-white border border-gray-100 text-gray-500 hover:border-[#E8637A] hover:text-[#E8637A]"}`}>All</button>
          {breedSizes.map(s => (
            <button key={s} onClick={() => setSizeFilter(s)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize ${sizeFilter === s ? "bg-[#E8637A] text-white shadow-sm" : "bg-white border border-gray-100 text-gray-500 hover:border-[#E8637A] hover:text-[#E8637A]"}`}>{s}</button>
          ))}
        </div>

        {/* Breed Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map(b => (
            <Link key={b.slug} href={`/breeds/${b.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #E8637A, #4A1942)' }}>{b.name.charAt(0)}</div>
              <p className="font-bold text-[#4A1942] text-sm group-hover:text-[#E8637A] transition">{b.name}</p>
              <p className="text-gray-400 text-xs mt-1 capitalize">{b.size} · {b.temperament[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
