import Hero from "../components/sections/Hero";
import Novedades from "../components/sections/Novedades";
import AccesosRapidos from "../components/sections/AccesosRapidos";
import ComerciosDestacados from "../components/sections/ComerciosDestacados";
import BannerLocal from "../components/sections/BannerLocal";
import BeneficiosLocal from "../components/sections/BeneficiosLocal";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Novedades />
      <AccesosRapidos />
      <ComerciosDestacados />
      <BannerLocal />
      <BeneficiosLocal />
    </main>
  );
}