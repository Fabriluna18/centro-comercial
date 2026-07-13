import { useState, useEffect, useCallback } from "react";
import { Megaphone, ChevronLeft, ChevronRight } from "lucide-react";
import { novedades } from "../../data/novedades";

const AUTOPLAY_MS = 5000;

export default function Novedades() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % novedades.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + novedades.length) % novedades.length);
  };

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  const item = novedades[current];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-dark">Novedades</h3>
        <button className="text-sm font-medium text-primary hover:underline">Ver todas</button>
      </div>

      <div className="relative bg-white border border-surface-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-4 p-5 lg:p-6">
          {/* Ícono */}
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <Megaphone size={26} />
          </div>

          {/* Texto — con key para que la transición se note al cambiar de slide */}
          <div key={item.id} className="flex-1 animate-fade-in">
            <h4 className="font-bold text-dark mb-1">{item.titulo}</h4>
            <p className="text-sm text-gray-500">{item.descripcion}</p>
          </div>

          {/* Imagen (solo desktop) */}
          <div className="hidden lg:block w-40 h-24 rounded-xl overflow-hidden shrink-0">
            <img
              key={item.id}
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </div>

        {/* Flechas (desktop, en hover se podrían mostrar; acá siempre visibles) */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow items-center justify-center hover:bg-surface-muted"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow items-center justify-center hover:bg-surface-muted"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Puntos de paginación */}
      <div className="flex justify-center gap-2 mt-3">
        {novedades.map((n, i) => (
          <button
            key={n.id}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a novedad ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}