import Hero from "../components/sections/Hero";
import Novedades from "../components/sections/Novedades";
import AccesosRapidos from "../components/sections/AccesosRapidos";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Novedades />
      <AccesosRapidos />
    </main>
  );
}