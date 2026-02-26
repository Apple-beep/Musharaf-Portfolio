import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar({ onNavigate }) {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerStyle = useMemo(
    () =>
      isScrolled
        ? {
            background: "rgba(10,10,15,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }
        : {
            background: "transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            borderBottom: "none",
            boxShadow: "none",
          },
    [isScrolled],
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.id);
    let rafId = 0;
    let pollId = 0;

    const updateActiveSection = () => {
      const headerOffset = 120;
      let nextActive = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          nextActive = id;
        }
      });

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    const handlePositionChange = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    const pollUntilSectionsMount = () => {
      updateActiveSection();
      const allSectionsMounted = sectionIds.every((id) => Boolean(document.getElementById(id)));
      if (!allSectionsMounted) {
        pollId = window.setTimeout(pollUntilSectionsMount, 250);
      }
    };

    pollUntilSectionsMount();
    window.addEventListener("scroll", handlePositionChange, { passive: true });
    window.addEventListener("resize", handlePositionChange);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (pollId) window.clearTimeout(pollId);
      window.removeEventListener("scroll", handlePositionChange);
      window.removeEventListener("resize", handlePositionChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: 30, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-[100] h-[72px] transition-all duration-300"
        style={headerStyle}
      >
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6">
          <button
            type="button"
            onClick={() => onNavigate("top")}
            data-cursor="interactive"
            className="group inline-flex items-center font-sora text-[22px] font-extrabold tracking-[0.12em] text-transparent transition duration-200 hover:scale-[1.05] hover:[filter:drop-shadow(0_0_12px_rgba(0,212,255,0.6))]"
            style={{
              backgroundImage: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            MKP
          </button>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  data-cursor="interactive"
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link font-fira text-sm transition-colors duration-300 ${
                    active ? "" : "hover:text-[#e6edf3]"
                  }`}
                  style={{ color: active ? "#00d4ff" : "#7d8590", fontWeight: active ? 600 : 400 }}
                >
                  {item.label}
                  <span
                    className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#00D4FF] transition-opacity duration-200"
                    style={{ bottom: "-6px", opacity: active ? 1 : 0 }}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="text-text-muted hover:scale-110 hover:text-accent-cyan"
              aria-label="Visit Musharaf's GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="text-text-muted hover:scale-110 hover:text-accent-cyan"
              aria-label="Connect with Musharaf on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <button
              type="button"
              onClick={() => {
                if (
                  personalInfo.resumeUrl &&
                  personalInfo.resumeUrl !== "#"
                ) {
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
              }}
              data-cursor="interactive"
              className="group relative overflow-hidden rounded-[999px] border-[1.5px] border-transparent px-5 py-2.5 font-fira text-xs font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] [background:linear-gradient(#050508,#050508)_padding-box,linear-gradient(135deg,#00d4ff,#7b2ff7)_border-box] hover:[background:linear-gradient(135deg,#00d4ff,#7b2ff7)]"
            >
              Resume
            </button>
          </div>

          <button
            type="button"
            className="relative z-[210] inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            data-cursor="interactive"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 origin-center rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 origin-center rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[200] flex min-h-dvh flex-col justify-between bg-[rgba(5,5,8,0.985)] px-8 pb-10 pt-28 backdrop-blur-2xl md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 z-[210] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[rgba(10,10,15,0.88)] text-[#E2E8F0] backdrop-blur"
              style={{ top: "max(16px, env(safe-area-inset-top))" }}
            >
              <X size={22} />
            </button>

            <motion.div className="space-y-6">
              {navLinks.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  variants={mobileItemVariants}
                  className="block w-full text-left font-sora text-3xl font-semibold text-text-primary"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={mobileItemVariants} className="flex items-center gap-6">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-text-muted"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-text-muted"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => onNavigate("contact")}
        className="fixed right-0 top-1/2 z-50 hidden whitespace-nowrap rounded-t-[6px] px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0A0A0F] transition-all duration-300 md:block"
        style={{
          transform: "translateY(-50%) rotate(-90deg) translateX(calc(50% - 16px))",
          background: "linear-gradient(135deg, #00D4FF, #7C3AED)",
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.5)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.boxShadow = "none";
        }}
      >
        OPEN TO WORK
      </button>

    </>
  );
}
