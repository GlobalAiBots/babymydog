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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg"><span className="text-2xl">\ud83d\udc3e</span><span className="text-charcoal" style={{fontFamily:'Playfair Display,serif'}}>Baby<span className="text-rose">MyDog</span></span></Link>
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
          <div><p className="font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>\ud83d\udc3e BabyMyDog</p><p>Premium product reviews and care guides for dog lovers. Because your dog deserves the best.</p></div>
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
