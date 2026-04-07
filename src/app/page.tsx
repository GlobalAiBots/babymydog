import Link from "next/link";
import { breeds } from "@/data/breeds";
import { blogPosts } from "@/data/blog-posts";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const topBreeds = breeds.slice(0, 8);

const categories = [
  { slug: "dog-beds", name: "Beds & Comfort", img: "category-beds", alt: "Cozy dog bed" },
  { slug: "dog-food", name: "Food & Nutrition", img: "category-food", alt: "Premium dog food" },
  { slug: "dog-toys", name: "Toys & Play", img: "category-toys", alt: "Dog playing" },
  { slug: "dog-grooming", name: "Grooming & Care", img: "category-grooming", alt: "Dog grooming" },
  { slug: "dog-harnesses", name: "Gear & Accessories", img: "category-gear", alt: "Dog harness" },
  { slug: "/gifts", name: "Gift Shop", img: "category-gifts", alt: "Dog gifts" },
];

export default function Home() {
  return (
    <div>
      {/* HERO — Two column */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-[56px] leading-[1.1] font-bold text-charcoal tracking-tight">
              Everything Your Dog Needs.{" "}
              <span className="text-terra">Curated by Experts.</span>
            </h1>
            <p className="text-charcoal/50 mt-6 text-lg leading-relaxed max-w-md">Breed-specific product picks, honest reviews, and gift guides for dog people.</p>
            <div className="flex gap-4 mt-10">
              <Link href="/best" className="bg-terra hover:bg-terra-dark text-white font-semibold px-7 py-3.5 rounded-full transition text-sm">Explore Products</Link>
              <Link href="/breeds" className="bg-warm-gray hover:bg-sand text-charcoal font-semibold px-7 py-3.5 rounded-full transition text-sm">Find Your Breed</Link>
            </div>
          </div>
          <div>
            <ImagePlaceholder id="hero-1" alt="Happy dog owner hugging a golden retriever" aspect="hero" className="rounded-3xl" priority={true} />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-charcoal/5 py-5" style={{background:'#F0EEEB'}}>
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-charcoal/40 font-medium">
          <span>Independent Reviews</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>No Sponsored Rankings</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Updated Monthly</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Trusted by Dog Owners Nationwide</span>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20" style={{background:'#F0EEEB'}}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Shop by Category</h2>
            <p className="text-charcoal/40 mt-3">Expert-reviewed picks in every category</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <Link key={c.slug} href={c.slug.startsWith('/') ? c.slug : `/best/${c.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
                  <div className="overflow-hidden">
                    <ImagePlaceholder id={c.img} alt={c.alt} aspect="landscape" className="rounded-none group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-charcoal text-lg">{c.name}</h3>
                    <span className="text-terra text-sm mt-1 inline-block group-hover:translate-x-1 transition-transform">Shop now &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BREED SPOTLIGHT */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder id="breed-featured-1" alt="Golden Retriever portrait" aspect="square" className="rounded-3xl" />
          <div>
            <p className="text-terra text-sm font-semibold uppercase tracking-wider mb-3">Breed Spotlight</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">Golden Retriever</h2>
            <p className="text-charcoal/50 mt-4 leading-relaxed">America&apos;s favorite family dog. Friendly, intelligent, and devoted — Goldens thrive with the right products.</p>
            <div className="flex gap-6 mt-6 text-sm">
              <div><span className="font-bold text-charcoal">55-75 lbs</span><br/><span className="text-charcoal/40">Weight</span></div>
              <div><span className="font-bold text-charcoal">10-12 yrs</span><br/><span className="text-charcoal/40">Life Span</span></div>
              <div><span className="font-bold text-charcoal">High</span><br/><span className="text-charcoal/40">Energy</span></div>
            </div>
            <Link href="/breeds/golden-retriever" className="inline-block mt-8 bg-terra hover:bg-terra-dark text-white font-semibold px-7 py-3 rounded-full transition text-sm">See Our Picks for Goldens &rarr;</Link>
          </div>
        </div>
      </section>

      {/* POPULAR BREEDS */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-charcoal">Popular Breeds</h2>
            <p className="text-charcoal/40 mt-2">Breed-specific care guides and product picks</p>
          </div>
          <Link href="/breeds" className="text-terra text-sm font-semibold hover:text-terra-dark transition hidden sm:block">View all 50 &rarr;</Link>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6">
          {topBreeds.map((b) => (
            <Link key={b.slug} href={`/breeds/${b.slug}`} className="group text-center">
              <ImagePlaceholder id={`breed-avatar-${b.slug}`} alt={b.name} aspect="square" className="rounded-full w-full group-hover:scale-105 transition-transform duration-300" />
              <p className="font-semibold text-charcoal text-xs mt-3 group-hover:text-terra transition">{b.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-charcoal">From the Blog</h2>
          <Link href="/blog" className="text-terra text-sm font-semibold hover:text-terra-dark transition hidden sm:block">All posts &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
                <ImagePlaceholder id={`blog-${i + 1}`} alt={p.title} aspect="wide" className="rounded-none group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <p className="text-charcoal/30 text-xs mb-2">{p.date}</p>
                  <h3 className="font-bold text-charcoal leading-snug group-hover:text-terra transition">{p.title}</h3>
                  <p className="text-charcoal/40 text-sm mt-2 line-clamp-2">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20" style={{background:'#F0EEEB'}}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Why Trust Us</h2>
            <p className="text-charcoal/40 mt-2">We do the research so you don&apos;t have to</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Research-Based", desc: "We test and compare dozens of products before making a single recommendation" },
              { title: "No Sponsored Rankings", desc: "Our picks are based on quality, not payment. Period." },
              { title: "Dog Owners First", desc: "Real recommendations from real dog people who use these products daily" },
              { title: "Updated Monthly", desc: "We refresh our picks as new products launch and prices change" },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-white" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
                  <div className="w-3 h-3 rounded-full bg-terra" />
                </div>
                <h3 className="font-bold text-charcoal text-sm mb-2">{f.title}</h3>
                <p className="text-charcoal/40 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20" style={{background:'#5B7B5E'}}>
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ImagePlaceholder id="newsletter" alt="Woman kissing her golden retriever - join the BabyMyDog community" aspect="square" className="rounded-3xl" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Join the Pack</h2>
              <p className="text-white/60 mt-4 leading-relaxed">Weekly product picks, breed tips, and exclusive deals. Free forever.</p>
              <div className="flex gap-3 mt-8 max-w-md">
                <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none border-0" style={{background:'rgba(255,255,255,0.15)', color:'white'}} />
                <button className="bg-white text-sage font-bold px-7 py-3.5 rounded-full transition text-sm hover:bg-cream whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
