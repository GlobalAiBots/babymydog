import Link from "next/link";
import { notFound } from "next/navigation";
import { breeds, getBreedBySlug } from "@/data/breeds";
import ImagePlaceholder from "@/components/ImagePlaceholder";
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
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>

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
            { label: "Energy", value: breed.temperament.includes("active") || breed.temperament.includes("energetic") ? "High" : "Moderate" },
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
            </section>

            {/* Care Guide */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">Care Guide</h2>
              <div className="space-y-3">
                {breed.careTips.map((tip, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <span className="w-6 h-6 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-sm font-bold mt-0.5">&#10003;</span>
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
            </section>
          </div>

          {/* Right Column — 35% Sticky Sidebar */}
          <aside className="lg:w-[35%]">
            <div className="lg:sticky lg:top-8 space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Top Picks</h3>
              {breed.recommendedProducts.slice(0, 3).map((p, i) => {
                const href = `/best/${p.includes("bed") ? "dog-beds" : p.includes("brush") || p.includes("shampoo") ? "dog-grooming" : p.includes("supplement") || p.includes("joint") ? "dog-supplements" : p.includes("toy") || p.includes("fetch") || p.includes("puzzle") || p.includes("chew") ? "dog-toys" : p.includes("harness") ? "dog-harnesses" : p.includes("coat") || p.includes("vest") || p.includes("cooling") || p.includes("winter") ? "dog-coats" : p.includes("bowl") || p.includes("feeder") ? "dog-bowls" : p.includes("dental") ? "dog-dental" : p.includes("crate") ? "dog-crates" : p.includes("nail") || p.includes("ear") ? "dog-grooming" : "dog-toys"}`;
                return (
                  <Link key={i} href={href} className="group block bg-white rounded-2xl p-5 hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <ImagePlaceholder id={`breed-${breed.slug}-pick-${i}`} alt={p.replace(/-/g, ' ')} aspect="landscape" className="mb-4" />
                    <p className="font-semibold text-[#1A1A1A] capitalize text-sm">{p.replace(/-/g, ' ')}</p>
                    <span className="text-[#C4704B] text-xs font-semibold mt-2 inline-flex items-center gap-1">
                      View picks <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      {/* Full-width Products Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Products for Your {breed.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {breed.recommendedProducts.slice(0, 4).map((p, i) => {
              const href = `/best/${p.includes("bed") ? "dog-beds" : p.includes("brush") || p.includes("shampoo") ? "dog-grooming" : p.includes("supplement") || p.includes("joint") ? "dog-supplements" : p.includes("toy") || p.includes("fetch") || p.includes("puzzle") || p.includes("chew") ? "dog-toys" : p.includes("harness") ? "dog-harnesses" : p.includes("coat") || p.includes("vest") || p.includes("cooling") || p.includes("winter") ? "dog-coats" : p.includes("bowl") || p.includes("feeder") ? "dog-bowls" : p.includes("dental") ? "dog-dental" : p.includes("crate") ? "dog-crates" : p.includes("nail") || p.includes("ear") ? "dog-grooming" : "dog-toys"}`;
              return (
                <Link key={i} href={href} className="group bg-[#FAF8F5] rounded-2xl p-5 hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <ImagePlaceholder id={`breed-${breed.slug}-product-${i}`} alt={p.replace(/-/g, ' ')} aspect="square" className="mb-4" />
                  <p className="font-semibold text-[#1A1A1A] capitalize text-sm">{p.replace(/-/g, ' ')}</p>
                  <span className="text-[#C4704B] text-xs font-semibold mt-2 inline-flex items-center gap-1">
                    Shop now <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* BarkSeeker Callout */}
      <div style={{ backgroundColor: '#5B7B5E' }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Find dog parks for your {breed.name}</h3>
            <p className="text-white/80 text-sm">Discover off-leash parks, trails, and play areas near you.</p>
          </div>
          <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#5B7B5E] font-semibold text-sm px-8 py-3 rounded-full hover:scale-[1.02] transition-transform">
            Visit BarkSeeker &rarr;
          </a>
        </div>
      </div>

      {/* Footer Credit */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 text-center">
        <p className="text-[#1A1A1A]/30 text-xs">BabyMyDog is powered by <strong className="text-[#1A1A1A]/40">CLETUS AI</strong> from <strong className="text-[#1A1A1A]/40">Global AI Bots</strong></p>
      </div>
    </div>
  );
}
