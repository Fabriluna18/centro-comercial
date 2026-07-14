import { beneficios } from "../../data/beneficios";

export default function BeneficiosLocal() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-8">
      <h3 className="text-lg font-bold text-dark mb-4">Beneficios de comprar local</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {beneficios.map(({ id, titulo, descripcion, icon: Icon, color }) => (
          <div key={id} className="flex items-start gap-3">
          <Icon
            size={40}
            className={`${color} mt-1 shrink-0`}
          />
          <div>
            <h4 className="font-bold text-dark text-sm mb-1">
              {titulo}
            </h4>

            <p className="text-xs text-gray-500 leading-snug">
              {descripcion}
            </p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}