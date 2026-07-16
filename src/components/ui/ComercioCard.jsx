import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const badgeStyles = {
  PROMO: "bg-accent-orange text-white",
  Nuevo: "bg-primary text-white",
};

export default function ComercioCard({ comercio }) {
  const navigate = useNavigate();
  const { id, nombre, categoria, imagenes, rating, badge, whatsapp } = comercio;

  const handleWhatsapp = (e) => {
    e.stopPropagation();
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  return (
    <div
      onClick={() => navigate(`/comercios/${id}`)}
      className="group cursor-pointer bg-white border border-surface-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="relative h-32 lg:h-40 overflow-hidden">
        <img
          src={imagenes[0]}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span
            className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full ${badgeStyles[badge] || "bg-dark text-white"}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="p-3 lg:p-4">
        <h4 className="font-bold text-dark text-sm lg:text-base truncate">{nombre}</h4>
        <p className="text-xs lg:text-sm text-gray-500 mb-2">{categoria}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <StarRating rating={rating} />
            <span className="text-xs lg:text-sm font-medium text-dark">{rating}</span>
          </div>

          <button
            onClick={handleWhatsapp}
            aria-label={`Contactar a ${nombre} por WhatsApp`}
            className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33C8.51 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36h.57c.18 0 .43-.02.66.5.24.53.82 1.87.89 2 .07.13.12.29.02.47-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.18 1.35.28.13.44.11.6-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.65-.18 1.31z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}