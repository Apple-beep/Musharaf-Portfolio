import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { personalInfo, quickCommands } from "./data/portfolioData";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";
import CommandPalette from "./ui/CommandPalette";
import CustomCursor from "./ui/CustomCursor";
import LoadingScreen from "./ui/LoadingScreen";
import ParticleBackground from "./ui/ParticleBackground";
import ScrollProgress from "./ui/ScrollProgress";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 30%, rgba(0,212,255,0.07) 50%, rgba(255,255,255,0.04) 70%, transparent)",
      }}
    />
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const lenisRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const commands = useMemo(() => quickCommands, []);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    const revealTimer = window.setTimeout(() => {
      setContentVisible(true);
    }, 2500);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearTimeout(revealTimer);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (value) => Math.min(1, 1.001 - 2 ** (-10 * value)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  const navigateToSection = useCallback((sectionId) => {
    if (sectionId === "top") {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const scrollToResolvedSection = (attempt = 0) => {
      const section = document.getElementById(sectionId);
      if (!section) {
        if (attempt < 20) {
          window.setTimeout(() => scrollToResolvedSection(attempt + 1), 80);
        }
        return;
      }

      const offset = 84;
      const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetTop);
      } else {
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    };

    scrollToResolvedSection();
  }, []);

  const handleCommandExecute = useCallback(
    (command) => {
      if (command.type === "scroll") {
        navigateToSection(command.target);
        return;
      }

      if (command.id === "resume") {
        if (personalInfo.resumeUrl && personalInfo.resumeUrl !== "#") {
          window.open(personalInfo.resumeUrl, "_blank", "noopener,noreferrer");
        } else {
          toast("Resume coming soon! Check back shortly.", {
            icon: "📄",
            style: {
              background: "rgba(10,10,15,0.95)",
              color: "#F1F5F9",
              border: "1px solid rgba(0,212,255,0.2)",
              fontFamily: "var(--font-fira, monospace)",
              fontSize: "13px",
            },
          });
        }
        return;
      }

      const openNewTab = command.openInNewTab ?? true;
      if (openNewTab) {
        window.open(command.target, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = command.target;
      }
    },
    [navigateToSection],
  );

  return (
    <div className="main-grid relative min-h-screen bg-bg-primary text-text-primary">
      <ParticleBackground reducedMotion={prefersReducedMotion} />
      <ScrollProgress />
      <CustomCursor />

      <AnimatePresence>{showLoader ? <LoadingScreen key="loading-screen" /> : null}</AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: contentVisible ? "auto" : "none" }}
      >
        <Navbar onNavigate={navigateToSection} />

        <main id="main-content">
          <Hero onNavigate={navigateToSection} reducedMotion={prefersReducedMotion} />

          <Suspense
            fallback={
              <div className="px-6 py-20 text-center font-fira text-sm text-text-muted md:px-10">
                Loading sections...
              </div>
            }
          >
            <About />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Certifications />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <Contact />
            <Footer />
          </Suspense>
        </main>

        <CommandPalette commands={commands} onExecute={handleCommandExecute} />

        <Toaster position="top-right" toastOptions={{ duration: 2200 }} />
      </motion.div>
    </div>
  );
}
