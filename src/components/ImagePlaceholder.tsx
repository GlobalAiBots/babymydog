/**
 * ImagePlaceholder — renders a styled placeholder for future photography.
 * When real images are uploaded, swap this for <Image> using the same IDs.
 */

const gradients = [
  "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)",
  "linear-gradient(135deg, #D4C5A9 0%, #C4704B22 50%, #E8D5C4 100%)",
  "linear-gradient(135deg, #5B7B5E22 0%, #D4C5A9 50%, #E8D5C4 100%)",
  "linear-gradient(135deg, #C4704B11 0%, #E8D5C4 50%, #F0EEEB 100%)",
  "linear-gradient(135deg, #F0EEEB 0%, #E8D5C4 50%, #D4C5A9 100%)",
  "linear-gradient(135deg, #D4C5A9 0%, #5B7B5E11 50%, #E8D5C4 100%)",
];

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

interface Props {
  id: string;
  alt: string;
  aspect?: "square" | "landscape" | "portrait" | "wide" | "hero";
  className?: string;
}

export default function ImagePlaceholder({ id, alt, aspect = "landscape", className = "" }: Props) {
  const gradient = gradients[hashCode(id) % gradients.length];
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[3/2]",
  }[aspect];

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal/20">
        <span className="text-3xl mb-2">&#128247;</span>
        <span className="text-xs font-medium text-center px-4 leading-tight">{alt}</span>
      </div>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-charcoal/15 bg-white/30 px-1.5 py-0.5 rounded">{id}</span>
    </div>
  );
}
