// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E56E0", // azul principal
          50: "#EAF0FD",
          100: "#D3E0FB",
          500: "#1E56E0",
          600: "#1846B8",
          700: "#123790",
        },
        dark: {
          DEFAULT: "#111827", // negro/gris oscuro
        },
        accent: {
          orange: "#F97316",  // comercios
          pink: "#EC4899",    // sorteos / eventos
          green: "#10B981",   // capacitaciones / compra segura
          purple: "#8B5CF6",  // promociones
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F6F8",   // fondo gris clarito general
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #6D28D9 0%, #EC4899 50%, #1E56E0 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.15s ease-out",
      },
    },
  },
  plugins: [],
};