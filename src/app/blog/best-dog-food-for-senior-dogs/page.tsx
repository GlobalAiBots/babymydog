import Link from "next/link";
import AffiliateDisclosure from "@/components/affiliate/AffiliateDisclosure";
import AffiliateCallout from "@/components/affiliate/AffiliateCallout";
import AffiliateInlineLink from "@/components/affiliate/AffiliateInlineLink";
import { REVIVAL } from "@/data/affiliates/revival";
import type { Metadata } from "next";

const POST_SLUG = "best-dog-food-for-senior-dogs";
const TITLE = "Best Senior Dog Food in 2026: Vet-Recommended Picks by Size";
const DESC = "When dogs become senior (varies by size), nutritional shifts for older dogs (lower calorie, joint support, higher fiber), wet vs dry for seniors, and our top 5 picks.";
const URL = "https://www.babymydog.com/blog/best-dog-food-for-senior-dogs";
const TAG = "babymydog03-20";

export const metadata: Metadata = {
  title: `${TITLE} | BabyMyDog`,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, type: "article" },
  twitter: { card: "summary", title: TITLE, description: DESC },
  alternates: { canonical: URL },
};

const faqs = [
  { q: "At what age is a dog considered senior?", a: "Depends on size. Small dogs (under 20 lbs): senior at 10+. Medium (20-50 lbs): 8+. Large (50-90 lbs): 6-7+. Giant (90+ lbs): 5-6+. Great Danes are senior at 5; Chihuahuas aren't until 11. The rule of thumb: smaller dogs live longer and become senior later. Watch for graying muzzle, slower pace, longer naps — those are often the first signs regardless of calendar age." },
  { q: "Do senior dogs really need different food than adults?", a: "For most dogs with moderate activity levels, yes. Senior formulas typically contain: lower calories (metabolism slows ~20%), higher fiber (digestive slowdown), added glucosamine/chondroitin (joint support), reduced phosphorus (kidney function preservation), increased omega-3s (cognitive + joint + coat). The difference matters most after age 9-10 when activity drops. Highly active senior dogs (agility dogs, hiking dogs) may do better on standard adult food to avoid weight loss." },
  { q: "When should I switch my dog to senior food?", a: "Don't switch based on age alone — watch for signs: weight gain on normal food, stiff after naps, graying, slower recovery from walks. When you see 2-3 of those, switch. The transition should take 7-10 days: day 1-3 mix 25% new / 75% old, day 4-6 50/50, day 7-9 75/25, day 10+ all new. Skipping the transition period causes diarrhea in seniors." },
  { q: "Is grain-free food bad for senior dogs?", a: "Following the FDA's 2018 investigation into dilated cardiomyopathy (DCM) and an updated 2024 review, grain-free diets remain under scrutiny especially for legume-heavy formulas. For senior dogs with no specific grain allergy, most vets now recommend grain-INCLUSIVE food (one containing rice, oats, or barley) rather than grain-free. Senior hearts are more vulnerable to DCM, and there's no proven benefit to grain-free for dogs without diagnosed grain sensitivity." },
  { q: "Should I switch from dry to wet food as my dog ages?", a: "Many senior dogs benefit from some wet food — easier to chew (important for dental issues), higher moisture content (kidney protective), stronger smell (important for seniors with reduced appetite). You don't have to go fully wet. A common senior diet is 70% senior dry + 30% wet mixed in. Dogs with advanced dental disease, kidney issues, or cognitive decline-related appetite loss benefit most from going fully wet." },
];

const picks = [
  { rank: 1, name: "Hill's Science Diet Adult 7+ Chicken & Barley", badge: "Best Overall", q: "hills science diet adult 7 plus chicken barley", why: "Vet-formulated with clinically proven antioxidants. Moderate calories (338 kcal/cup), added glucosamine and chondroitin, grain-inclusive (no DCM risk), mid-tier pricing. The default senior food vets recommend for good reason." },
  { rank: 2, name: "Purina Pro Plan Bright Mind Adult 7+", badge: "Best for Cognitive Aging", q: "purina pro plan bright mind adult 7 plus", why: "Contains MCT oil (medium-chain triglycerides) shown in Purina's own research to improve cognitive function in dogs 7+. Measurable improvements at 30 days. Worth considering if your senior is showing early cognitive decline (confusion, night pacing)." },
  { rank: 3, name: "Royal Canin Medium Aging 10+", badge: "Best for Small-Medium Seniors", q: "royal canin medium aging 10", why: "Specifically formulated for dogs 10-15 lbs to 55 lbs over age 10. Small kibble size (good for dental issues), highly digestible protein for slower aging digestion, targeted joint and kidney support. Pricier but vet-quality." },
  { rank: 4, name: "Blue Buffalo Life Protection Formula Senior Chicken", badge: "Best Budget Pick", q: "blue buffalo life protection senior chicken", why: "No by-product meals, real chicken as first ingredient, added LifeSource Bits (antioxidants + vitamins). Grain-inclusive formula since 2023 recipe update. Around $55-65 for a 30-lb bag — best quality at this price point." },
  { rank: 5, name: "Orijen Senior", badge: "Best Premium Protein", q: "orijen senior dog food", why: "85% meat, poultry, fish. Fresh ingredients, made in their own kitchen in Kentucky. Expensive ($95-110 for a 25-lb bag) but the highest protein quality of any mainstream senior food. Good choice for seniors who are losing muscle mass (common after age 10)." },
];

export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-04-21", dateModified: "2026-04-21", author: { "@type": "Organization", name: "BabyMyDog" }, publisher: { "@type": "Organization", name: "BabyMyDog", url: "https://www.babymydog.com" }, mainEntityOfPage: URL }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.babymydog.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.babymydog.com/blog" }, { "@type": "ListItem", position: 3, name: "Best Senior Dog Food", item: URL }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex gap-2"><Link href="/" className="hover:text-[#D35400] transition">Home</Link><span>/</span><Link href="/blog" className="hover:text-[#D35400] transition">Blog</Link><span>/</span><span className="text-[#1A1A1A]">Senior Dog Food</span></nav>

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D35400] mb-3">Nutrition</span>
        <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-3">{TITLE}</h1>
        <p className="text-gray-500 text-sm">Updated April 21, 2026 &middot; 10 min read &middot; BabyMyDog Team</p>
      </header>

      <AffiliateDisclosure />

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>By the time your dog&apos;s muzzle starts to gray and they sleep a little longer between walks, their nutritional needs have shifted meaningfully. The same food that built up their muscle at 4 now causes creeping weight gain at 11 — and that extra weight compounds joint problems, heart strain, and diabetes risk. <strong className="text-[#1A1A1A]">The right senior food is the single biggest quality-of-life lever in the last 3-5 years of a dog&apos;s life.</strong></p>
        <p>This guide covers when to switch, what to look for, which brands actually deliver on their marketing, and the warning signs that mean you should talk to your vet before changing anything.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">When Is a Dog &quot;Senior&quot;?</h2>
        <p>Age depends heavily on size. Smaller dogs live longer and stay young longer:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-[#1A1A1A]">Small (under 20 lbs)</strong> &mdash; senior at 10+. Can live to 15-18.</li>
          <li><strong className="text-[#1A1A1A]">Medium (20-50 lbs)</strong> &mdash; senior at 8-9. Lifespan 11-14.</li>
          <li><strong className="text-[#1A1A1A]">Large (50-90 lbs)</strong> &mdash; senior at 6-7. Lifespan 9-12.</li>
          <li><strong className="text-[#1A1A1A]">Giant (90+ lbs)</strong> &mdash; senior at 5-6. Lifespan 7-10.</li>
        </ul>
        <p>Watch the behavior, not the calendar. The signs that actually matter: weight gain on normal portions, visible graying, stiffness after naps, slower recovery from walks, less interest in toys, longer daily sleep. When 2-3 appear, the dog is senior regardless of what the chart says.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">What Changes Nutritionally</h2>
        <p>Senior formulas differ from adult in specific ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-[#1A1A1A]">Lower calories</strong> (typically 15-20% fewer per cup). Metabolism slows; same food portion = weight gain.</li>
          <li><strong className="text-[#1A1A1A]">Joint support additives</strong>: glucosamine, chondroitin, MSM, omega-3 (EPA/DHA). Most seniors have some degree of osteoarthritis.</li>
          <li><strong className="text-[#1A1A1A]">Higher fiber</strong>: seniors have slower digestive transit; fiber helps regularity.</li>
          <li><strong className="text-[#1A1A1A]">Reduced phosphorus</strong>: protects aging kidneys. Regular adult foods run high phosphorus.</li>
          <li><strong className="text-[#1A1A1A]">Moderate-to-high quality protein</strong>: NOT lower protein &mdash; the old &quot;low protein for seniors&quot; advice is outdated. Seniors actually need HIGHER-quality protein to maintain muscle mass, just with reduced phosphorus.</li>
          <li><strong className="text-[#1A1A1A]">Antioxidants</strong>: vitamin E, vitamin C, beta-carotene. Combat cellular aging.</li>
          <li><strong className="text-[#1A1A1A]">Omega-3 fatty acids</strong>: joint, coat, cognitive, and cardiac benefits. Look for EPA/DHA on the label.</li>
        </ul>
        <p>If your senior&apos;s food doesn&apos;t hit those targets, a targeted multivitamin from a vet-supply company like <AffiliateInlineLink partner={REVIVAL} linkKey="vitaminsGeneral" postSlug={POST_SLUG}>Revival Animal Health</AffiliateInlineLink> can fill the gaps without rewriting their whole feeding routine.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Our Top 5 Senior Food Picks</h2>
        <div className="grid grid-cols-1 gap-4 not-prose my-6">
          {picks.map((p) => (
            <div key={p.name} className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#D35400] text-white text-xs font-bold px-2 py-1 rounded-full">#{p.rank}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D35400]">{p.badge}</span>
              </div>
              <h3 className="font-[Cabin] font-bold text-[#1A1A1A] text-lg mb-2">{p.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{p.why}</p>
              <a href={`https://www.amazon.com/s?k=${encodeURIComponent(p.q)}&tag=${TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-[#D35400] hover:bg-[#b84800] text-white text-sm font-semibold px-4 py-2 rounded-lg">Shop on Amazon &rarr;</a>
            </div>
          ))}
        </div>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Wet vs Dry for Seniors</h2>
        <p>Most senior dogs benefit from SOME wet food mixed with dry:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-[#1A1A1A]">Easier to chew</strong> &mdash; critical if your dog has dental disease or missing teeth (common over age 10).</li>
          <li><strong className="text-[#1A1A1A]">Higher moisture</strong> &mdash; reduces kidney workload. Seniors often under-drink.</li>
          <li><strong className="text-[#1A1A1A]">Stronger smell and flavor</strong> &mdash; important as sense of smell dulls with age.</li>
          <li><strong className="text-[#1A1A1A]">Less shelf life after opening</strong> &mdash; only buy what you&apos;ll use in 3 days refrigerated.</li>
          <li><strong className="text-[#1A1A1A]">More expensive per meal</strong> &mdash; a 70/30 dry-to-wet mix is a common compromise.</li>
        </ul>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Common Senior Health Issues &amp; Food</h2>
        <h3 className="font-[Cabin] text-xl font-bold text-[#1A1A1A] mt-6">Arthritis / Joint Pain</h3>
        <p>Look for: glucosamine (1,000+ mg/kg), chondroitin (800+ mg/kg), omega-3 (EPA+DHA &gt;0.3% of diet). Hill&apos;s Science Diet 7+ and Royal Canin Mobility Support formulas hit these thresholds. For seniors who need more than what&apos;s already in their food, <AffiliateInlineLink partner={REVIVAL} linkKey="jointCare" postSlug={POST_SLUG}>Revival&apos;s vet-grade joint care line</AffiliateInlineLink> stacks cleanly on top of any senior diet.</p>

        <h3 className="font-[Cabin] text-xl font-bold text-[#1A1A1A] mt-6">Kidney Disease (vet-diagnosed)</h3>
        <p>Prescription-only territory: Hill&apos;s k/d, Royal Canin Renal, Purina NF Kidney Function. Don&apos;t try to manage kidney disease with OTC food &mdash; phosphorus restriction needs to be medically precise.</p>

        <h3 className="font-[Cabin] text-xl font-bold text-[#1A1A1A] mt-6">Cognitive Decline</h3>
        <p>Purina Pro Plan Bright Mind specifically. MCT oil is the key additive. Takes ~30 days to see improvement.</p>

        <h3 className="font-[Cabin] text-xl font-bold text-[#1A1A1A] mt-6">Dental Disease</h3>
        <p>Go mostly wet. If dry, switch to a smaller kibble size (Royal Canin Small Aging 12+ works). Consider Hill&apos;s Oral Care dry if no missing teeth but plaque buildup.</p>

        <h3 className="font-[Cabin] text-xl font-bold text-[#1A1A1A] mt-6">Weight Gain</h3>
        <p>Switch to senior AND cut portions by 10-15%. Use a measuring cup, not &quot;a scoop.&quot; Add green beans or pumpkin as a volume-filler (seniors feel hungry on smaller portions initially).</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Transition Protocol</h2>
        <p>Senior digestive systems are sensitive. A rapid switch causes diarrhea. 10-day transition:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Days 1-3: 25% new / 75% old</li>
          <li>Days 4-6: 50/50</li>
          <li>Days 7-9: 75/25</li>
          <li>Day 10+: 100% new</li>
        </ul>
        <p>If your dog vomits or has diarrhea at any stage, back off by one stage for 2 extra days, then continue.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">When to Talk to Your Vet First</h2>
        <p>Before switching, get bloodwork:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dogs over 10 with no recent senior panel</li>
          <li>Any diagnosed condition (kidney, liver, heart, diabetes)</li>
          <li>Sudden weight gain or loss of &gt;5% body weight</li>
          <li>Drinking/urinating more than usual</li>
          <li>Persistent GI issues on current food</li>
        </ul>
        <p>A senior bloodwork panel is $150-250 and catches kidney, liver, and thyroid issues early. Worth doing every 6-12 months past age 8.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-[Cabin] font-bold text-[#1A1A1A] text-lg">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="font-[Cabin] text-2xl font-bold text-[#1A1A1A] mt-10">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/blog/best-dog-food-for-puppies" className="text-[#D35400] hover:underline">Best Puppy Food (the opposite end)</Link></li>
          <li><Link href="/blog/best-dog-food-for-sensitive-stomach" className="text-[#D35400] hover:underline">Best Food for Sensitive Stomachs</Link></li>
          <li><Link href="/blog/dog-joint-supplements-do-they-work" className="text-[#D35400] hover:underline">Do Joint Supplements Work?</Link></li>
          <li><Link href="/blog/choose-right-dog-food" className="text-[#D35400] hover:underline">How to Choose the Right Dog Food</Link></li>
          <li><Link href="/products" className="text-[#D35400] hover:underline">All product categories</Link></li>
        </ul>

        <AffiliateCallout
          partner={REVIVAL}
          linkKey="autoShip"
          postSlug={POST_SLUG}
          variant="footer"
          heading="Set Up AutoShip for Senior Supplements"
          body="Senior nutrition is a long game — joint support, omega-3s, and multivitamins work best when given consistently for months, not weeks. Revival's AutoShip schedules recurring deliveries so you never run out, with free shipping on orders over $149."
          ctaLabel="Browse Senior AutoShip Options"
        />
      </div>
    </article>
  );
}
