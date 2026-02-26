import { useEffect, useRef, useState } from "react";

const LERP_FACTOR = 0.12;

export default function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: coarse)");
    const onPointerChange = (event) => {
      setIsCoarsePointer(event.matches);
    };

    setIsCoarsePointer(pointerQuery.matches);
    pointerQuery.addEventListener("change", onPointerChange);

    return () => {
      pointerQuery.removeEventListener("change", onPointerChange);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastTick = 0;

    const onMouseMove = (event) => {
      const now = performance.now();
      if (now - lastTick < 16) {
        return;
      }

      lastTick = now;
      mouseRef.current = { x: event.clientX, y: event.clientY };
      setMouse(mouseRef.current);
    };

    const animate = () => {
      const current = ringRef.current;
      const target = mouseRef.current;

      const nextX = current.x + (target.x - current.x) * LERP_FACTOR;
      const nextY = current.y + (target.y - current.y) * LERP_FACTOR;

      ringRef.current = { x: nextX, y: nextY };
      setRing(ringRef.current);

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { mouse, ring, isCoarsePointer };
}
