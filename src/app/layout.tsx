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
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-charcoal">
          <span className="text-lg">&#128062;</span>
          <span className="text-terra">BabyMyDog</span>
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link href="/breeds" className="text-charcoal/60 hover:text-terra transition">Breeds</Link>
          <Link href="/best" className="text-charcoal/60 hover:text-terra transition">Products</Link>
          <Link href="/gifts" className="text-charcoal/60 hover:text-terra transition hidden sm:block">Gifts</Link>
          <Link href="/blog" className="text-charcoal/60 hover:text-terra transition hidden sm:block">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{background:'#2A2420'}} className="mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          <div>
            <p className="font-bold text-white text-lg mb-4">BabyMyDog</p>
            <p className="text-white/40 leading-relaxed">Expert-picked products for pampered pups. Honest reviews, no sponsored rankings.</p>
          </div>
          <div>
            <p className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-wider">Shop</p>
            <div className="flex flex-col gap-2 text-white/40">
              <Link href="/best/dog-beds" className="hover:text-white transition">Dog Beds</Link>
              <Link href="/best/dog-food" className="hover:text-white transition">Dog Food</Link>
              <Link href="/best/dog-toys" className="hover:text-white transition">Dog Toys</Link>
              <Link href="/best/dog-grooming" className="hover:text-white transition">Grooming</Link>
              <Link href="/gifts" className="hover:text-white transition">Gift Guides</Link>
            </div>
          </div>
          <div>
            <p className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-wider">Company</p>
            <div className="flex flex-col gap-2 text-white/40">
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/breeds" className="hover:text-white transition">Breed Guides</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
              <Link href="/disclosure" className="hover:text-white transition">Affiliate Disclosure</Link>
            </div>
          </div>
          <div>
            <p className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-wider">Our Network</p>
            <div className="flex flex-col gap-2 text-white/40">
              <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">BarkSeeker</a>
              <a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">RampSeeker</a>
              <a href="https://pierseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PierSeeker</a>
              <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Global AI Bots</a>
              <a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">CLETUS AI</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/25 text-xs">
          <p>Made with love for dog lovers everywhere &middot; &copy; {new Date().getFullYear()} BabyMyDog</p>
          <p className="mt-2">BabyMyDog is a participant in the Amazon Services LLC Associates Program. <Link href="/disclosure" className="underline hover:text-white/40 transition">Learn more</Link></p>
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col" style={{background:'#FAF8F5', fontFamily:"'DM Sans', sans-serif"}}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4822220549367368" crossOrigin="anonymous" strategy="afterInteractive" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
