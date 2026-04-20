import type { Metadata } from "next";
import BrandName from "@/components/BrandName";
export const metadata: Metadata = { title: "Affiliate Disclosure | BabyMyDog", alternates: { canonical: "https://www.babymydog.com/disclosure" } };
export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>Affiliate Disclosure</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p><strong className="text-charcoal"><BrandName /> is a participant in the Amazon Services LLC Associates Program</strong> (Associate ID: babymydog03-20), an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>When you click on product links on our site and make a purchase on Amazon, we may earn a small commission at no additional cost to you. This helps us keep the site running and continue providing free, high-quality content.</p>
        <p>Our editorial content is never influenced by affiliate partnerships. We only recommend products we genuinely believe are the best options for your dog.</p>
        <p>If you have questions about our affiliate relationships, contact us at <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a>.</p>
      </div>
    </div>
  );
}
