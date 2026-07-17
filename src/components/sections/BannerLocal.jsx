import { Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BannerLocal() {
  const navigate = useNavigate();

  return (
    <section className=" px-4 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-3xl min-h-[260px] lg:h-[290px] shadow-2xl">
        {/* Fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#2563EB_0%,#5B3DF5_45%,#9333EA_70%,#EC4899_100%)]" />

        {/* Círculos decorativos */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-white/10 blur-sm" />
        <div className="absolute -bottom-28 -left-20 w-56 h-56 rounded-full bg-cyan-400/25" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full gap-6 lg:gap-4 px-6 py-8 lg:pl-12 lg:py-0">
          {/* IZQUIERDA: ícono + texto */}
          <div className="flex items-start lg:items-center gap-5 lg:gap-7 w-full lg:w-auto">
            <div className="hidden sm:flex items-center justify-center w-16 h-16 lg:w-28 lg:h-28 rounded-full border-[3px] border-white/70 bg-white/5 backdrop-blur-sm shrink-0">
              <Store size={32} strokeWidth={2.2} className="text-white lg:hidden" />
              <Store size={56} strokeWidth={2.2} className="text-white hidden lg:block" />
            </div>

            <div className="flex flex-col max-w-md">
              <h2 className="text-white text-2xl lg:text-4xl font-bold leading-tight">
                Apoyemos lo nuestro,
                <br />
                compremos local
              </h2>

              <p className="mt-3 text-sm lg:text-base text-white/90 leading-relaxed">
                Elegí Villa Allende, elegí calidad, cercanía y confianza.
              </p>

              {/* Botón mobile: dentro del flujo normal */}
              <button
                onClick={() => navigate("/comercios")}
                className="lg:hidden mt-5 self-start rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl transition hover:scale-[1.03]"
              >
                Explorar comercios
              </button>
            </div>
          </div>

          {/* DERECHA: imagen de personas (solo desktop) */}
          <div className="hidden lg:flex items-end h-full pr-4 shrink-0">
            <img
              src="/banner-comerciantes.png"
              alt="Comerciantes locales de Villa Allende"
              className="h-full object-contain drop-shadow-2xl select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Botón desktop: centrado horizontalmente en TODO el banner, pegado abajo */}
        <button
          onClick={() => navigate("/comercios")}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-slate-900 shadow-xl transition hover:scale-[1.03]"
        >
          Explorar comercios
        </button>
      </div>
    </section>
  );
}