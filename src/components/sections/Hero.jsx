import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Mic } from "lucide-react";

export default function Hero() {
  const [mobileSearch, setMobileSearch] = useState("");
  const navigate = useNavigate();

  const handleMobileSearch = (e) => {
    e.preventDefault();
    navigate(mobileSearch.trim() ? `/comercios?q=${encodeURIComponent(mobileSearch.trim())}` : "/comercios");
  };

  return (
    <section className="max-w-[1800px] mx-auto px-4 lg:px-8 pt-4 lg:pt-6">
      {/* ---------- MOBILE ---------- */}
      <div className="lg:hidden">
        <h2 className="text-xl font-bold text-dark mb-1">¡Hola!</h2>
        <p className="text-gray-500 text-sm mb-4">¿Qué estás buscando hoy?</p>

        <form
          onSubmit={handleMobileSearch}
          className="flex items-center gap-2 bg-surface-muted border border-surface-border rounded-xl px-4 py-3"
        >
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={mobileSearch}
            onChange={(e) => setMobileSearch(e.target.value)}
            placeholder="Buscar productos, comercios..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          <button type="button" aria-label="Buscar por voz">
            <Mic size={18} className="text-gray-400" />
          </button>
        </form>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden lg:block relative rounded-2xl overflow-hidden animate-fade-in">
        {/* Fondo con imagen */}
        <div className="absolute inset-0">
          <img
            src="/hero-villa-allende.jpg"
            alt="Calle comercial Villa Allende"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/10 to-primary/5" />
        </div>

        {/* Badge ubicación */}
        <div className="absolute top-5 right-5 z-10 flex items-center gap-1 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium text-dark">
          <MapPin size={14} className="text-primary" />
          Villa Allende
        </div>

        {/* Contenido */}
        <div className="relative z-10 px-10 py-16 max-w-xl">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Comprá local,
            <br />
            hacé crecer <span className="text-accent-orange">Villa Allende</span>
          </h2>
          <p className="text-white/90 mb-6 max-w-md">
            Encontrá productos, servicios y promociones de tus comercios favoritos.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/comercios")}
              className="bg-white text-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explorar comercios
            </button>
            <button
              onClick={() => navigate("/comercios?promos=true")}
              className="border border-white text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver promociones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}