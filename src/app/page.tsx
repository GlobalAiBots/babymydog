import Link from "next/link";
import BrandName from "@/components/BrandName";
import { breeds } from "@/data/breeds";
import { blogPosts } from "@/data/blog-posts";
import { productCategories } from "@/data/products";

const totalProducts = productCategories.reduce((sum, c) => sum + (c.picks?.length || 0), 0);
const totalCategories = productCategories.length;

/* eslint-disable @next/next/no-img-element */

const topBreeds = breeds.slice(0, 10);

const categories = [
  { slug: "dog-beds", name: "Beds & Comfort", img: "/images/dog-relaxing-premium-gray-bed-with-plants.jpg", alt: "Cozy dog bed", color: "#C4704B" },
  { slug: "dog-food", name: "Food & Nutrition", img: "/images/excited-husky-getting-fed-dog-bowl.jpg", alt: "Premium dog food", color: "#5B7B5E" },
  { slug: "dog-toys", name: "Toys & Play", img: "/images/golden-retriever-holding-stuffed-toy.jpg", alt: "Dog playing", color: "#D4AD3C" },
  { slug: "dog-grooming", name: "Grooming & Care", img: "/images/poodle-professional-grooming-salon.jpg", alt: "Dog grooming", color: "#5DADE2" },
  { slug: "dog-harnesses", name: "Gear & Accessories", img: "/images/goldendoodle-wearing-red-harness-and-leash.jpg", alt: "Dog harness", color: "#8B6914" },
  { slug: "/gifts", name: "Gift Shop", img: "/images/dog-with-christmas-plush-toy-holiday.jpg", alt: "Dog gifts", color: "#C0392B" },
];

const breedAvatars: Record<string, string> = {
  "golden-retriever": "/images/golden-retriever-puppy-portrait-with-collar.jpg",
  "labrador-retriever": "/images/black-labrador-retriever-sitting-on-bridge.jpg",
  "french-bulldog": "/images/french-bulldog-looking-up-big-eyes.jpg",
  "german-shepherd": "/images/german-shepherd-portrait-studio-dark.jpg",
  "poodle": "/images/poodle-wearing-red-coat-boots-snow.jpg",
  "bulldog": "/images/english-bulldog-outdoors-with-frisbee.jpg",
  "beagle": "/images/two-beagle-puppies-peeking-over-ledge.jpg",
  "rottweiler": "/images/rottweiler-smiling-happy-outdoors.jpg",
  "dachshund": "/images/dachshund-puppy-jumping-mid-air.jpg",
  "pembroke-welsh-corgi": "/images/pembroke-welsh-corgi-smiling-crater-lake.jpg",
};

const blogImages: Record<string, string> = {
  "english-bulldog-care-guide": "/images/english-bulldog-laying-down-resting.jpg",
  "how-to-choose-dog-breeder": "/images/vet-examining-english-bulldog-ear.jpg",
  "choose-right-dog-food": "/images/border-collie-looking-at-food-bowl-kibble.jpg",
  "signs-dog-needs-better-bed": "/images/pug-snuggled-in-patterned-dog-bed.jpg",
  "new-puppy-checklist": "/images/golden-retriever-puppies-in-a-row.jpg",
  "dog-grooming-at-home": "/images/white-dog-getting-groomed-with-scissors.jpg",
  "indestructible-dog-toys": "/images/golden-retriever-with-stuffed-toy-grass.jpg",
};

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebSite", "name": "BabyMyDog", "url": "https://www.babymydog.com",
        "description": `Premium products and care guides for dog lovers. ${breeds.length} breed guides, ${totalCategories} product categories, expert reviews.`,
        "potentialAction": { "@type": "SearchAction", "target": "https://www.babymydog.com/breeds?q={search_term_string}", "query-input": "required name=search_term_string" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization", "name": "BabyMyDog", "url": "https://www.babymydog.com",
        "logo": "https://www.babymydog.com/favicon.svg",
        "description": "Expert-picked products for pampered pups. Honest reviews, no sponsored rankings.",
      }) }} />

      {/* HERO — Full-bleed dramatic */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <img src="/images/happy-dog-owner-hugging-golden-retriever.jpg" alt="Happy dog owner with golden retriever" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2006]/80 via-[#2D2006]/30 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-6 pb-16 md:pb-24 w-full z-10">
          <h1 className="text-4xl md:text-[56px] font-black text-white tracking-tight leading-[1.1]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)' }}>
            Spoil Your<br />Best Friend.
          </h1>
          <p className="text-white/85 mt-4 text-lg md:text-xl max-w-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>Expert-picked products, breed guides, and honest reviews &mdash; because your dog deserves the best.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/best" className="text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)', boxShadow: '0 6px 20px rgba(211,84,0,0.3)', minHeight: '48px' }}>Shop Products</Link>
            <Link href="/breeds" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-[#D35400] hover:shadow-xl hover:-translate-y-0.5" style={{ minHeight: '48px' }}>Find Your Breed</Link>
          </div>
        </div>
        {/* Bounce arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-3 text-center" style={{ background: '#FFF8F0' }}>
        <p className="text-[#D35400] font-bold text-sm tracking-wide">&#11088;&#11088;&#11088;&#11088;&#11088; {totalProducts}+ Products Reviewed by Dog Owners Like You</p>
      </section>

      {/* TRUST BAR */}
      <section className="py-8" style={{ background: '#2D2006' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { num: `${totalProducts}+`, label: "Products Reviewed" },
              { num: String(breeds.length), label: "Breed Guides" },
              { num: String(totalCategories), label: "Categories Covered" },
              { num: "45+", label: "Expert Reviews" },
              { num: "🇺🇸", label: "Veteran Owned" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[36px] md:text-[44px] font-extrabold text-[#F39C12] leading-none">{s.num}</p>
                <p className="text-white/50 text-[13px] uppercase tracking-widest mt-2 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ CTA */}
      <section className="py-10" style={{ background: '#FFF8F0' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Link href="/quiz" className="group block bg-white rounded-2xl p-8 md:p-10 text-center hover:shadow-xl transition-all duration-300 border-2 border-[#D35400]/15 hover:border-[#D35400]" style={{ boxShadow: '0 4px 20px rgba(211,84,0,0.08)' }}>
            <span className="text-4xl block mb-3">&#129300;</span>
            <h2 className="text-2xl md:text-[36px] font-extrabold text-[#2D2006] mb-2 leading-tight">What does YOUR dog need?</h2>
            <p className="text-[#8B7355] text-base mb-5">Answer 5 quick questions and get personalized product recommendations.</p>
            <span className="inline-block text-white font-bold px-8 py-4 rounded-xl text-lg group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)', boxShadow: '0 6px 20px rgba(211,84,0,0.3)' }}>Take the Quiz &rarr;</span>
          </Link>
        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="py-12" style={{ background: '#FFF8F0' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-[22px] md:text-[28px] font-extrabold text-[#2D2006]">Shop by Occasion</h2>
            <Link href="/collections" className="text-[#D35400] text-sm font-bold hover:underline hidden sm:block">All collections &rarr;</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3">
            {[
              { slug: "summer-essentials", title: "Summer Essentials", icon: "☀️", desc: "Beat the heat" },
              { slug: "new-puppy", title: "New Puppy Kit", icon: "🐶", desc: "First-week must-haves" },
              { slug: "senior-dog", title: "Senior Comfort", icon: "🤍", desc: "Gentle care for aging pups" },
              { slug: "dog-birthday", title: "Birthday Party", icon: "🎂", desc: "Treats, toys & cake" },
              { slug: "road-trip", title: "Road Trip Ready", icon: "🚗", desc: "Travel safe & comfy" },
            ].map((c) => (
              <Link key={c.slug} href={`/collections/${c.slug}`} className="flex-shrink-0 group bg-white rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-[#2D2006]/5" style={{ minWidth: 160, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span className="text-3xl block mb-2">{c.icon}</span>
                <p className="font-bold text-[#2D2006] text-sm group-hover:text-[#D35400] transition">{c.title}</p>
                <p className="text-[#8B7355] text-xs mt-1">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20" style={{ background: '#FFECD2' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006]">Shop by Category</h2>
            <p className="text-[#8B7355] mt-3">Expert-reviewed picks in every category</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <Link key={c.slug} href={c.slug.startsWith('/') ? c.slug : `/best/${c.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl" style={{ borderTop: `3px solid ${c.color}` }}>
                  <div className="relative overflow-hidden">
                    <img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundColor: c.color }} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{c.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[#C4704B] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block">Shop now &rarr;</span>
                      <span className="text-xs text-[#1A1A1A]/30">5 expert picks</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 text-center">More Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { slug: "dog-anxiety", name: "Anxiety & Calming", icon: "\u{1F49A}" },
                { slug: "dog-car-seats", name: "Car Seats", icon: "\u{1F697}" },
                { slug: "dog-water-fountains", name: "Water Fountains", icon: "\u{1F4A7}" },
                { slug: "dog-strollers", name: "Strollers", icon: "\u{1F6D2}" },
                { slug: "dog-backpacks", name: "Backpack Carriers", icon: "\u{1F392}" },
                { slug: "dog-feeders", name: "Auto Feeders", icon: "\u23F0" },
                { slug: "dog-boots", name: "Dog Boots", icon: "\u{1F97E}" },
                { slug: "dog-raincoats", name: "Raincoats", icon: "\u2614" },
                { slug: "dog-cooling", name: "Cooling Gear", icon: "\u2744\uFE0F" },
                { slug: "dog-puzzle-toys", name: "Puzzle Toys", icon: "\u{1F9E9}" },
                { slug: "dog-crates", name: "Crates & Kennels", icon: "\u{1F3E0}" },
                { slug: "dog-supplements", name: "Supplements", icon: "\u{1F48A}" },
                { slug: "dog-cameras", name: "Dog Cameras", icon: "\u{1F4F7}" },
                { slug: "dog-gps-trackers", name: "GPS Trackers", icon: "\u{1F4CD}" },
                { slug: "dog-dental", name: "Dental Care", icon: "\u{1F9B7}" },
                { slug: "dog-coats", name: "Coats & Jackets", icon: "\u{1F9E5}" },
                { slug: "dog-leashes", name: "Leashes", icon: "\u{1F43E}" },
                { slug: "dog-bowls", name: "Bowls & Feeders", icon: "\u{1F963}" },
                { slug: "puppy-essentials", name: "Puppy Essentials", icon: "\u{1F436}" },
                { slug: "dog-collars", name: "Collars & Tags", icon: "\u{1F4DB}" },
                { slug: "dog-training", name: "Training Tools", icon: "\u{1F3AF}" },
              ].map((c) => (
                <Link key={c.slug} href={`/best/${c.slug}`} className="flex items-center gap-2 bg-white rounded-xl p-3 hover:shadow-md hover:-translate-y-0.5 transition-all border border-[#D4C5A9]/30">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BREED SPOTLIGHT — Full-width split */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] md:min-h-[60vh]">
          <div className="relative overflow-hidden">
            <img src="/images/golden-retriever-holding-flower-outdoors.jpg" alt="Golden Retriever portrait" loading="lazy" decoding="async" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="relative flex items-center" style={{ background: '#5B7B5E' }}>
            {/* Subtle paw watermark */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='38' rx='8' ry='10' fill='%23fff'/%3E%3Ccircle cx='20' cy='26' r='4' fill='%23fff'/%3E%3Ccircle cx='40' cy='26' r='4' fill='%23fff'/%3E%3Ccircle cx='16' cy='34' r='3.5' fill='%23fff'/%3E%3Ccircle cx='44' cy='34' r='3.5' fill='%23fff'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />
            <div className="relative px-10 md:px-16 py-12">
              <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Breed Spotlight</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">Golden Retriever</h2>
              <p className="text-white/70 mt-4 leading-relaxed">America&apos;s favorite family dog. Friendly, intelligent, and devoted &mdash; Goldens thrive with the right products.</p>
              <div className="flex gap-8 mt-6 text-sm">
                <div><span className="font-bold text-white">55-75 lbs</span><br /><span className="text-white/50">Weight</span></div>
                <div><span className="font-bold text-white">10-12 yrs</span><br /><span className="text-white/50">Life Span</span></div>
                <div><span className="font-bold text-white">High</span><br /><span className="text-white/50">Energy</span></div>
              </div>
              <Link href="/breeds/golden-retriever" className="inline-block mt-8 bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm">See Our Picks for Goldens &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR BREEDS — Circular avatars */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Popular Breeds</h2>
            <p className="text-[#1A1A1A]/40 mt-2">Breed-specific care guides and product picks</p>
          </div>
          <Link href="/breeds" className="text-[#C4704B] text-sm font-semibold hover:text-[#b5623f] transition hidden sm:block">View all 50 &rarr;</Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {topBreeds.map((b) => (
            <Link key={b.slug} href={`/breeds/${b.slug}`} className="group flex-shrink-0 text-center snap-start">
              <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-white shadow-md group-hover:shadow-xl group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-[#C4704B] transition-all duration-300 mx-auto">
                <img src={breedAvatars[b.slug] || ""} alt={b.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <p className="font-semibold text-[#1A1A1A] text-xs mt-3 group-hover:text-[#C4704B] transition-all duration-300">{b.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY DOG PARENTS TRUST US */}
      <section className="py-20" style={{ background: '#FAF8F5' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">Why Dog Parents Trust <BrandName /></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '3px solid #C4704B' }}>
              <span className="text-3xl">&#127941;</span>
              <h3 className="font-bold text-[#1A1A1A] text-lg mt-4 mb-2">Retired AKC Breeder</h3>
              <p className="text-[#1A1A1A]/50 text-sm leading-relaxed">20+ years of hands-on experience with show-quality dogs</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '3px solid #5B7B5E' }}>
              <span className="text-3xl">&#128300;</span>
              <h3 className="font-bold text-[#1A1A1A] text-lg mt-4 mb-2">Research-Driven</h3>
              <p className="text-[#1A1A1A]/50 text-sm leading-relaxed">Every pick backed by vet input and thousands of owner reviews</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '3px solid #D4C5A9' }}>
              <span className="text-3xl">&#128175;</span>
              <h3 className="font-bold text-[#1A1A1A] text-lg mt-4 mb-2">No Sponsored Rankings</h3>
              <p className="text-[#1A1A1A]/50 text-sm leading-relaxed">We buy and test products ourselves &mdash; brands can&apos;t pay for placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006]">From the Blog</h2>
          <Link href="/blog" className="text-[#D35400] text-sm font-bold hover:text-[#A04000] transition hidden sm:block">All posts &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                {blogImages[p.slug] && (
                  <div className="overflow-hidden">
                    <img src={blogImages[p.slug]} alt={p.title} loading="lazy" decoding="async" className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block text-xs font-bold text-[#D35400] bg-[#F39C12]/15 px-2.5 py-0.5 rounded-full mb-2">{p.category}</span>
                  <h3 className="font-bold text-[#2D2006] text-xl leading-snug group-hover:text-[#D35400] transition-all duration-300">{p.title}</h3>
                  <p className="text-[#8B7355] text-sm mt-2 line-clamp-2">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)' }}>
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-white">Join the Pack &#128062;</h2>
            <p className="text-white/80 mt-4 leading-relaxed max-w-md mx-auto">Join dog parents who get our best picks, breed tips, and deals every week.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none border-0 bg-white/20 text-white placeholder-white/50" />
              <button className="bg-[#1A1A1A] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm hover:bg-[#2A2420] whitespace-nowrap">Subscribe Free</button>
            </div>
            <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
