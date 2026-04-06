"use client";
import { useState } from "react";
import Link from "next/link";
import { breeds, breedSizes } from "@/data/breeds";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BreedsPage() {
  const [sizeFilter, setSizeFilter] = useState<string>("");
  const filtered = sizeFilter ? breeds.filter(b => b.size === sizeFilter) : breeds;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-3">Dog Breeds A-Z</h1>
        <p className="text-[#1A1A1A]/50 text-lg mb-12">{breeds.length} popular breeds with care guides and product recommendations.</p>

        {/* Filter Pills */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setSizeFilter("")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${!sizeFilter ? "bg-[#C4704B] text-white" : "bg-[#F0EEEB] text-[#1A1A1A]/60 hover:text-[#C4704B]"}`}
          >
            All
          </button>
          {breedSizes.map(s => (
            <button
              key={s}
              onClick={() => setSizeFilter(s)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${sizeFilter === s ? "bg-[#C4704B] text-white" : "bg-[#F0EEEB] text-[#1A1A1A]/60 hover:text-[#C4704B]"}`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Breed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map(b => (
            <Link
              key={b.slug}
              href={`/breeds/${b.slug}`}
              className="group bg-white rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <ImagePlaceholder id={`breed-avatar-${b.slug}`} alt={b.name} aspect="square" className="rounded-full" />
              </div>
              <p className="font-semibold text-[#1A1A1A] text-sm group-hover:text-[#C4704B] transition">{b.name}</p>
              <p className="text-[#1A1A1A]/40 text-xs mt-1 capitalize">{b.size} · {b.temperament[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
