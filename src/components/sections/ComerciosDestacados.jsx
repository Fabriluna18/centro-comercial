import { useNavigate } from "react-router-dom";
import { comercios } from "../../data/comercios";
import ComercioCard from "../ui/ComercioCard";

export default function ComerciosDestacados() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[2000px] mx-auto px-4 lg:px-8 pt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-dark">Comercios destacados</h3>
        <button
          onClick={() => navigate("/comercios")}
          className="text-sm font-medium text-primary hover:underline"
        >
          Ver todos
        </button>
      </div>

      {/* Mobile: scroll horizontal | Desktop: grid 5 columnas */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:mx-0 lg:px-0">
        {comercios.map((comercio) => (
          <div key={comercio.id} className="min-w-[160px] snap-start lg:min-w-0">
            <ComercioCard comercio={comercio} />
          </div>
        ))}
      </div>
    </section>
  );
}