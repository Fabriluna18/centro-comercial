const colors = [
  "bg-primary",
  "bg-accent-pink",
  "bg-accent-orange",
  "bg-accent-green",
  "bg-accent-purple",
];

export default function InitialsAvatar({ nombre, size = 64 }) {
  const initial = nombre?.charAt(0).toUpperCase() || "?";
  const colorIndex = nombre ? nombre.charCodeAt(0) % colors.length : 0;
  const color = colors[colorIndex];

  return (
    <div
      className={`${color} rounded-full flex items-center justify-center text-white font-extrabold shrink-0`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initial}
    </div>
  );
}