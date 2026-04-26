import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl mb-4">🐾</p>
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>Page Not Found</h1>
      <p className="text-[#1A1A1A]/50 mb-8 max-w-md">Looks like this page wandered off. Let&apos;s get you back on the trail.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-[#C4704B] hover:bg-[#b5623f] text-white font-semibold text-sm px-6 py-3 rounded-full transition">Go Home</Link>
        <Link href="/products" className="border border-[#C4704B] text-[#C4704B] hover:bg-[#C4704B]/5 font-semibold text-sm px-6 py-3 rounded-full transition">Shop Products</Link>
      </div>
    </div>
  );
}
