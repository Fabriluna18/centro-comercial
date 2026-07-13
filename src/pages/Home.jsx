import Hero from "../components/sections/Hero";
import Novedades from "../components/sections/Novedades";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <Novedades />
    </main>
  );
}