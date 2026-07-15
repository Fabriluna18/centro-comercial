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

export default function ComercioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guardado, setGuardado] = useState(false);

  const comercio = comercios.find((c) => c.id === Number(id));

  if (!comercio) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 mb-2">No encontramos este comercio.</p>
        <Link to="/comercios" className="text-primary font-medium hover:underline">
          Volver a comercios
        </Link>
      </div>
    );
  }

  const mapQuery = encodeURIComponent(comercio.direccion);

  return (
    <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 pb-10">
      {/* Volver */}
      <button
        onClick={() => navigate("/comercios")}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-4 transition-colors"
      >
        <ChevronLeft size={18} />
        Volver a resultados
      </button>

      {/* Banner */}
      <div className="relative h-40 lg:h-56 rounded-2xl overflow-hidden mb-14 lg:mb-16">
        <img
          src={comercio.imagen}
          alt={comercio.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Avatar superpuesto */}
        <div className="absolute -bottom-10 left-6 lg:left-10 ring-4 ring-white rounded-full">
          <InitialsAvatar nombre={comercio.nombre} size={80} />
        </div>
      </div>

      {/* Encabezado: nombre + acciones */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 pl-6 lg:pl-0">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-dark mb-1">{comercio.nombre}</h1>
          <p className="text-sm text-gray-500 mb-2">{comercio.categoria}</p>
          {comercio.verificado && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-50 px-2.5 py-1 rounded-full">
              ✓ Comercio verificado
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${comercio.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33C8.51 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.79-.36h.57c.18 0 .43-.02.66.5.24.53.82 1.87.89 2 .07.13.12.29.02.47-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.18 1.35.28.13.44.11.6-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.65-.18 1.31z" />
            </svg>
            WhatsApp
          </a>

          <a
            href={comercio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-surface-border text-dark text-sm font-semibold px-4 py-2 rounded-lg hover:bg-surface-muted transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>

          <button
            onClick={() => setGuardado((prev) => !prev)}
            className={`flex items-center gap-2 border text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
              guardado
                ? "bg-accent-pink border-accent-pink text-white"
                : "bg-white border-surface-border text-dark hover:bg-surface-muted"
            }`}
          >
            <Heart size={16} className={guardado ? "fill-white" : ""} />
            {guardado ? "Guardado" : "Guardar"}
          </button>
        </div>
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
                <img src={comercio.imagen} alt={prod.nombre} className="w-full h-full object-cover" />
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
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-28 lg:h-36 rounded-2xl overflow-hidden">
              <img src={comercio.imagen} alt={`${comercio.nombre} galería ${i + 1}`} className="w-full h-full object-cover" />
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