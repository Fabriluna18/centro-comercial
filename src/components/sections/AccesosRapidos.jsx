import { useNavigate } from "react-router-dom";
import { categorias } from "../../data/categorias";

export default function AccesosRapidos() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-8">
      <h3 className="text-lg font-bold text-dark mb-3">¿Qué estás buscando hoy?</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
        {categorias.map(({ id, nombre, descripcion, icon: Icon, color, path }, index) => {
          const isLast = index === categorias.length - 1;
          return (
            <button
              key={id}
              onClick={() => navigate(path)}
              className={`group text-left bg-white border border-surface-border rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                isLast ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon size={20} />
              </div>
              <h4 className="font-bold text-dark text-sm mb-1">{nombre}</h4>
              <p className="text-xs text-gray-500 leading-snug">{descripcion}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}