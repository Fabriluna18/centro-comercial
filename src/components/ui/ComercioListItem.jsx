import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import StarRating from "./StarRating";

export default function ComercioListItem({ comercio }) {
  const navigate = useNavigate();
  const { id, nombre, categoria, direccion, imagen, rating } = comercio;

  return (
    <button
      onClick={() => navigate(`/comercios/${id}`)}
      className="w-full flex items-center gap-4 bg-white border border-surface-border rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left"
    >
      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-surface-border">
        <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-dark text-sm truncate">{nombre}</h4>
        <p className="text-xs text-gray-500 mb-1">{categoria}</p>
        <p className="text-xs text-gray-400 truncate">{direccion}</p>
      </div>

      <div className="flex flex-col items-end gap-1 shrink-0">
        <div className="flex items-center gap-1">
          <StarRating rating={rating} size={12} />
          <span className="text-xs font-medium text-dark">{rating}</span>
        </div>
        <ChevronRight size={18} className="text-gray-300" />
      </div>
    </button>
  );
}