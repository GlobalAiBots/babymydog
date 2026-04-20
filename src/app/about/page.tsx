import ImagePlaceholder from "@/components/ImagePlaceholder";
import BrandName from "@/components/BrandName";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About BabyMyDog", alternates: { canonical: "https://www.babymydog.com/about" } };
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <ImagePlaceholder id="about-hero" alt="Woman adventuring with her dog on ocean cliffs" aspect="wide" className="rounded-2xl mb-10" />
      <h1 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'Playfair Display,serif'}}>About <BrandName /></h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p><strong className="text-charcoal"><BrandName /> helps you find the best products for your furry family member.</strong> We research, review, and recommend the top dog products across every category — from beds and food to grooming tools and tech gadgets.</p>
        <p>Every recommendation is based on real research, veterinary input, and feedback from dog owners. We believe your dog deserves the best, and we&apos;re here to help you find it without the guesswork.</p>
        <p><strong className="text-charcoal"><BrandName /> is owned and operated by a retired AKC English Bulldog breeder and U.S. military veteran.</strong> Years of hands-on experience raising show-quality puppies informs every product recommendation on this site. We&apos;re not selling dogs — we&apos;re helping you take better care of yours.</p>
        <p className="font-semibold text-charcoal"><BrandName /> is part of a family of sites built by <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Global AI Bots</a>:</p>
        <ul className="list-none space-y-2 text-sm">
          <li><a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">RampSeeker</a> — Every boat ramp in America</li>
          <li><a href="https://pierseeker.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">PierSeeker</a> — Every fishing pier in America</li>
          <li><a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">BarkSeeker</a> — Every dog park in America</li>
          <li><a href="https://grandlakeai.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">Grand Lake AI</a> — AI solutions for Grand Lake businesses</li>
          <li><a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">CLETUS AI Chat</a> — 24/7 AI chatbot for businesses</li>
          <li><a href="https://getcletus.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">CLETUS AI Voice</a> — AI phone receptionist</li>
          <li><a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-rose font-semibold hover:underline">Global AI Bots</a> — Our parent company</li>
        </ul>
        <p className="text-sm text-gray-400">All powered by CLETUS AI technology.</p>
        <p>Contact: <a href="mailto:hello@babymydog.com" className="text-rose hover:underline">hello@babymydog.com</a></p>
      </div>
    </div>
  );
}
