import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const onChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return prefersReducedMotion;
}
