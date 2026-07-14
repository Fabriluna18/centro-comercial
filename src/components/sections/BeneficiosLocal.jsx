import { beneficios } from "../../data/beneficios";

export default function BeneficiosLocal() {
  return (
    <section className="max-w-[2000px] mx-auto px-4 lg:px-8 pt-8">
      <h3 className="text-lg lg:text-2xl font-bold text-dark mb-4 lg:mb-5">Beneficios de comprar local</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {beneficios.map(({ id, titulo, descripcion, icon: Icon, color }) => (
          <div
            key={id}
            className="flex items-start gap-3 bg-white border border-surface-border rounded-2xl p-4 lg:p-5"
          >
            <Icon size={40} className={`${color} mt-1 shrink-0 lg:w-11 lg:h-11`} />
            <div>
              <h4 className="font-bold text-dark text-sm lg:text-base mb-1">{titulo}</h4>
              <p className="text-xs lg:text-sm text-gray-500 leading-snug">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}