import Link from "next/link";
import { getBreedBySlug } from "@/data/breeds";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

const breed = getBreedBySlug("bulldog")!;

export const metadata: Metadata = {
  title: "English Bulldog — Care Guide, Products & Breeder Tips | BabyMyDog",
  description: "Complete English Bulldog guide from a former AKC breeder. Expert care tips, health info, and the best products for your Bulldog.",
  openGraph: { title: "English Bulldog Guide — BabyMyDog", url: "https://babymydog.com/breeds/bulldog" },
  alternates: { canonical: "https://babymydog.com/breeds/bulldog" },
};

const TAG = "babymydog03-20";

export default function BulldogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <div className="relative">
        <ImagePlaceholder id="breed-bulldog-hero" alt="Beautiful brindle English Bulldog" aspect="wide" className="rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="max-w-[1200px] mx-auto px-6 pb-10 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{breed.name}</h1>
            <p className="text-white/70 mt-2">{breed.temperament.join(" · ")} · {breed.size} breed</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#1A1A1A]/40 mb-8 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#C4704B] transition">Home</Link><span>/</span>
          <Link href="/breeds" className="hover:text-[#C4704B] transition">Breeds</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">{breed.name}</span>
        </nav>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-8 mb-12 pb-8 border-b border-[#1A1A1A]/10 text-sm">
          {[
            { label: "Weight", value: breed.weightRange },
            { label: "Height", value: breed.heightRange },
            { label: "Life Span", value: breed.lifeSpan },
            { label: "Energy", value: breed.exerciseNeeds, capitalize: true },
            { label: "Shedding", value: breed.shedding, capitalize: true },
          ].map(s => (
            <div key={s.label}><span className="font-bold text-[#1A1A1A] capitalize">{s.value}</span><br/><span className="text-[#1A1A1A]/40">{s.label}</span></div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main Content */}
          <div>
            <div className="bg-white rounded-2xl p-8 mb-8" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">About the English Bulldog</h2>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-4">{breed.description}</p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">English Bulldogs are one of the most lovable, loyal, and easygoing breeds you&apos;ll ever meet. They&apos;re natural couch companions who bond deeply with their families. Don&apos;t let the tough exterior fool you — these dogs are gentle, affectionate, and surprisingly sensitive.</p>
            </div>

            {/* Breeder's Insight */}
            <div className="bg-[#C4704B]/10 border border-[#C4704B]/20 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">&#128054;</span>
                <div>
                  <h2 className="text-xl font-bold text-[#1A1A1A]">Breeder&apos;s Insight</h2>
                  <p className="text-[#1A1A1A]/50 text-sm">Our founder raised AKC show-quality English Bulldogs for years. Here&apos;s what we learned firsthand about this incredible breed.</p>
                </div>
              </div>
              <div className="space-y-4 text-[#1A1A1A]/60 leading-relaxed text-sm">
                <p><strong className="text-[#1A1A1A]">They&apos;re not just pets — they&apos;re family.</strong> Bulldogs attach to their people like velcro. They&apos;ll follow you room to room and insist on sleeping as close to you as physically possible. This breed craves human companionship more than almost any other.</p>
                <p><strong className="text-[#1A1A1A]">Every bulldog has a personality.</strong> Some are goofy clowns, some are dignified and stoic, and some are stubborn little tanks who will look you dead in the eye and refuse to move. That stubbornness is part of the charm — once you love a bulldog, no other breed will do.</p>
              </div>
            </div>

            {/* Care Guide — Enhanced */}
            <div className="bg-white rounded-2xl p-8 mb-8" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Essential Bulldog Care</h2>
              <div className="space-y-6">
                {[
                  { icon: "&#127777;&#65039;", title: "Heat Sensitivity (Critical)", desc: "Bulldogs can overheat dangerously fast. Keep them in air-conditioned environments on hot days. If their tongue turns bluish instead of pink, they\u2019re overheating \u2014 cool them with water immediately and get to a vet. Never exercise a bulldog in heat above 75\u00b0F." },
                  { icon: "&#128167;", title: "Wrinkle & Skin Care", desc: "Clean facial wrinkles 2-3 times per week with a damp cloth or wrinkle wipe. Moisture trapped in those adorable folds leads to infection fast. Dry thoroughly after cleaning. Pay special attention to the nose rope \u2014 that deep fold above the nose." },
                  { icon: "&#127860;", title: "Feeding & Weight", desc: "Bulldogs gain weight easily and it\u2019s incredibly hard to take off. Monitor portions carefully and avoid free-feeding. Two measured meals per day is ideal. A lean bulldog is a healthy bulldog \u2014 you should be able to feel (but not see) their ribs." },
                  { icon: "&#127754;", title: "Water Safety (Critical)", desc: "Bulldogs CANNOT swim. Period. Their heavy front-end and short legs make swimming physically impossible. Never leave them near water deeper than their elbows without direct supervision. A life jacket is mandatory near any body of water." },
                  { icon: "&#128694;", title: "Exercise", desc: "Short walks only, especially in warm weather. 15-20 minutes is plenty. They\u2019re couch potatoes by nature \u2014 and that\u2019s a feature, not a bug. Over-exercising a bulldog can cause breathing distress and overheating." },
                ].map((tip) => (
                  <div key={tip.title} className="flex items-start gap-4">
                    <span className="text-xl flex-shrink-0 mt-1" dangerouslySetInnerHTML={{__html: tip.icon}} />
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] mb-1">{tip.title}</h3>
                      <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Watch */}
            <div className="bg-white rounded-2xl p-8 mb-8" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Health Watch</h2>
              <ul className="space-y-3">
                {breed.healthIssues.map((issue, i) => (
                  <li key={i} className="text-[#1A1A1A]/60 text-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F0C75E]/20 flex items-center justify-center flex-shrink-0 text-[#D4AD3C] text-xs">&#9888;</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vet checkup image */}
            <div className="mb-8">
              <ImagePlaceholder id="bulldog-vet-checkup" alt="English Bulldog at the veterinarian for regular checkup" aspect="wide" className="rounded-2xl" />
              <p className="text-[#1A1A1A]/30 text-xs mt-2 text-center">Regular vet visits are essential for bulldogs — catch issues early.</p>
            </div>

            {/* Blog callout */}
            <div className="bg-white rounded-2xl p-6 mb-8 flex items-center gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <ImagePlaceholder id="breed-bulldog-product-1" alt="English Bulldog puppy" aspect="square" className="w-20 h-20 rounded-xl flex-shrink-0" />
              <div>
                <p className="font-bold text-[#1A1A1A] text-sm">Read our full guide</p>
                <Link href="/blog/english-bulldog-care-guide" className="text-[#C4704B] text-sm font-semibold hover:underline">English Bulldog Care Guide: What Every Owner Needs to Know &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Sidebar — Products */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Top Products for Bulldogs</h2>
            <div className="space-y-4">
              {[
                { name: "Bulldog Wrinkle Wipes", asin: "B07PMN6RQN", why: "Essential for keeping those adorable folds clean and infection-free" },
                { name: "Cooling Mat for Dogs", asin: "B07GDRPZPB", why: "A must for heat-sensitive bulldogs — keeps them cool without AC" },
                { name: "Elevated Dog Bowl", asin: "B08F4WWJ68", why: "Helps bulldogs breathe easier while eating — reduces gulping and gas" },
                { name: "Orthopedic Dog Bed", asin: "B0CXPMV4V1", why: "Supports their stocky frame and eases joint pressure" },
                { name: "No-Pull Dog Harness", asin: "B01M8JT6FT", why: "Always use a harness, never a collar — bulldogs have breathing issues" },
              ].map((prod) => (
                <a key={prod.name} href={`https://www.amazon.com/dp/${prod.asin}?tag=${TAG}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block bg-white rounded-2xl p-5 hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <h3 className="font-bold text-[#1A1A1A] text-sm">{prod.name}</h3>
                  <p className="text-[#1A1A1A]/50 text-xs mt-1 leading-relaxed">{prod.why}</p>
                  <span className="inline-block mt-3 bg-[#C4704B] text-white text-xs font-semibold px-4 py-2 rounded-full">&#9733; Our Pick &mdash; Shop on Amazon</span>
                </a>
              ))}
            </div>

            <div className="mt-8 bg-[#5B7B5E]/10 border border-[#5B7B5E]/20 rounded-2xl p-5">
              <p className="text-sm text-[#1A1A1A]/60"><strong className="text-[#1A1A1A]">Find dog parks for your Bulldog!</strong> Short walks at a shaded park are perfect. Visit <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-[#5B7B5E] font-semibold hover:underline">BarkSeeker.com</a></p>
            </div>
          </div>
        </div>

        <p className="text-[#1A1A1A]/30 text-xs italic text-center mt-12">Written with insights from a retired AKC English Bulldog breeder.</p>
      </div>
    </div>
  );
}
