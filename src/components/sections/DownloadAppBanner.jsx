export default function DownloadAppBanner() {
  return (
    <section className="lg:hidden max-w-[1800px] mx-auto px-4 pt-6">
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 flex items-center gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-dark mb-1 leading-snug">
            ¡Llevá el Centro Comercial en tu bolsillo!
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Recibí novedades, promociones y mucho más.
          </p>
          <button className="bg-dark text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Descargar app
          </button>
        </div>

        {/* "Mockup" de teléfono hecho con CSS, sin necesitar imagen extra */}
        <div className="w-20 h-36 shrink-0 rounded-2xl border-4 border-dark bg-white flex items-center justify-center shadow-sm">
          <img
            src="/logo-villa-allende.png"
            alt="App Centro Comercial Villa Allende"
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}