import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { personalInfo } from "../data/portfolioData";

const HERO_SKILL_BADGES = ["Python", "React + Flask", "AI/ML", "AWS", "Swift", "Security"];

const TYPEWRITER_PHRASES = [
  "full-stack web applications.",
  "production-grade AI tools.",
  "phishing detection systems.",
  "iOS accessibility apps.",
  "cloud-native infrastructure.",
];

function MagneticButton({ children, className, onClick, type = "button" }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    setOffset({ x, y });
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className={className}
      data-cursor="interactive"
    >
      {children}
    </motion.button>
  );
}

function Hero3DCore({ reducedMotion }) {
  const shapeRef = useRef(null);
  const pointsRef = useRef(null);

  const particlePositions = useMemo(() => {
    const points = new Float32Array(200 * 3);

    for (let i = 0; i < 200; i += 1) {
      const i3 = i * 3;
      const radius = 2 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      points[i3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i3 + 2] = radius * Math.cos(phi);
    }

    return points;
  }, []);

  useFrame((state) => {
    if (!shapeRef.current || !pointsRef.current) {
      return;
    }

    const pointerX = state.pointer.x * 0.3;
    const pointerY = state.pointer.y * 0.3;

    if (reducedMotion) {
      shapeRef.current.rotation.x = pointerY * 0.2;
      shapeRef.current.rotation.y = pointerX * 0.2;
      pointsRef.current.rotation.y = -pointerX * 0.1;
      return;
    }

    shapeRef.current.rotation.x += 0.002;
    shapeRef.current.rotation.y += 0.002;

    shapeRef.current.rotation.x += (pointerY - shapeRef.current.rotation.x) * 0.03;
    shapeRef.current.rotation.y += (pointerX - shapeRef.current.rotation.y) * 0.03;

    pointsRef.current.rotation.y -= 0.0015;
    pointsRef.current.rotation.x -= 0.0009;

    state.invalidate();
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight position={[2, 2, 2]} intensity={2.2} color="#00d4ff" />

      <group ref={shapeRef}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#00d4ff" wireframe />
        </mesh>
        <mesh scale={0.85}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#7b2ff7" transparent opacity={0.15} />
        </mesh>
      </group>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00d4ff" size={0.03} sizeAttenuation transparent opacity={0.8} />
      </points>

      <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
    </>
  );
}

export default function Hero({ reducedMotion = false }) {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setTypedText(TYPEWRITER_PHRASES[0]);
      return;
    }

    const phrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeoutId = 0;

    if (!deleting && typedText.length < phrase.length) {
      timeoutId = window.setTimeout(() => {
        setTypedText(phrase.slice(0, typedText.length + 1));
      }, 65);
    } else if (!deleting && typedText.length === phrase.length) {
      timeoutId = window.setTimeout(() => {
        setDeleting(true);
      }, 2200);
    } else if (deleting && typedText.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedText(phrase.slice(0, typedText.length - 1));
      }, 35);
    } else if (deleting && typedText.length === 0) {
      timeoutId = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % TYPEWRITER_PHRASES.length);
      }, 500);
    }

    return () => window.clearTimeout(timeoutId);
  }, [deleting, phraseIndex, reducedMotion, typedText]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollIndicator(window.scrollY <= 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftColumnVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-28"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          animation: "heroFloat1 25s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,47,247,0.09) 0%, transparent 70%)",
          animation: "heroFloat2 30s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "30%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)",
          animation: "heroFloat3 20s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />

      <div className="relative z-[1] mx-auto grid w-full max-w-[1200px] items-center gap-12 md:grid-cols-[1.45fr_1fr]">
        <motion.div
          className="relative z-[1] space-y-6"
          variants={leftColumnVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={leftItemVariants}
            className="relative inline-flex items-center gap-3 overflow-hidden rounded-[999px] border border-[#16a34a66] bg-[#16a34a1a] px-4 py-2"
          >
            <span className="pulse-green-dot relative z-10 h-2 w-2 rounded-full bg-[#22C55E]" />
            <span className="relative z-10 font-fira text-[13px] text-[#86efac]">
              Available for SWE / AI / Security Roles — May 2026
            </span>
          </motion.div>

          <motion.p
            variants={leftItemVariants}
            className="font-inter text-2xl font-medium text-[#94A3B8]"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={leftItemVariants}
            className="whitespace-normal font-sora text-[clamp(32px,8vw,48px)] font-extrabold leading-[1.05] md:whitespace-nowrap md:text-[clamp(36px,5.5vw,72px)]"
          >
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #ffffff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Musharaf
            </span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff, #ffffff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Khan
            </span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff, #7b2ff7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Pathan
            </span>
          </motion.h1>

          <motion.p variants={leftItemVariants} className="font-inter leading-tight text-[#94A3B8]">
            <span className="text-[clamp(18px,2.5vw,22px)] font-medium">I build </span>
            <span
              className="font-fira text-[clamp(18px,2.5vw,22px)] text-[#00D4FF]"
              style={{
                minHeight: "1.5em",
                borderRight: "2px solid #00D4FF",
                animation: "blink 1s step-end infinite",
                paddingRight: "6px",
              }}
            >
              {typedText}
            </span>
          </motion.p>

          <motion.div variants={leftItemVariants} className="max-w-2xl space-y-1">
            <p className="font-inter text-[15px] leading-[1.7] text-[#94A3B8]">
              CS @ Illinois Tech · GPA 3.8 · Dean&apos;s List 6× · McKinsey Forward
            </p>
            <p className="font-inter text-[15px] leading-[1.7] text-[#94A3B8]">
              Building production-grade AI tools, full-stack systems &amp; security software.
            </p>
          </motion.div>

          <motion.div variants={leftItemVariants} className="flex flex-wrap gap-2">
            {HERO_SKILL_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-[999px] border border-[rgba(0,212,255,0.18)] bg-[rgba(0,212,255,0.07)] px-3 py-1 font-fira text-[12px] text-[#7d8590] transition duration-200 hover:bg-[rgba(0,212,255,0.15)] hover:text-[#00d4ff]"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={leftItemVariants} className="flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative inline-flex items-center rounded-[10px] bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] px-8 py-3.5 font-sora text-base font-semibold text-white transition-all duration-300 hover:brightness-90 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            >
              View My Work →
            </MagneticButton>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              title="Resume coming soon — check back!"
              data-cursor="interactive"
              className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-white/15 bg-transparent px-8 py-3.5 font-sora text-base text-[#F1F5F9] transition-all duration-300 hover:border-[#00D4FF] hover:text-[#00D4FF]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={leftItemVariants} className="flex items-center gap-5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              aria-label="GitHub"
              className="text-[#94A3B8] transition-[transform,color] duration-200 ease-in-out hover:scale-[1.2] hover:text-[#00D4FF]"
            >
              <Github size={22} />
            </a>
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              aria-label="LinkedIn"
              className="text-[#94A3B8] transition-[transform,color] duration-200 ease-in-out hover:scale-[1.2] hover:text-[#00D4FF]"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-[1] h-[280px] w-full md:h-[360px]"
        >
          <Canvas
            className="h-full w-full"
            camera={{ position: [0, 0, 4], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
            frameloop="demand"
          >
            <Hero3DCore reducedMotion={reducedMotion} />
          </Canvas>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          opacity: showScrollIndicator ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            width: "2px",
            height: "40px",
            background: "linear-gradient(to bottom, #00D4FF, transparent)",
          }}
        />
        <span
          className="scroll-dot-bounce"
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#00D4FF",
            animation: reducedMotion ? "none" : "bounce-down 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
