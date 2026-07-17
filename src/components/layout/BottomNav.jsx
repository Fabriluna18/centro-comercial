import { NavLink } from "react-router-dom";
import { Home, Store, Heart, User } from "lucide-react";

const items = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Comercios", path: "/comercios", icon: Store },
  { name: "Favoritos", path: "/favoritos", icon: Heart },
  { name: "Mi cuenta", path: "/mi-cuenta", icon: User },
];

export default function BottomNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-surface-border
                rounded-t-3xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]
                flex items-center justify-around py-2"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map(({ name, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-medium transition-colors ${
              isActive ? "text-primary" : "text-gray-400"
            }`
          }
        >
          <Icon size={22} />
          {name}
        </NavLink>
      ))}
    </nav>
  );
}