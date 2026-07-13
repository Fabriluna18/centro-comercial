import Hero from "../components/sections/Hero";
import Novedades from "../components/sections/Novedades";
import AccesosRapidos from "../components/sections/AccesosRapidos";
import ComerciosDestacados from "../components/sections/ComerciosDestacados";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Novedades />
      <AccesosRapidos />
      <ComerciosDestacados />
    </main>
  );
}