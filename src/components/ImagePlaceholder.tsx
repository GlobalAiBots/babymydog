/**
 * ImagePlaceholder — beautiful warm gradient placeholders for future photography.
 * Each image slot has a unique gradient based on its category.
 * The ID is stored as data-image-id for future photo upload reference.
 */

function getGradient(id: string): string {
  if (id.startsWith("hero")) return "linear-gradient(135deg, #C4704B 0%, #D4C5A9 40%, #E8D5C4 100%)";
  if (id.startsWith("breed-avatar")) return "linear-gradient(135deg, #D4A574 0%, #C49A6C 50%, #B8876A 100%)";
  if (id.startsWith("breed")) return "linear-gradient(135deg, #C8A882 0%, #B8956A 40%, #A88254 100%)";
  if (id.startsWith("product")) return "linear-gradient(135deg, #F0EEEB 0%, #E8D5C4 50%, #D4C5A9 100%)";
  if (id.startsWith("category-beds")) return "linear-gradient(135deg, #D4C5A9 0%, #C4704B33 50%, #E8D5C4 100%)";
  if (id.startsWith("category-food")) return "linear-gradient(135deg, #D4C5A9 0%, #B8956A 50%, #E8D5C4 100%)";
  if (id.startsWith("category-toys")) return "linear-gradient(135deg, #87CEEB33 0%, #D4C5A9 50%, #E8D5C4 100%)";
  if (id.startsWith("category-grooming")) return "linear-gradient(135deg, #5B7B5E22 0%, #D4C5A9 50%, #E8D5C4 100%)";
  if (id.startsWith("category-gear")) return "linear-gradient(135deg, #C4704B22 0%, #D4C5A9 50%, #E8D5C4 100%)";
  if (id.startsWith("category-gift")) return "linear-gradient(135deg, #C4704B33 0%, #F0C75E22 50%, #E8D5C4 100%)";
  if (id.startsWith("category")) return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
  if (id.startsWith("blog")) return "linear-gradient(135deg, #5B7B5E44 0%, #D4C5A9 40%, #FAF8F5 100%)";
  if (id.startsWith("gift")) return "linear-gradient(135deg, #C4704B22 0%, #F0C75E33 50%, #E8D5C4 100%)";
  if (id.startsWith("lifestyle")) return "linear-gradient(135deg, #5B7B5E33 0%, #D4C5A9 50%, #C4704B22 100%)";
  return "linear-gradient(135deg, #E8D5C4 0%, #D4C5A9 50%, #C4B393 100%)";
}

// Subtle paw print SVG pattern as inline data URI
const pawPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cellipse cx='30' cy='38' rx='8' ry='10' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='20' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='40' cy='26' r='4' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='16' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3Ccircle cx='44' cy='34' r='3.5' fill='%23000' opacity='0.03'/%3E%3C/svg%3E")`;

interface Props {
  id: string;
  alt: string;
  aspect?: "square" | "landscape" | "portrait" | "wide" | "hero";
  className?: string;
}

export default function ImagePlaceholder({ id, alt, aspect = "landscape", className = "" }: Props) {
  const gradient = getGradient(id);
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[3/2]",
  }[aspect];

  return (
    <div
      data-image-id={id}
      className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
      style={{ background: gradient }}
      aria-label={alt}
    >
      {/* Paw print pattern overlay */}
      <div className="absolute inset-0" style={{ backgroundImage: pawPattern, backgroundSize: '60px 60px' }} />
    </div>
  );
}
