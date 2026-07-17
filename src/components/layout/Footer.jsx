export default function Footer() {
  const whatsappNumber = "5493511234567"; // reemplazar por el número real del centro comercial

  return (
    <footer className="hidden lg:block bg-white border-t border-surface-border mt-8">
      <div className=" px-4 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* WhatsApp */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33C8.51 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36h.57c.18 0 .43-.02.66.5.24.53.82 1.87.89 2 .07.13.12.29.02.47-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.18 1.35.28.13.44.11.6-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.65-.18 1.31z" />
            </svg>
          </div>

          <div>
            <p className="font-bold text-dark text-sm">¿Tenés dudas o consultas?</p>
            <p className="text-xs text-gray-500">Escribinos por WhatsApp y te ayudamos</p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            Chatear por WhatsApp
          </a>
        </div>

        {/* Botón WhatsApp mobile */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden w-full text-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Chatear por WhatsApp
        </a>

        {/* Redes sociales */}
        <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-dark">Seguinos en nuestras redes</p>
        <div className="flex items-center gap-2">
            <a
            href="https://instagram.com/ccvillaallendedigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
            <svg viewBox="0 0 24 24" className="w-9 h-9">
                <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDD55" />
                    <stop offset="30%" stopColor="#FF543E" />
                    <stop offset="60%" stopColor="#C837AB" />
                    <stop offset="100%" stopColor="#7217B4" />
                </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-gradient)" />
                <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" fill="none" stroke="white" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.6" />
                <circle cx="16.4" cy="7.6" r="1" fill="white" />
            </svg>
            </a>

            <a
            href="https://facebook.com/ccvillaallendedigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
            <svg viewBox="0 0 24 24" className="w-9 h-9">
                <circle cx="12" cy="12" r="10" fill="#1877F2" />
                <path
                fill="white"
                d="M15.5 12.5h-2v7h-3v-7H9v-2.5h1.5V8.5c0-1.6.9-2.7 2.7-2.7h1.9v2.5h-1.2c-.6 0-.9.3-.9.9v1.3h2.1l-.3 2.5z"
                />
            </svg>
            </a>
        </div>
        <span className="text-sm text-gray-500 hidden lg:inline">@ccvillaallendedigital</span>
        </div>
      </div>
    </footer>
  );
}