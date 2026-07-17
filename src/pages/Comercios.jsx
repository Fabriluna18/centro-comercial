import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Gift } from "lucide-react";
import { comercios } from "../data/comercios";
import { normalizeText } from "../utils/normalize";
import ComercioListItem from "../components/ui/ComercioListItem";

const tabs = ["Todos", "Comercios", "Productos", "Servicios"];

export default function Comercios() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeTab, setActiveTab] = useState("Todos");
  const navigate = useNavigate();

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const resultados = useMemo(() => {
    if (!query.trim()) return comercios;
    const term = normalizeText(query);
    return comercios.filter(
      (c) =>
        normalizeText(c.nombre).includes(term) ||
        normalizeText(c.categoria).includes(term)
    );
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <main className=" px-5 lg:px-8 pt-4">
      {/* Buscador */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar comercios, productos, servicios..."
            className="flex-1 text-sm outline-none placeholder:text-gray-400 bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSearchParams({});
              }}
              className="text-gray-400 hover:text-gray-600 text-sm"
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </form>

      {/* Tabs de filtro */}
      <div className="flex items-center gap-2.5 mb-5 overflow-x-auto pb-1 -mx-5 px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
              activeTab === tab
                ? "bg-accent-pink text-white border-accent-pink"
                : "bg-white text-gray-600 border-gray-100 hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Título de sección + contador */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-dark">Comercios destacados</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {resultados.length} {resultados.length === 1 ? "resultado encontrado" : "resultados encontrados"}
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Ver todos
        </button>
      </div>

      {/* Resultados */}
      {resultados.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {resultados.map((comercio) => (
            <ComercioListItem key={comercio.id} comercio={comercio} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-2">No encontramos resultados para "{query}"</p>
          <p className="text-sm text-gray-400">Probá con otra búsqueda o revisá las categorías</p>
        </div>
      )}

      {/* Card de promos */}
      <div className="mt-8 bg-gradient-to-br from-pink-50 to-pink-100/60 border border-pink-100 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent-pink/10 flex items-center justify-center shrink-0">
            <Gift size={24} className="text-accent-pink" />
          </div>
          <div>
            <p className="font-bold text-dark text-base mb-1">Descubrí promos y novedades</p>
            <p className="text-sm text-gray-500">de tus comercios favoritos</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-accent-pink hover:opacity-90 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-opacity"
        >
          Ver novedades
        </button>
      </div>

      {/* Card de WhatsApp */}
      <div className="mt-4 bg-gradient-to-br from-green-50 to-green-100/60 border border-green-100 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="#22C55E" className="w-6 h-6">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33C8.51 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36h.57c.18 0 .43-.02.66.5.24.53.82 1.87.89 2 .07.13.12.29.02.47-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.18 1.35.28.13.44.11.6-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.65-.18 1.31z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-dark text-base mb-1">¿No encontrás lo que buscás?</p>
            <p className="text-sm text-gray-500">Escribinos por WhatsApp y te ayudamos</p>
          </div>
        </div>
        <a
          href="https://wa.me/5493511234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"
        >
          Chatear
        </a>
      </div>
    </main>
  );
}