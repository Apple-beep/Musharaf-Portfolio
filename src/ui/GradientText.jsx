export default function GradientText({ children, from = "#00d4ff", to = "#7b2ff7", className = "" }) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}
