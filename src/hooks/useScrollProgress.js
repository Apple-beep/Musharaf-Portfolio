import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastTick = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(next);
    };

    const onScroll = () => {
      const now = performance.now();
      if (now - lastTick < 16) {
        return;
      }
      lastTick = now;
      updateProgress();
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return progress;
}
