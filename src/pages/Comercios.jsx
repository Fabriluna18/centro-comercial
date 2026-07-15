import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { comercios } from "../data/comercios";
import { normalizeText } from "../utils/normalize";
import ComercioListItem from "../components/ui/ComercioListItem";

const tabs = ["Todos", "Comercios", "Productos", "Servicios"];

export default function Comercios() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeTab, setActiveTab] = useState("Todos");

  // Si llegan por el buscador del navbar con ?q=, precargamos el input
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
    <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 pb-10">
      {/* Buscador */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
        <div className="flex-1 flex items-center gap-2 bg-white border border-surface-border rounded-xl px-4 py-3">
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
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeTab === tab
                ? "bg-accent-pink text-white border-accent-pink"
                : "bg-white text-gray-600 border-surface-border hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}

        <button className="shrink-0 ml-auto flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          <SlidersHorizontal size={14} />
          Filtrar
        </button>
      </div>

      {/* Contador de resultados */}
      <p className="text-sm text-gray-500 mb-4">
        {resultados.length} {resultados.length === 1 ? "resultado encontrado" : "resultados encontrados"}
      </p>

      {/* Resultados */}
      {resultados.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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

      {/* Card de promos y novedades */}
        <div className="mt-8 bg-pink-50 border border-pink-100 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="font-bold text-dark text-sm mb-1">Descubrí promos y novedades</p>
            <p className="text-xs text-gray-500">de tus comercios favoritos</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-accent-pink hover:opacity-90 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-opacity"
          >
            Ver novedades
          </button>
        </div>

      {/* CTA WhatsApp si no encuentra */}
      <div className="mt-8 bg-white border border-surface-border rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="font-bold text-dark text-sm mb-1">¿No encontrás lo que buscás?</p>
          <p className="text-xs text-gray-500">Escribinos por WhatsApp y te ayudamos</p>
        </div>
        <a
          href="https://wa.me/5493511234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Chatear
        </a>
      </div>
    </main>
  );
}