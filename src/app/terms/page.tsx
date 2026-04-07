import type { Metadata } from "next";
import BrandName from "@/components/BrandName";
export const metadata: Metadata = { title: "Terms of Service | BabyMyDog", alternates: { canonical: "https://babymydog.com/terms" } };
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Terms of Service</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>By using <BrandName />, you agree to these terms. Our content is for informational purposes only and should not replace professional veterinary advice.</p>
        <p>Product recommendations are based on our research and may include affiliate links. Prices and availability are subject to change. Always verify product details before purchasing.</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
