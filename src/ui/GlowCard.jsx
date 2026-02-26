import { motion } from "framer-motion";

export default function GlowCard({ children, className = "", accent = "rgba(0, 212, 255, 0.35)", hover = true }) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
              borderColor: accent,
              boxShadow: `0 20px 60px ${accent.replace("0.35", "0.15")}`,
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
