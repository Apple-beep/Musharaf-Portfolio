import { motion, useSpring } from "framer-motion";
import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const springScale = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9997] h-[3px] w-full">
      <motion.div
        className="h-full w-full origin-left bg-gradient-main"
        style={{ scaleX: springScale, boxShadow: "0 0 12px #00d4ff" }}
      />
    </div>
  );
}
