import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BabyMyDog | Premium Products & Care Guides for Dog Lovers",
  description: "Find the best products for your dog. Breed-specific recommendations, expert reviews, gift guides. Because your dog deserves to be spoiled.",
  openGraph: { title: "BabyMyDog | Premium Products & Care Guides for Dog Lovers", url: "https://babymydog.com", siteName: "BabyMyDog", type: "website" },
  twitter: { card: "summary", title: "BabyMyDog" },
  alternates: { canonical: "https://babymydog.com" },
  other: { "google-adsense-account": "ca-pub-4822220549367368" },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
          <span className="text-2xl">&#128062;</span>
          <span className="text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Baby<span className="text-rose">MyDog</span></span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-7 text-sm font-medium">
          <Link href="/breeds" className="text-gray-500 hover:text-rose transition">Breeds</Link>
          <Link href="/best" className="text-gray-500 hover:text-rose transition">Best Products</Link>
          <Link href="/gifts" className="text-gray-500 hover:text-rose transition hidden sm:block">Gift Guides</Link>
          <Link href="/blog" className="text-gray-500 hover:text-rose transition hidden sm:block">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-20" style={{background:'#4A1942'}}>
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="font-bold text-white text-lg mb-3" style={{fontFamily:'Playfair Display,serif'}}>&#128062; BabyMyDog</p>
            <p className="text-white/60 leading-relaxed">Expert-picked products for pampered pups. Because your dog deserves to be spoiled.</p>
            <div className="mt-4">
              <p className="text-white/40 text-xs mb-2">Join the Pack</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2 rounded-full text-xs bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-rose transition" />
                <button className="bg-rose hover:bg-rose-dark text-white text-xs font-bold px-4 py-2 rounded-full transition">Join</button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Shop</p>
            <div className="flex flex-col gap-1.5 text-white/60">
              <Link href="/best/dog-beds" className="hover:text-rose transition">Dog Beds</Link>
              <Link href="/best/dog-food" className="hover:text-rose transition">Dog Food</Link>
              <Link href="/best/dog-toys" className="hover:text-rose transition">Dog Toys</Link>
              <Link href="/best/dog-grooming" className="hover:text-rose transition">Grooming</Link>
              <Link href="/best" className="hover:text-rose transition">All Products</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Company</p>
            <div className="flex flex-col gap-1.5 text-white/60">
              <Link href="/about" className="hover:text-rose transition">About</Link>
              <Link href="/blog" className="hover:text-rose transition">Blog</Link>
              <Link href="/breeds" className="hover:text-rose transition">Breed Guides</Link>
              <Link href="/privacy" className="hover:text-rose transition">Privacy</Link>
              <Link href="/terms" className="hover:text-rose transition">Terms</Link>
              <Link href="/disclosure" className="hover:text-rose transition">Affiliate Disclosure</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-white mb-3">From Global AI Bots</p>
            <div className="flex flex-col gap-1.5 text-white/60">
              <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">Global AI Bots</a>
              <a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">CLETUS AI</a>
              <a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">RampSeeker</a>
              <a href="https://pierseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">PierSeeker</a>
              <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition">BarkSeeker</a>
              <a href="https://babymydog.com" className="hover:text-rose transition">BabyMyDog</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">Made with &#128062; for dog lovers everywhere &middot; &copy; {new Date().getFullYear()} BabyMyDog &middot; <Link href="/disclosure" className="hover:text-rose transition">Affiliate Disclosure</Link></p>
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
