import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MODES = {
  default: {
    size: 40,
    borderColor: "rgba(0, 212, 255, 0.4)",
    background: "transparent",
    label: "",
    labelColor: "#00d4ff",
  },
  interactive: {
    size: 60,
    borderColor: "rgba(0, 212, 255, 0.55)",
    background: "rgba(0, 212, 255, 0.1)",
    label: "",
    labelColor: "#00d4ff",
  },
  project: {
    size: 60,
    borderColor: "rgba(123, 47, 247, 0.7)",
    background: "rgba(123, 47, 247, 0.16)",
    label: "VIEW",
    labelColor: "#ffffff",
  },
};

export default function CustomCursor() {
  const { mouse, ring, isCoarsePointer } = useMousePosition();
  const [mode, setMode] = useState("default");

  useEffect(() => {
    if (isCoarsePointer) {
      return;
    }

    const element = document.elementFromPoint(mouse.x, mouse.y);
    if (!element) {
      setMode("default");
      return;
    }

    if (element.closest('[data-cursor="project"]')) {
      setMode("project");
      return;
    }

    if (element.closest("a, button, [data-cursor='interactive']")) {
      setMode("interactive");
      return;
    }

    setMode("default");
  }, [mouse.x, mouse.y, isCoarsePointer]);

  if (isCoarsePointer) {
    return null;
  }

  const config = MODES[mode];

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9998] h-2 w-2 rounded-full bg-accent-cyan"
        animate={{ x: mouse.x - 4, y: mouse.y - 4 }}
        transition={{ type: "tween", duration: 0 }}
      />

      <motion.div
        className="pointer-events-none fixed z-[9998] flex items-center justify-center rounded-full font-fira text-[11px] font-medium tracking-[0.2em]"
        animate={{
          x: ring.x - config.size / 2,
          y: ring.y - config.size / 2,
          width: config.size,
          height: config.size,
          borderColor: config.borderColor,
          backgroundColor: config.background,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.5 }}
        style={{ borderWidth: "2px", borderStyle: "solid", color: config.labelColor }}
      >
        {config.label}
      </motion.div>
    </>
  );
}
