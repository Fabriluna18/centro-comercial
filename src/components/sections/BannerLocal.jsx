import { ArrowRight, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BannerLocal() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[2000px] mx-auto px-4 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-3xl h-[260px] lg:h-[290px] shadow-2xl">

        {/* Fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#2563EB_0%,#5B3DF5_45%,#9333EA_70%,#EC4899_100%)]" />

        {/* Círculo grande detrás */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-white/10 blur-sm" />

        {/* Círculo inferior izquierdo */}
        <div className="absolute -bottom-28 -left-20 w-56 h-56 rounded-full bg-cyan-400/25" />


        <div className="relative z-10 flex justify-between h-full">

          {/* IZQUIERDA */}
          <div className="flex items-center pl-12">

            <div className="flex items-center gap-7">

              {/* Icono */}
              <div className="flex items-center justify-center w-28 h-28 rounded-full border-[3px] border-white/70 bg-white/5 backdrop-blur-sm">

                <Store
                  size={56}
                  strokeWidth={2.2}
                  className="text-white"
                />

              </div>

              {/* Texto */}
              <div className="flex flex-col max-w-md">

                <h2 className="text-white text-4xl font-bold leading-tight">
                  Apoyemos lo nuestro,
                  <br />
                  compremos local
                </h2>

                <p className="mt-3 text-base text-white/90 leading-relaxed">
                  Elegí Villa Allende, elegí calidad,
                  <br />
                  cercanía y confianza.
                </p>

                

              </div>

            </div>

          </div>

          {/* BOTÓN */}
          <button
            onClick={() => navigate("/comercios")}
            className="absolute bottom-8 left-[850px] group rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-slate-900 shadow-xl transition hover:scale-[1.03]"
          >
            Explorar comercios
          </button>

          {/* DERECHA */}
          <div className="relative flex items-end pr-8">

            <img
              src="/banner-comerciantes.png"
              alt="Comerciantes"
              className="h-[100%] object-contain drop-shadow-2xl select-none pointer-events-none"
            />

          </div>

        </div>
      </div>
    </section>
  );
}