import Hero from "../components/sections/Hero";
import Novedades from "../components/sections/Novedades";
import AccesosRapidos from "../components/sections/AccesosRapidos";
import DownloadAppBanner from "../components/sections/DownloadAppBanner";
import ComerciosDestacados from "../components/sections/ComerciosDestacados";
import BannerLocal from "../components/sections/BannerLocal";
import BeneficiosLocal from "../components/sections/BeneficiosLocal";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Novedades />
      <AccesosRapidos />
      <DownloadAppBanner />
      <div className="hidden lg:block">
        <ComerciosDestacados />
      </div>
      <div className="hidden lg:block">
        <BannerLocal />
      </div>
      <div className="hidden lg:block">
        <BeneficiosLocal />
      </div>
    </main>
  );
}