import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About BabyMyDog", alternates: { canonical: "https://babymydog.com/about" } };
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <ImagePlaceholder id="about-hero" alt="Woman adventuring with her dog on ocean cliffs" aspect="wide" className="rounded-2xl mb-10" />
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>About BabyMyDog</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p><strong className="text-charcoal">BabyMyDog helps you find the best products for your furry family member.</strong> We research, review, and recommend the top dog products across every category — from beds and food to grooming tools and tech gadgets.</p>
        <p>Every recommendation is based on real research, veterinary input, and feedback from dog owners. We believe your dog deserves the best, and we&apos;re here to help you find it without the guesswork.</p>
        <p><strong className="text-charcoal">BabyMyDog is owned and operated by a retired AKC English Bulldog breeder and U.S. military veteran.</strong> Years of hands-on experience raising show-quality puppies informs every product recommendation on this site. We&apos;re not selling dogs — we&apos;re helping you take better care of yours.</p>
        <p>BabyMyDog is part of a family of sites built by <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">Global AI Bots</a>: <a href="https://barkseeker.com" target="_blank" className="text-rose font-semibold hover:underline">BarkSeeker</a> (dog parks), <a href="https://rampseeker.com" target="_blank" className="text-rose font-semibold hover:underline">RampSeeker</a> (boat ramps), and <a href="https://pierseeker.com" target="_blank" className="text-rose font-semibold hover:underline">PierSeeker</a> (fishing piers).</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
