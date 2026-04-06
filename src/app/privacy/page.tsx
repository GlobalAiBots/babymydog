import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | BabyMyDog", alternates: { canonical: "https://babymydog.com/privacy" } };
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
