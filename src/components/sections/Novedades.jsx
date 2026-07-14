import { useState, useEffect, useCallback, useRef } from "react";
import { Megaphone, ChevronLeft, ChevronRight } from "lucide-react";
import { novedades } from "../../data/novedades";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 50; // px mínimos para considerar que fue un swipe

export default function Novedades() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % novedades.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + novedades.length) % novedades.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0) {
        next(); // swipe hacia la izquierda → siguiente
      } else {
        prev(); // swipe hacia la derecha → anterior
      }
    }

    // reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const item = novedades[current];

  return (
    <section className="max-w-[1800px] mx-auto px-4 lg:px-8 pt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-dark">Novedades</h3>
        <button className="text-sm font-medium text-primary hover:underline">Ver todas</button>
      </div>

      <div
        className="relative bg-white border border-surface-border rounded-2xl overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center gap-4 lg:gap-6 p-5 lg:p-8">
          {/* Ícono */}
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <Megaphone size={26} className="lg:w-8 lg:h-8" />
          </div>

          {/* Texto */}
          <div key={item.id} className="flex-1 animate-fade-in select-none">
            <h4 className="font-bold text-dark text-base lg:text-xl mb-1 lg:mb-2">{item.titulo}</h4>
            <p className="text-sm lg:text-base text-gray-500 max-w-2xl">{item.descripcion}</p>
          </div>

          {/* Imagen (solo desktop) */}
          <div className="hidden lg:block w-56 h-32 xl:w-64 xl:h-36 rounded-xl overflow-hidden shrink-0">
            <img
              key={item.id}
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-full object-cover animate-fade-in"
              draggable={false}
            />
          </div>
        </div>

        {/* Flechas (desktop) */}
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