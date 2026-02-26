import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({ id = "tsparticles", reducedMotion = false }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const particlesLoaded = useCallback(async () => {
    return Promise.resolve();
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: reducedMotion ? 24 : 42, density: { enable: true, area: 1000 } },
        color: { value: ["#00d4ff", "#7b2ff7", "#00ff88"] },
        opacity: { value: reducedMotion ? 0.18 : 0.28 },
        size: { value: { min: 1, max: 2.6 } },
        move: {
          enable: !reducedMotion,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 110,
          color: "#00d4ff",
          opacity: 0.1,
          width: 1,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          resize: { enable: true },
          onHover: { enable: !reducedMotion, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 90, duration: 0.4 },
        },
      },
    }),
    [reducedMotion],
  );

  if (!ready) {
    return null;
  }

  return <Particles id={id} particlesLoaded={particlesLoaded} options={options} className="absolute inset-0" />;
}
