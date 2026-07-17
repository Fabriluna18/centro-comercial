import { useNavigate } from "react-router-dom";

export default function DownloadAppBanner() {
  const navigate = useNavigate();

  return (
    <section className="lg:hidden  px-4 pt-6">
      <div className="relative bg-primary-50 border border-primary-100 rounded-2xl overflow-hidden flex items-center gap-4 p-5">
        <div className="flex-1">
          <h4 className="font-bold text-dark mb-1 leading-snug">
            ¡Llevá el Centro Comercial en tu bolsillo!
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Recibí novedades, promociones y mucho más.
          </p>
          <button
            onClick={() => navigate("/comercios")}
            className="bg-dark text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Descargar app
          </button>
        </div>

        {/* Imagen sin fondo, apoyada sobre la card */}
        <div className="w-28 shrink-0 self-stretch flex items-end">
          <img
            src="/download-app-phone.png"
            alt="App Centro Comercial Villa Allende en un teléfono"
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}