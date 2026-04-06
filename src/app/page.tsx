import Link from "next/link";
import { breeds } from "@/data/breeds";
import { blogPosts } from "@/data/blog-posts";

const topBreeds = breeds.slice(0, 8);

const categories = [
  { slug: "dog-beds", emoji: "&#128716;", name: "Beds & Comfort", tag: "Sweet dreams start here", bg: "#E8637A" },
  { slug: "dog-food", emoji: "&#127830;", name: "Food & Nutrition", tag: "Fuel their best life", bg: "#F0C75E" },
  { slug: "dog-toys", emoji: "&#129528;", name: "Toys & Play", tag: "Unleash the fun", bg: "#87CEEB" },
  { slug: "dog-grooming", emoji: "&#10024;", name: "Grooming & Care", tag: "Look good, feel good", bg: "#4A1942" },
  { slug: "dog-harnesses", emoji: "&#129466;", name: "Harnesses & Leashes", tag: "Walk in style", bg: "#2D6A4F" },
  { slug: "/gifts", emoji: "&#127873;", name: "Gift Ideas", tag: "Make their tail wag", bg: "#E8637A" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden" style={{background:'linear-gradient(135deg, #FFF9F0 0%, #FFF0F3 40%, #FFF9F0 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle, #E8637A 1px, transparent 1px)', backgroundSize:'32px 32px'}} />
        <div className="relative z-10">
          <p className="text-rose text-sm font-semibold tracking-widest uppercase mb-4">Premium Dog Care</p>
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1] max-w-3xl mx-auto" style={{fontFamily:'Playfair Display,serif'}}>
            Spoil Your Dog.<br /><span className="text-rose">They Deserve It.</span>
          </h1>
          <p className="text-gray-500 mt-6 max-w-lg mx-auto text-lg leading-relaxed">Expert-picked products, breed-specific recommendations, and everything your pup needs to live their best life.</p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link href="/best" className="bg-rose hover:bg-rose-dark text-white font-bold px-8 py-4 rounded-full transition shadow-lg shadow-rose/20 text-sm">Shop Best Products</Link>
            <Link href="/breeds" className="bg-white hover:bg-gray-50 text-charcoal font-bold px-8 py-4 rounded-full transition shadow-lg border border-gray-200 text-sm">Find Your Breed</Link>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Shop by Category</h2>
          <p className="text-gray-400 mt-2">Expert-reviewed picks in every category</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Link key={c.slug} href={c.slug.startsWith('/') ? c.slug : `/best/${c.slug}`} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300" style={{background: c.bg}} />
              <div className="relative z-10">
                <p className="text-4xl mb-4" dangerouslySetInnerHTML={{__html: c.emoji}} />
                <h3 className="text-xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>{c.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{c.tag}</p>
                <span className="inline-block mt-4 text-rose text-sm font-semibold group-hover:translate-x-1 transition-transform">Explore picks &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR BREEDS */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Popular Breeds</h2>
          <p className="text-gray-400 mt-2">Breed-specific care guides and product picks</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {topBreeds.map((b) => (
            <Link key={b.slug} href={`/breeds/${b.slug}`} className="group text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-rose shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" style={{background:'linear-gradient(135deg, #FFF0F3, #FDE8EC)'}}>
                {b.name.charAt(0)}
              </div>
              <p className="font-bold text-charcoal text-sm group-hover:text-rose transition">{b.name}</p>
              <p className="text-gray-400 text-xs capitalize mt-0.5">{b.size} &middot; {b.temperament[0]}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/breeds" className="text-rose font-semibold text-sm hover:text-rose-dark transition">View all 50 breeds &rarr;</Link>
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Latest from the Blog</h2>
            <p className="text-gray-400 text-sm mt-1">Tips, guides, and expert advice</p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-rose hover:text-rose-dark transition hidden sm:block">All posts &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="h-36 flex items-center justify-center" style={{background: p.gradient}}>
                <span className="text-white/80 text-4xl">&#128054;</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-rose bg-rose/10 px-2 py-0.5 rounded-full">{p.category}</span>
                  <span className="text-gray-400 text-xs">{p.readTime}</span>
                </div>
                <h3 className="font-bold text-charcoal group-hover:text-rose transition leading-snug">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY DOG OWNERS LOVE US */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Why Dog Owners Love Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "&#128269;", title: "Expert Research", desc: "Every pick is backed by hours of research and real owner feedback" },
            { icon: "&#128054;", title: "Breed-Specific", desc: "Recommendations tailored to your dog&apos;s unique needs" },
            { icon: "&#11088;", title: "No Sponsored Rankings", desc: "Our reviews are never influenced by brand partnerships" },
            { icon: "&#128197;", title: "Updated Monthly", desc: "We continuously test and update our recommendations" },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl bg-white shadow-sm border border-gray-100" dangerouslySetInnerHTML={{__html: f.icon}} />
              <h3 className="font-bold text-charcoal text-sm mb-1">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-10 text-center shadow-lg border border-gray-100">
          <p className="text-3xl mb-2">&#128062;</p>
          <h2 className="text-2xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Join the Pack</h2>
          <p className="text-gray-400 text-sm mb-6">Weekly picks for pampered pups. No spam, just tail wags.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 text-sm outline-none focus:border-rose focus:ring-2 focus:ring-rose/10 transition" style={{background:'#FFF9F0'}} />
            <button className="bg-rose hover:bg-rose-dark text-white font-bold px-7 py-3.5 rounded-full transition shadow-md shadow-rose/20 text-sm whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="max-w-5xl mx-auto px-4 py-12 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Coming Soon</h2>
          <p className="text-gray-400 text-sm mt-1">More ways to pamper your pup</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["&#128041; Groomers","&#127973; Vets","&#127976; Boarding","&#127934; Training","&#128705; Pet Spas","&#127978; Pet Stores","&#127964;&#65039; Dog Beaches","&#127861; Dog-Friendly Dining"].map((item) => (
            <div key={item} className="bg-white/60 rounded-2xl p-5 text-center border border-gray-100 opacity-50">
              <p className="text-sm font-semibold text-charcoal" dangerouslySetInnerHTML={{__html: item}} />
              <p className="text-gray-400 text-xs mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
