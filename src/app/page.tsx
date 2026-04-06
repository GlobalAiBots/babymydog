import Link from "next/link";
import { breeds } from "@/data/breeds";
import { productCategories } from "@/data/products";
import { blogPosts } from "@/data/blog-posts";

const topBreeds = breeds.slice(0, 12);
const topProducts = productCategories.slice(0, 6);

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="py-20 md:py-28 text-center px-4" style={{background:'linear-gradient(135deg, #FFF9F0 0%, #FFF0F3 50%, #FFF9F0 100%)'}}>
        <p className="text-rose text-sm font-bold tracking-wider uppercase mb-3">Premium Dog Care</p>
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight max-w-3xl mx-auto" style={{fontFamily:'Playfair Display,serif'}}>Because Your Dog Deserves the Best</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">Expert product reviews, breed-specific recommendations, and gift guides for dog lovers.</p>
        <div className="flex gap-3 justify-center mt-8 flex-wrap">
          <Link href="/breeds" className="bg-rose hover:bg-rose-dark text-white font-bold px-6 py-3 rounded-lg transition shadow-sm text-sm">Explore Breeds</Link>
          <Link href="/best" className="bg-plum hover:bg-plum-light text-white font-bold px-6 py-3 rounded-lg transition shadow-sm text-sm">Best Products</Link>
          <Link href="/gifts" className="border-2 border-rose text-rose hover:bg-rose hover:text-white font-bold px-6 py-3 rounded-lg transition text-sm">Gift Guides</Link>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Best Dog Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topProducts.map((c) => (
            <Link key={c.slug} href={`/best/${c.slug}`} className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
              <h3 className="font-bold text-charcoal group-hover:text-rose transition text-sm">{c.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{c.picks.length} expert picks</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6"><Link href="/best" className="text-rose font-semibold text-sm hover:text-rose-dark transition">View all product categories &rarr;</Link></div>
      </section>

      {/* SHOP BY BREED */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Shop by Breed</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {topBreeds.map((b) => (
            <Link key={b.slug} href={`/breeds/${b.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-xl" style={{background:'linear-gradient(135deg, #FFF0F3, #E8637A22)'}}>{b.name.charAt(0)}</div>
              <p className="font-bold text-charcoal text-xs group-hover:text-rose transition">{b.name}</p>
              <p className="text-gray-400 text-[10px] mt-0.5">{b.size}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6"><Link href="/breeds" className="text-rose font-semibold text-sm hover:text-rose-dark transition">View all 50 breeds &rarr;</Link></div>
      </section>

      {/* COMING SOON */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Coming Soon</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["\ud83d\udc29 Dog Groomers","\ud83c\udfe5 Veterinarians","\ud83c\udfe8 Dog Boarding","\ud83c\udfbe Dog Training","\ud83d\udec1 Pet Spas","\ud83c\udfea Pet Stores","\ud83c\udfd6\ufe0f Dog Beaches","\ud83c\udf7d\ufe0f Dog-Friendly Restaurants"].map((item) => (
            <div key={item} className="bg-white border border-gray-200 rounded-xl p-4 text-center opacity-50">
              <p className="text-sm font-bold text-charcoal">{item}</p>
              <p className="text-gray-400 text-xs mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Latest from the Blog</h2>
          <Link href="/blog" className="text-sm font-semibold text-rose hover:text-rose-dark transition">All posts &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {blogPosts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <p className="text-gray-400 text-xs mb-1">{p.date}</p>
              <h3 className="font-bold text-charcoal group-hover:text-rose transition text-sm">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-charcoal mb-4" style={{fontFamily:'Playfair Display,serif'}}>FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "What is BabyMyDog?", a: "BabyMyDog is a premium dog product review site. We help you find the best products for your specific breed with expert recommendations." },
            { q: "Are your reviews independent?", a: "Yes. We research and test products independently. We may earn affiliate commissions on purchases, but this never affects our recommendations." },
            { q: "Is BabyMyDog free?", a: "Yes, all our content is completely free. We earn revenue through affiliate partnerships and advertising." },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-rose transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* SUBMIT */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Get Weekly Dog Product Picks</h2>
          <p className="text-gray-500 text-sm mb-5">The best new products, deals, and recommendations delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-rose transition" style={{background:'#FFF9F0'}} />
            <button className="bg-rose hover:bg-rose-dark text-white font-bold px-5 py-3 rounded-lg transition shadow-sm text-sm">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
