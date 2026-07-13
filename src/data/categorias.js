import { Store, Briefcase, Gift, GraduationCap, Calendar } from "lucide-react";

export const categorias = [
  {
    id: "comercios",
    nombre: "Comercios",
    descripcion: "Descubrí todo lo que tenemos para vos",
    icon: Store,
    color: "bg-accent-orange",
    path: "/comercios",
  },
  {
    id: "empleos",
    nombre: "Empleos",
    descripcion: "Oportunidades laborales en la zona",
    icon: Briefcase,
    color: "bg-primary",
    path: "/empleos",
  },
  {
    id: "sorteos",
    nombre: "Sorteos",
    descripcion: "Participá y ganá increíbles premios",
    icon: Gift,
    color: "bg-accent-pink",
    path: "/sorteos",
  },
  {
    id: "capacitaciones",
    nombre: "Capacitaciones",
    descripcion: "Cursos y talleres para potenciar tu negocio",
    icon: GraduationCap,
    color: "bg-accent-green",
    path: "/capacitaciones",
  },
  {
    id: "eventos",
    nombre: "Eventos",
    descripcion: "Enterate de todos los eventos y actividades",
    icon: Calendar,
    color: "bg-accent-pink",
    path: "/eventos",
  },
];