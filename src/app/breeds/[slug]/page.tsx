import Link from "next/link";
import { notFound } from "next/navigation";
import { breeds, getBreedBySlug } from "@/data/breeds";
import type { Metadata } from "next";

export function generateStaticParams() { return breeds.map(b => ({ slug: b.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const breed = getBreedBySlug(slug);
  if (!breed) return { title: "Not Found" };
  return {
    title: `${breed.name} — Care Guide, Products & Tips | BabyMyDog`,
    description: `Complete ${breed.name} guide: care tips, health info, and the best products for your ${breed.name}.`,
    openGraph: { title: `${breed.name} Guide — BabyMyDog`, url: `https://babymydog.com/breeds/${breed.slug}` },
    alternates: { canonical: `https://babymydog.com/breeds/${breed.slug}` },
  };
}

export default async function BreedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const breed = getBreedBySlug(slug);
  if (!breed) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9F0' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-8 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#E8637A] transition">Home</Link><span>/</span>
          <Link href="/breeds" className="hover:text-[#E8637A] transition">Breeds</Link><span>/</span>
          <span className="text-[#4A1942] font-medium">{breed.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="flex items-center gap-8 mb-10">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white flex-shrink-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #E8637A, #4A1942)' }}>
            {breed.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#4A1942]" style={{ fontFamily: 'Playfair Display,serif' }}>{breed.name}</h1>
            <p className="text-gray-500 mt-2 text-lg">{breed.temperament.join(" · ")} · {breed.size} breed</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Weight", value: breed.weightRange },
            { label: "Height", value: breed.heightRange },
            { label: "Life Span", value: breed.lifeSpan },
            { label: "Shedding", value: breed.shedding, capitalize: true },
          ].map(s => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-shadow">
              <p className="text-xl font-bold text-[#E8637A]" style={{ fontFamily: 'Playfair Display,serif' }}>{s.value}</p>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* About / Description */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-[#4A1942] mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>About the {breed.name}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{breed.description}</p>
        </div>

        {/* Care Tips — Icon Grid */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#4A1942] mb-6" style={{ fontFamily: 'Playfair Display,serif' }}>Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {breed.careTips.map((tip, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8637A]/10 flex items-center justify-center flex-shrink-0 text-[#E8637A] font-bold text-sm">&#10003;</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Issues */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#4A1942] mb-6" style={{ fontFamily: 'Playfair Display,serif' }}>Common Health Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {breed.healthIssues.map((issue, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500 font-bold text-sm">&#9888;</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{issue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#4A1942] mb-6" style={{ fontFamily: 'Playfair Display,serif' }}>Top Products for Your {breed.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {breed.recommendedProducts.map(p => (
              <Link key={p} href={`/best/${p.includes("bed") ? "dog-beds" : p.includes("brush") || p.includes("shampoo") ? "dog-grooming" : p.includes("supplement") || p.includes("joint") ? "dog-supplements" : p.includes("toy") || p.includes("fetch") || p.includes("puzzle") || p.includes("chew") ? "dog-toys" : p.includes("harness") ? "dog-harnesses" : p.includes("coat") || p.includes("vest") || p.includes("cooling") || p.includes("winter") ? "dog-coats" : p.includes("bowl") || p.includes("feeder") ? "dog-bowls" : p.includes("dental") ? "dog-dental" : p.includes("crate") ? "dog-crates" : p.includes("nail") || p.includes("ear") ? "dog-grooming" : "dog-toys"}`} className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-l-[#E8637A]">
                <p className="font-bold text-[#4A1942] text-sm group-hover:text-[#E8637A] transition capitalize">{p.replace(/-/g, ' ')}</p>
                <span className="text-xs text-[#E8637A] mt-2 inline-block font-semibold">View picks &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* BarkSeeker Callout */}
        <div className="bg-[#E8637A]/10 border border-gray-100 rounded-2xl p-6 mb-10">
          <p className="text-sm text-[#4A1942]"><strong>Find dog parks for your {breed.name}!</strong> Visit <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-[#E8637A] font-semibold hover:underline">BarkSeeker.com</a> to find off-leash dog parks near you.</p>
        </div>

        {/* CLETUS AI Callout */}
        <div className="border border-gray-200 rounded-2xl p-5 text-center">
          <p className="text-gray-400 text-xs">BabyMyDog is powered by <strong className="text-gray-500">CLETUS AI</strong> from <strong className="text-gray-500">Global AI Bots</strong></p>
        </div>
      </div>
    </div>
  );
}
