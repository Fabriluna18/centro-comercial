import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {
  ChevronLeft,
  MapPin,
  Clock,
  Phone,
  Mail,
  Heart,
  Truck,
  CreditCard,
  Headphones,
} from "lucide-react";
import { comercios } from "../data/comercios";
import InitialsAvatar from "../components/ui/InitialsAvatar";
import StarRating from "../components/ui/StarRating";
import BannerCarousel from "../components/ui/BannerCarousel";

export default function ComercioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guardado, setGuardado] = useState(false);

  const comercio = comercios.find((c) => c.id === Number(id));

  if (!comercio) {
    return (
      <div className=" px-4 py-16 text-center">
        <p className="text-gray-500 mb-2">No encontramos este comercio.</p>
        <Link to="/comercios" className="text-primary font-medium hover:underline">
          Volver a comercios
        </Link>
      </div>
    );
  }

  const mapQuery = encodeURIComponent(comercio.direccion);

  const handleCompartir = async () => {
    const shareData = {
      title: comercio.nombre,
      text: `Mirá ${comercio.nombre} en el Centro Comercial Villa Allende`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // el usuario canceló el share, no hacemos nada
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <main className=" px-4 lg:px-8 py-6 pb-10">
      {/* Volver */}
      <button
        onClick={() => navigate("/comercios")}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-4 transition-colors"
      >
        <ChevronLeft size={18} />
        Volver a resultados
      </button>

      {/* Banner */}
      <div className="relative mb-16 lg:mb-20">
        <BannerCarousel imagenes={comercio.imagenes} nombre={comercio.nombre} />

        {/* Logo superpuesto con sombra y profundidad */}
        <div className="absolute -bottom-12 left-6 lg:left-10">
          <div className="ring-4 ring-white rounded-full shadow-xl w-24 h-24 overflow-hidden bg-white">
            {comercio.logo ? (
              <img src={comercio.logo} alt={comercio.nombre} className="w-full h-full object-cover" />
            ) : (
              <InitialsAvatar nombre={comercio.nombre} size={96} />
            )}
          </div>
        </div>
      </div>

      {/* Encabezado: nombre + info principal */}
      <div className="pl-6 lg:pl-0 mb-5">
        <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-dark mb-1">{comercio.nombre}</h1>
            <p className="text-sm text-gray-500">{comercio.categoria}</p>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ${
              comercio.abierto
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${comercio.abierto ? "bg-green-500" : "bg-gray-400"}`} />
            {comercio.abierto ? "Abierto ahora" : "Cerrado"}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {comercio.verificado && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-50 px-2.5 py-1 rounded-full">
              ✓ Comercio verificado
            </span>
          )}

          <div className="flex items-center gap-1.5">
            <StarRating rating={comercio.rating} size={14} />
            <span className="text-sm font-bold text-dark">{comercio.rating}</span>
          </div>
        </div>
      </div>

      {/* Fila de botones de contacto */}
      <div className="pl-6 lg:pl-0 grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${comercio.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33C8.51 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36h.57c.18 0 .43-.02.66.5.24.53.82 1.87.89 2 .07.13.12.29.02.47-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.18 1.35.28.13.44.11.6-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.65-.18 1.31z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href={comercio.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white border border-surface-border text-dark text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-surface-muted hover:shadow-md transition-all duration-200"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="instagramGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F58529" />
                <stop offset="25%" stopColor="#FEDA77" />
                <stop offset="50%" stopColor="#DD2A7B" />
                <stop offset="75%" stopColor="#8134AF" />
                <stop offset="100%" stopColor="#515BD4" />
              </linearGradient>
            </defs>

            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              fill="none"
              stroke="url(#instagramGradient)"
              strokeWidth="2"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="url(#instagramGradient)"
              strokeWidth="2"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="url(#instagramGradient)"
            />
          </svg>

          <span>Instagram</span>
        </a>

        {/* Guardar */}
        <button
          onClick={() => setGuardado((prev) => !prev)}
          className={`col-span-2 md:col-span-1 flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md ${
            guardado
              ? "bg-accent-pink border border-accent-pink text-white"
              : "bg-white border border-surface-border text-dark hover:bg-surface-muted"
          }`}
        >
          <Heart
            size={18}
            className={`transition-all ${guardado ? "fill-white" : ""}`}
          />
          <span>{guardado ? "Guardado" : "Guardar"}</span>
        </button>

      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white border border-surface-border rounded-2xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-2">
            <MapPin size={14} /> Ubicación
          </div>
          <p className="text-sm text-dark mb-1">{comercio.direccion}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary font-medium hover:underline"
          >
            Ver en el mapa
          </a>
        </div>

        <div className="bg-white border border-surface-border rounded-2xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-2">
            <Clock size={14} /> Horarios
          </div>
          <p className="text-sm text-dark">{comercio.horarios}</p>
        </div>

        <div className="bg-white border border-surface-border rounded-2xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-2">
            <Phone size={14} /> Teléfono
          </div>
          <p className="text-sm text-dark">{comercio.telefono}</p>
        </div>

        <div className="bg-white border border-surface-border rounded-2xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-2">
            <Mail size={14} /> Email
          </div>
          <p className="text-sm text-dark truncate">{comercio.email}</p>
        </div>
      </div>

      {/* Sobre nosotros + datos operativos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
        <div className="bg-white border border-surface-border rounded-2xl p-5">
          <h3 className="font-bold text-dark text-sm mb-2">Sobre nosotros</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{comercio.descripcion}</p>
        </div>

        <div className="bg-white border border-surface-border rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Truck size={18} className="text-accent-orange shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-dark">Envíos a domicilio</p>
              <p className="text-xs text-gray-500">{comercio.envios}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard size={18} className="text-accent-purple shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-dark">Medios de pago</p>
              <p className="text-xs text-gray-500">{comercio.mediosDePago}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Headphones size={18} className="text-accent-pink shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-dark">Atención personalizada</p>
              <p className="text-xs text-gray-500">{comercio.atencionPersonalizada}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Productos destacados */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-dark">Productos destacados</h3>
            <button className="text-sm font-medium text-primary hover:underline">Ver todos</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {comercio.productosDestacados.map((prod, i) => (
              <div key={i} className="bg-white border border-surface-border rounded-2xl overflow-hidden">
                <div className="h-28 overflow-hidden">
                  <img src={prod.imagen} alt={prod.nombre} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-dark truncate">{prod.nombre}</p>
                  <p className="text-sm font-bold text-primary">
                    ${prod.precio.toLocaleString("es-AR")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galería */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-dark mb-3">Galería</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {comercio.galeria.map((foto, i) => (
              <div key={i} className="h-28 lg:h-36 rounded-2xl overflow-hidden">
                <img src={foto} alt={`${comercio.nombre} galería ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      {/* Ubicación con mapa embebido */}
      <div>
        <h3 className="text-lg font-bold text-dark mb-3">Ubicación</h3>
        <div className="rounded-2xl overflow-hidden border border-surface-border h-64 lg:h-80">
          <iframe
            title={`Mapa ${comercio.nombre}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}