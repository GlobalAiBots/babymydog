import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Blog — Dog Care Tips & Product Reviews | BabyMyDog", alternates: { canonical: "https://babymydog.com/blog" } };
export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Blog</h1>
      <div className="space-y-4">
        {blogPosts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2"><span className="text-xs font-bold text-rose bg-rose/10 px-2 py-0.5 rounded-full">{p.category}</span><span className="text-gray-400 text-xs">{p.date} &middot; {p.readTime}</span></div>
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{p.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
