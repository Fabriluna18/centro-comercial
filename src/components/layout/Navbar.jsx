import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Store, Briefcase, Gift, GraduationCap, Calendar, Search, Bell, User, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Comercios", path: "/comercios", icon: Store },
  { name: "Empleos", path: "/empleos", icon: Briefcase },
  { name: "Sorteos", path: "/sorteos", icon: Gift },
  { name: "Capacitaciones", path: "/capacitaciones", icon: GraduationCap },
  { name: "Eventos", path: "/eventos", icon: Calendar },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/comercios?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/comercios");
    }
    setSearchOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-surface-border sticky top-0 z-50">
      {/* ---------- TOP BAR MOBILE ---------- */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <button onClick={() => setMobileOpen(true)} aria-label="Abrir menú" className="text-dark">
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center shrink-0 bg-white overflow-hidden">
            <img src="/logo-villa-allende.png" alt="Centro Comercial Villa Allende" className="w-6 h-6 object-contain" />
          </div>
          <div className="leading-none">
            <p className="text-[10px] text-gray-500">Centro Comercial</p>
            <p className="text-sm font-bold text-primary">Villa Allende</p>
          </div>
        </div>

        <button aria-label="Notificaciones" className="text-dark">
          <Bell size={22} />
        </button>
      </div>

      {/* ---------- TOP BAR DESKTOP ---------- */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-4 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center shrink-0 bg-white overflow-hidden">
            <img src="/logo-villa-allende.png" alt="Centro Comercial Villa Allende" className="w-11 h-11 object-contain" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-dark leading-none">CENTRO COMERCIAL</p>
            <h1 className="text-2xl font-extrabold text-primary leading-tight">VILLA ALLENDE</h1>
            <span className="inline-block bg-dark text-white text-[10px] font-bold tracking-widest px-2 py-0.5 rounded mt-1">
              DIGITAL
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-dark">
          <div className="relative" ref={searchRef}>
            <button
              className="flex items-center gap-2 hover:text-primary transition-colors"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={18} /> Buscar
            </button>

            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 mt-3 w-72 bg-white border border-surface-border rounded-xl shadow-lg p-3 flex items-center gap-2 animate-fade-in"
              >
                <Search size={18} className="text-gray-400 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar comercios, productos..."
                  className="flex-1 text-sm outline-none placeholder:text-gray-400"
                />
                <button type="submit" className="text-primary text-sm font-medium">
                  Ir
                </button>
              </form>
            )}
          </div>

          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <Bell size={18} /> Notificaciones
          </button>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <User size={18} /> Mi cuenta
          </button>
        </div>
      </div>

      {/* Nav desktop */}
      <nav className="hidden lg:block border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-8 flex gap-2">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-primary hover:border-primary/40"
                }`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Drawer mobile */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-xl p-5 flex flex-col gap-1 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-bold text-dark">Menú</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
              <X size={24} />
            </button>
          </div>

          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium ${
                  isActive ? "bg-primary-50 text-primary" : "text-gray-700 hover:bg-surface-muted"
                }`
              }
            >
              <Icon size={20} />
              {name}
            </NavLink>
          ))}

          <hr className="my-4 border-surface-border" />

          <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-surface-muted">
            <User size={20} /> Mi cuenta
          </button>
        </div>
      </div>
    </header>
  );
}