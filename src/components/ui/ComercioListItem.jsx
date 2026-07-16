import { useNavigate } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import StarRating from "./StarRating";

export default function ComercioListItem({ comercio }) {
  const navigate = useNavigate();
  const { id, nombre, categoria, direccion, imagen, rating } = comercio;

  return (
    <button
      onClick={() => navigate(`/comercios/${id}`)}
      className="w-full flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-100">
        <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-dark text-sm mb-1 truncate">{nombre}</h4>
        <p className="text-xs text-gray-500 mb-1.5">{categoria}</p>
        <p className="text-xs text-gray-400 truncate">{direccion}</p>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0 pl-2">
        <div className="flex items-center gap-1.5 bg-yellow-50 px-2 py-1 rounded-full">
          <StarRating rating={rating} size={12} />
          <span className="text-xs font-bold text-dark">{rating}</span>
        </div>
        <ChevronRight size={18} className="text-gray-300 mr-1" />
      </div>
    </button>
  );
}