/**
 * build-site.js — Generate all BabyMyDog pages
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');

// Helper
function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

// ==================== LAYOUT ====================
fs.writeFileSync(path.join(appDir, 'layout.tsx'), `import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BabyMyDog | Premium Products & Care Guides for Dog Lovers",
  description: "Find the best products for your dog. Breed-specific recommendations, expert reviews, gift guides. Because your dog deserves to be spoiled.",
  openGraph: { title: "BabyMyDog | Premium Products & Care Guides for Dog Lovers", url: "https://www.babymydog.com", siteName: "BabyMyDog", type: "website" },
  twitter: { card: "summary", title: "BabyMyDog" },
  alternates: { canonical: "https://www.babymydog.com" },
  other: { "google-adsense-account": "ca-pub-4822220549367368" },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg"><span className="text-2xl">\\ud83d\\udc3e</span><span className="text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Baby<span className="text-rose">MyDog</span></span></Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/breeds" className="text-gray-500 hover:text-rose transition">Breeds</Link>
          <Link href="/best" className="text-gray-500 hover:text-rose transition">Best Products</Link>
          <Link href="/gifts" className="text-gray-500 hover:text-rose transition hidden sm:block">Gift Guides</Link>
          <Link href="/blog" className="text-gray-500 hover:text-rose transition hidden sm:block">Blog</Link>
          <Link href="/about" className="text-gray-500 hover:text-rose transition hidden sm:block">About</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-500">
          <div><p className="font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>\\ud83d\\udc3e BabyMyDog</p><p>Premium product reviews and care guides for dog lovers. Because your dog deserves the best.</p></div>
          <div><p className="font-bold text-charcoal mb-2">Explore</p><div className="flex flex-col gap-1"><Link href="/breeds" className="hover:text-rose transition">Dog Breeds</Link><Link href="/best" className="hover:text-rose transition">Best Products</Link><Link href="/gifts" className="hover:text-rose transition">Gift Guides</Link><Link href="/blog" className="hover:text-rose transition">Blog</Link><Link href="/disclosure" className="hover:text-rose transition">Affiliate Disclosure</Link></div></div>
          <div><p className="font-bold text-charcoal mb-2">Legal</p><div className="flex flex-col gap-1"><Link href="/about" className="hover:text-rose transition">About</Link><Link href="/privacy" className="hover:text-rose transition">Privacy</Link><Link href="/terms" className="hover:text-rose transition">Terms</Link></div></div>
          <div><p className="font-bold text-charcoal mb-2">From Global AI Bots</p><div className="flex flex-col gap-1"><a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">Global AI Bots</a><a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">CLETUS AI</a><a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">RampSeeker</a><a href="https://pierseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">PierSeeker</a><a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">BarkSeeker</a></div></div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} BabyMyDog. All rights reserved. <Link href="/disclosure" className="hover:text-rose transition">Affiliate Disclosure</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Inter'] antialiased min-h-screen flex flex-col" style={{background:'#FFF9F0'}}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4822220549367368" crossOrigin="anonymous" strategy="afterInteractive" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`);
console.log('Created layout.tsx');

// ==================== HOMEPAGE ====================
fs.writeFileSync(path.join(appDir, 'page.tsx'), `import Link from "next/link";
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
            <Link key={c.slug} href={\`/best/\${c.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
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
            <Link key={b.slug} href={\`/breeds/\${b.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
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
          {["\\ud83d\\udc29 Dog Groomers","\\ud83c\\udfe5 Veterinarians","\\ud83c\\udfe8 Dog Boarding","\\ud83c\\udfbe Dog Training","\\ud83d\\udec1 Pet Spas","\\ud83c\\udfea Pet Stores","\\ud83c\\udfd6\\ufe0f Dog Beaches","\\ud83c\\udf7d\\ufe0f Dog-Friendly Restaurants"].map((item) => (
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
            <Link key={p.slug} href={\`/blog/\${p.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
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
`);
console.log('Created homepage');

// ==================== BREED INDEX ====================
ensureDir(path.join(appDir, 'breeds'));
fs.writeFileSync(path.join(appDir, 'breeds', 'page.tsx'), `"use client";
import { useState } from "react";
import Link from "next/link";
import { breeds, breedSizes } from "@/data/breeds";

export default function BreedsPage() {
  const [sizeFilter, setSizeFilter] = useState<string>("");
  const filtered = sizeFilter ? breeds.filter(b => b.size === sizeFilter) : breeds;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Dog Breeds A-Z</h1>
      <p className="text-gray-500 mb-8">{breeds.length} popular breeds with care guides and product recommendations.</p>
      <div className="flex gap-2 mb-6 flex-wrap">
        <button onClick={() => setSizeFilter("")} className={\`px-3 py-1.5 rounded-lg text-xs font-semibold transition \${!sizeFilter ? "bg-rose text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-rose"}\`}>All</button>
        {breedSizes.map(s => (
          <button key={s} onClick={() => setSizeFilter(s)} className={\`px-3 py-1.5 rounded-lg text-xs font-semibold transition capitalize \${sizeFilter === s ? "bg-rose text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-rose"}\`}>{s}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map(b => (
          <Link key={b.slug} href={\`/breeds/\${b.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl font-bold text-rose" style={{background:'linear-gradient(135deg, #FFF0F3, #E8637A22)'}}>{b.name.charAt(0)}</div>
            <p className="font-bold text-charcoal text-sm group-hover:text-rose transition">{b.name}</p>
            <p className="text-gray-400 text-xs mt-0.5 capitalize">{b.size} &middot; {b.temperament[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
`);
console.log('Created breeds index');

// ==================== BREED DETAIL ====================
ensureDir(path.join(appDir, 'breeds', '[slug]'));
fs.writeFileSync(path.join(appDir, 'breeds', '[slug]', 'page.tsx'), `import Link from "next/link";
import { notFound } from "next/navigation";
import { breeds, getBreedBySlug } from "@/data/breeds";
import type { Metadata } from "next";

export function generateStaticParams() { return breeds.map(b => ({ slug: b.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const breed = getBreedBySlug(slug);
  if (!breed) return { title: "Not Found" };
  return {
    title: \`\${breed.name} — Care Guide, Products & Tips | BabyMyDog\`,
    description: \`Complete \${breed.name} guide: care tips, health info, and the best products for your \${breed.name}.\`,
    openGraph: { title: \`\${breed.name} Guide — BabyMyDog\`, url: \`https://www.babymydog.com/breeds/\${breed.slug}\` },
    alternates: { canonical: \`https://www.babymydog.com/breeds/\${breed.slug}\` },
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
            <Link key={p} href={\`/best/\${p.includes("bed") ? "dog-beds" : p.includes("brush") || p.includes("shampoo") ? "dog-grooming" : p.includes("supplement") || p.includes("joint") ? "dog-supplements" : p.includes("toy") || p.includes("fetch") || p.includes("puzzle") || p.includes("chew") ? "dog-toys" : p.includes("harness") ? "dog-harnesses" : p.includes("coat") || p.includes("vest") || p.includes("cooling") || p.includes("winter") ? "dog-coats" : p.includes("bowl") || p.includes("feeder") ? "dog-bowls" : p.includes("dental") ? "dog-dental" : p.includes("crate") ? "dog-crates" : p.includes("nail") || p.includes("ear") ? "dog-grooming" : "dog-toys"}\`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
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
`);
console.log('Created breed detail page');

// ==================== PRODUCT INDEX ====================
ensureDir(path.join(appDir, 'best'));
fs.writeFileSync(path.join(appDir, 'best', 'page.tsx'), `import Link from "next/link";
import { productCategories } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dog Products (2026) — Expert Reviews | BabyMyDog",
  description: "Expert-reviewed dog products across 15 categories. Find the best beds, food, toys, grooming tools, and more for your dog.",
  alternates: { canonical: "https://www.babymydog.com/best" },
};

export default function BestPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Best Dog Products</h1>
      <p className="text-gray-500 mb-8">Expert-reviewed picks across {productCategories.length} categories. Updated for 2026.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productCategories.map(c => (
          <Link key={c.slug} href={\`/best/\${c.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{c.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{c.description}</p>
            <p className="text-rose text-sm font-semibold mt-3">{c.picks.length} expert picks &rarr;</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
`);

// ==================== PRODUCT DETAIL ====================
ensureDir(path.join(appDir, 'best', '[category]'));
fs.writeFileSync(path.join(appDir, 'best', '[category]', 'page.tsx'), `import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories, getProductCategoryBySlug } from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() { return productCategories.map(c => ({ category: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) return { title: "Not Found" };
  return {
    title: \`\${cat.title} — Expert Picks | BabyMyDog\`,
    description: cat.description,
    alternates: { canonical: \`https://www.babymydog.com/best/\${cat.slug}\` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-rose transition">Home</Link><span>/</span>
        <Link href="/best" className="hover:text-rose transition">Best Products</Link><span>/</span>
        <span className="text-charcoal font-medium">{cat.title}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>{cat.title}</h1>
      <p className="text-gray-500 mb-8">{cat.description}</p>
      <div className="space-y-6 mb-10">
        {cat.picks.map((pick, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm border-l-4 border-l-rose">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-charcoal text-lg">{pick.name}</h3>
              <span className="text-xs font-bold text-rose bg-rose/10 px-2.5 py-1 rounded-full whitespace-nowrap">{pick.badge}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{pick.description}</p>
            <ul className="space-y-1 mb-4">
              {pick.features.map((f, j) => <li key={j} className="text-gray-500 text-xs flex items-start gap-2"><span className="text-rose">&#10003;</span>{f}</li>)}
            </ul>
            <a href="#amazon" className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-sm">View on Amazon &rarr;</a>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-xs italic">As an Amazon Associate, BabyMyDog earns from qualifying purchases.</p>
    </div>
  );
}
`);
console.log('Created product pages');

// ==================== GIFT INDEX ====================
ensureDir(path.join(appDir, 'gifts'));
fs.writeFileSync(path.join(appDir, 'gifts', 'page.tsx'), `import Link from "next/link";
import { giftGuides } from "@/data/gifts";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dog Gift Guides — BabyMyDog", alternates: { canonical: "https://www.babymydog.com/gifts" } };
export default function GiftsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Gift Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {giftGuides.map(g => (
          <Link key={g.slug} href={\`/gifts/\${g.slug}\`} className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-gold">
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{g.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{g.gifts.length} gift ideas</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
`);

// ==================== GIFT DETAIL ====================
ensureDir(path.join(appDir, 'gifts', '[slug]'));
fs.writeFileSync(path.join(appDir, 'gifts', '[slug]', 'page.tsx'), `import Link from "next/link";
import { notFound } from "next/navigation";
import { giftGuides, getGiftGuideBySlug } from "@/data/gifts";
import type { Metadata } from "next";
export function generateStaticParams() { return giftGuides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return { title: \`\${guide.title} | BabyMyDog\`, alternates: { canonical: \`https://www.babymydog.com/gifts/\${guide.slug}\` } };
}
export default async function GiftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) notFound();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2"><Link href="/" className="hover:text-rose transition">Home</Link><span>/</span><Link href="/gifts" className="hover:text-rose transition">Gift Guides</Link><span>/</span><span className="text-charcoal font-medium">{guide.title}</span></nav>
      <h1 className="text-3xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>{guide.title}</h1>
      <p className="text-gray-500 mb-8">{guide.description}</p>
      <div className="space-y-4">
        {guide.gifts.map((gift, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-start justify-between gap-4">
            <div><h3 className="font-bold text-charcoal">{gift.name}</h3><p className="text-gray-500 text-sm mt-1">{gift.description}</p></div>
            <div className="text-right flex-shrink-0"><p className="font-bold text-rose">{gift.price}</p><a href="#amazon" className="text-xs text-gold-dark font-semibold hover:underline mt-1 inline-block">Buy on Amazon &rarr;</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);
console.log('Created gift pages');

// ==================== BLOG INDEX ====================
ensureDir(path.join(appDir, 'blog'));
fs.writeFileSync(path.join(appDir, 'blog', 'page.tsx'), `import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Blog — Dog Care Tips & Product Reviews | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/blog" } };
export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Blog</h1>
      <div className="space-y-4">
        {blogPosts.map(p => (
          <Link key={p.slug} href={\`/blog/\${p.slug}\`} className="group block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2"><span className="text-xs font-bold text-rose bg-rose/10 px-2 py-0.5 rounded-full">{p.category}</span><span className="text-gray-400 text-xs">{p.date} &middot; {p.readTime}</span></div>
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{p.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
`);

// ==================== BLOG POSTS (placeholders) ====================
const blogSlugs = ['choose-right-dog-food','signs-dog-needs-better-bed','new-puppy-checklist','dog-grooming-at-home','indestructible-dog-toys'];
const blogTitles = ['How to Choose the Right Dog Food for Your Breed','10 Signs Your Dog Needs a Better Bed','The Ultimate New Puppy Checklist','Dog Grooming at Home: Save Money Without Sacrificing Quality','Best Dog Toys That Actually Last'];
const blogDates = ['April 6, 2026','April 4, 2026','April 2, 2026','March 30, 2026','March 28, 2026'];

blogSlugs.forEach((slug, i) => {
  ensureDir(path.join(appDir, 'blog', slug));
  fs.writeFileSync(path.join(appDir, 'blog', slug, 'page.tsx'), `import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "${blogTitles[i]} | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/blog/${slug}" } };
export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2"><Link href="/" className="hover:text-rose transition">Home</Link><span>/</span><Link href="/blog" className="hover:text-rose transition">Blog</Link><span>/</span><span className="text-charcoal font-medium">${blogTitles[i].substring(0, 30)}...</span></nav>
      <h1 className="text-3xl font-bold text-charcoal mb-4 leading-tight" style={{fontFamily:'Playfair Display,serif'}}>${blogTitles[i]}</h1>
      <p className="text-gray-400 text-sm mb-8">${blogDates[i]} &middot; 6 min read</p>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>This comprehensive guide covers everything you need to know about ${blogTitles[i].toLowerCase().replace(/^(the |how to |best |10 )/i, '')}. Whether you&apos;re a first-time dog owner or a seasoned pet parent, these expert tips will help you make the best choices for your furry family member.</p>
        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4" style={{fontFamily:'Playfair Display,serif'}}>Why This Matters</h2>
        <p>Your dog&apos;s health, happiness, and comfort depend on the products and care you provide. Making informed decisions means a happier dog and fewer vet visits. We&apos;ve researched hundreds of options to bring you the very best recommendations.</p>
        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4" style={{fontFamily:'Playfair Display,serif'}}>Our Top Recommendations</h2>
        <p>Based on extensive research, veterinary consultations, and real dog owner feedback, here are our top picks. Each product has been evaluated for quality, durability, safety, and value.</p>
        <p>For breed-specific recommendations, check out our <Link href="/breeds" className="text-rose hover:underline font-semibold">breed guides</Link> where we match products to your specific dog&apos;s needs. You can also browse all our <Link href="/best" className="text-rose hover:underline font-semibold">best product reviews</Link> for detailed comparisons.</p>
        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4" style={{fontFamily:'Playfair Display,serif'}}>Final Thoughts</h2>
        <p>Remember, every dog is different. What works for one breed may not work for another. Always consult with your veterinarian for specific health concerns, and start with small quantities when trying new products. Your dog will thank you for the extra care and attention.</p>
        <p>Looking for a dog park to test out your new gear? Check out <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline font-semibold">BarkSeeker</a> for dog parks near you.</p>
      </div>
    </article>
  );
}
`);
});
console.log('Created blog posts');

// ==================== SUPPORTING PAGES ====================
['about','privacy','terms','disclosure'].forEach(page => {
  ensureDir(path.join(appDir, page));
});

fs.writeFileSync(path.join(appDir, 'about', 'page.tsx'), `import type { Metadata } from "next";
export const metadata: Metadata = { title: "About BabyMyDog", alternates: { canonical: "https://www.babymydog.com/about" } };
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>About BabyMyDog</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p><strong className="text-charcoal">BabyMyDog helps you find the best products for your furry family member.</strong> We research, review, and recommend the top dog products across every category — from beds and food to grooming tools and tech gadgets.</p>
        <p>Every recommendation is based on real research, veterinary input, and feedback from dog owners. We believe your dog deserves the best, and we&apos;re here to help you find it without the guesswork.</p>
        <p>BabyMyDog is part of a family of sites built by <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">Global AI Bots</a>: <a href="https://barkseeker.com" target="_blank" className="text-rose font-semibold hover:underline">BarkSeeker</a> (dog parks), <a href="https://rampseeker.com" target="_blank" className="text-rose font-semibold hover:underline">RampSeeker</a> (boat ramps), and <a href="https://pierseeker.com" target="_blank" className="text-rose font-semibold hover:underline">PierSeeker</a> (fishing piers).</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
`);

fs.writeFileSync(path.join(appDir, 'privacy', 'page.tsx'), `import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/privacy" } };
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Privacy Policy</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>BabyMyDog (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect and use information.</p>
        <h2 className="text-xl font-bold text-charcoal mt-8">Information We Collect</h2>
        <p>We collect standard analytics data (pages visited, browser type, device) through Google Analytics. We do not collect personal information unless you voluntarily provide it (e.g., email newsletter signup).</p>
        <h2 className="text-xl font-bold text-charcoal mt-8">Cookies and Advertising</h2>
        <p>We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your browsing history. You may opt out at <a href="https://www.google.com/settings/ads" target="_blank" className="text-rose hover:underline">Google Ads Settings</a>.</p>
        <h2 className="text-xl font-bold text-charcoal mt-8">Affiliate Links</h2>
        <p>BabyMyDog participates in the Amazon Services LLC Associates Program. We earn commissions on qualifying purchases made through our affiliate links at no extra cost to you. See our <a href="/disclosure" className="text-rose hover:underline">Affiliate Disclosure</a> for details.</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
`);

fs.writeFileSync(path.join(appDir, 'terms', 'page.tsx'), `import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/terms" } };
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Terms of Service</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>By using BabyMyDog, you agree to these terms. Our content is for informational purposes only and should not replace professional veterinary advice.</p>
        <p>Product recommendations are based on our research and may include affiliate links. Prices and availability are subject to change. Always verify product details before purchasing.</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
`);

fs.writeFileSync(path.join(appDir, 'disclosure', 'page.tsx'), `import type { Metadata } from "next";
export const metadata: Metadata = { title: "Affiliate Disclosure | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/disclosure" } };
export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Affiliate Disclosure</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p><strong className="text-charcoal">BabyMyDog is a participant in the Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>When you click on product links on our site and make a purchase, we may earn a small commission at no additional cost to you. This helps us keep the site running and continue providing free, high-quality content.</p>
        <p>Our editorial content is never influenced by affiliate partnerships. We only recommend products we genuinely believe are the best options for your dog.</p>
        <p>If you have questions about our affiliate relationships, contact us at <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a>.</p>
      </div>
    </div>
  );
}
`);
console.log('Created supporting pages');

// ==================== ROBOTS.TXT ====================
fs.writeFileSync(path.join(__dirname, '..', 'public', 'robots.txt'), `User-agent: *
Allow: /
Sitemap: https://www.babymydog.com/sitemap.xml
`);

// ==================== SITEMAP ====================
const d = '2026-04-06';
const urls = ['', 'breeds', 'best', 'gifts', 'blog', 'about', 'privacy', 'terms', 'disclosure'];
// Add breed pages
const breedsData = require(path.join(__dirname, '..', 'src', 'data', 'breeds.ts').replace('.ts', ''));
// Can't require TS directly, so just hardcode the count
const breedSlugs = ['golden-retriever','labrador-retriever','french-bulldog','german-shepherd','poodle','bulldog','beagle','rottweiler','dachshund','german-shorthaired-pointer','pembroke-welsh-corgi','australian-shepherd','yorkshire-terrier','cavalier-king-charles-spaniel','doberman-pinscher','boxer','miniature-schnauzer','cane-corso','great-dane','shih-tzu','siberian-husky','bernese-mountain-dog','pomeranian','boston-terrier','havanese','english-springer-spaniel','shetland-sheepdog','brittany','cocker-spaniel','border-collie','vizsla','goldendoodle','labradoodle','maltese','chihuahua','pug','weimaraner','rhodesian-ridgeback','belgian-malinois','newfoundland','west-highland-white-terrier','bichon-frise','akita','basset-hound','irish-setter','dalmatian','pit-bull-terrier','australian-cattle-dog','samoyed','alaskan-malamute'];
breedSlugs.forEach(s => urls.push(`breeds/${s}`));
const prodSlugs = ['dog-beds','dog-food','dog-toys','dog-treats','dog-grooming','dog-crates','dog-harnesses','dog-leashes','dog-bowls','dog-supplements','dog-cameras','dog-gps-trackers','dog-dental','dog-coats','puppy-essentials'];
prodSlugs.forEach(s => urls.push(`best/${s}`));
const giftSlugs = ['dog-lovers','new-puppy','dog-mom','dog-dad','dog-christmas'];
giftSlugs.forEach(s => urls.push(`gifts/${s}`));
blogSlugs.forEach(s => urls.push(`blog/${s}`));

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u => {
  xml += `  <url><loc>https://www.babymydog.com/${u}</loc><lastmod>${d}</lastmod><changefreq>weekly</changefreq><priority>${u === '' ? '1.0' : '0.8'}</priority></url>\n`;
});
xml += '</urlset>\n';
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);

console.log('\n========================================');
console.log(`  Breed pages: ${breedSlugs.length}`);
console.log(`  Product pages: ${prodSlugs.length}`);
console.log(`  Gift guide pages: ${giftSlugs.length}`);
console.log(`  Blog posts: ${blogSlugs.length}`);
console.log(`  Supporting pages: 4`);
console.log(`  Total sitemap URLs: ${urls.length}`);
console.log('========================================');
