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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-rose transition">Home</Link><span>/</span>
        <Link href="/breeds" className="hover:text-rose transition">Breeds</Link><span>/</span>
        <span className="text-charcoal font-medium">{breed.name}</span>
      </nav>

      <div className="flex items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-rose flex-shrink-0" style={{background:'linear-gradient(135deg, #FFF0F3, #E8637A22)'}}>{breed.name.charAt(0)}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>{breed.name}</h1>
          <p className="text-gray-500 mt-1">{breed.temperament.join(" &middot; ")} &middot; {breed.size} breed</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Weight", value: breed.weightRange },
          { label: "Height", value: breed.heightRange },
          { label: "Life Span", value: breed.lifeSpan },
          { label: "Shedding", value: breed.shedding, capitalize: true },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <p className="text-lg font-bold text-rose" style={{fontFamily:'Playfair Display,serif'}}>{s.value}</p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>About the {breed.name}</h2>
        <p className="text-gray-600 leading-relaxed">{breed.description}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>Care Tips</h2>
        <ul className="space-y-2">
          {breed.careTips.map((tip, i) => <li key={i} className="text-gray-600 text-sm flex items-start gap-2"><span className="text-rose mt-0.5">&#10003;</span>{tip}</li>)}
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>Common Health Issues</h2>
        <ul className="space-y-2">
          {breed.healthIssues.map((issue, i) => <li key={i} className="text-gray-600 text-sm flex items-start gap-2"><span className="text-gold">&#9888;</span>{issue}</li>)}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-charcoal mb-4" style={{fontFamily:'Playfair Display,serif'}}>Recommended Products for {breed.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {breed.recommendedProducts.map(p => (
            <Link key={p} href={`/best/${p.includes("bed") ? "dog-beds" : p.includes("brush") || p.includes("shampoo") ? "dog-grooming" : p.includes("supplement") || p.includes("joint") ? "dog-supplements" : p.includes("toy") || p.includes("fetch") || p.includes("puzzle") || p.includes("chew") ? "dog-toys" : p.includes("harness") ? "dog-harnesses" : p.includes("coat") || p.includes("vest") || p.includes("cooling") || p.includes("winter") ? "dog-coats" : p.includes("bowl") || p.includes("feeder") ? "dog-bowls" : p.includes("dental") ? "dog-dental" : p.includes("crate") ? "dog-crates" : p.includes("nail") || p.includes("ear") ? "dog-grooming" : "dog-toys"}`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
              <p className="font-bold text-charcoal text-xs group-hover:text-rose transition capitalize">{p.replace(/-/g, ' ')}</p>
              <span className="text-xs text-rose mt-1 inline-block">View picks &rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-rose/5 border border-rose/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-charcoal"><strong>Find dog parks for your {breed.name}!</strong> Visit <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">BarkSeeker.com</a> to find off-leash dog parks near you.</p>
      </div>
    </div>
  );
}
