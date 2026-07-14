import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import Comercios from "../pages/Comercios";
import ComercioDetalle from "../pages/ComercioDetalle";
import Empleos from "../pages/Empleos";
import Sorteos from "../pages/Sorteos";
import Capacitaciones from "../pages/Capacitaciones";
import Eventos from "../pages/Eventos";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comercios" element={<Comercios />} />
        <Route path="/comercios/:id" element={<ComercioDetalle />} />
        <Route path="/empleos" element={<Empleos />} />
        <Route path="/sorteos" element={<Sorteos />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}