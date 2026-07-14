import { Star } from "lucide-react";

export default function StarRating({ rating, max = 5, size = 14 }) {
  const percentage = Math.max(0, Math.min(100, (rating / max) * 100));

  return (
    <div className="relative inline-flex" style={{ lineHeight: 0 }}>
      {/* Estrellas de fondo, vacías */}
      <div className="flex gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <Star key={i} size={size} className="fill-gray-200 text-gray-200" />
        ))}
      </div>

      {/* Estrellas llenas, recortadas al % del rating */}
      <div
        className="absolute inset-0 flex gap-0.5 overflow-hidden"
        style={{ width: `${percentage}%` }}
      >
        {Array.from({ length: max }).map((_, i) => (
          <Star key={i} size={size} className="fill-yellow-400 text-yellow-400 shrink-0" />
        ))}
      </div>
    </div>
  );
}