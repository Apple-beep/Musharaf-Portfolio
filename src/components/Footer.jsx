import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Footer() {
  const handleFooterNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      className="px-12 py-7 max-md:px-5 max-md:py-6"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 -1px 0 rgba(0,212,255,0.06)",
        background: "rgba(10,10,15,0.98)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-5 text-center md:grid-cols-[1fr_auto_1fr] md:text-left">
        <div className="text-center md:text-left">
          <div
            className="mb-[6px] block font-sora font-extrabold text-transparent"
            style={{
              fontSize: "1.4rem",
              backgroundImage: "linear-gradient(135deg, #00D4FF, #7C3AED)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            MKP
          </div>
          <span className="mb-[3px] block text-[0.75rem] text-[#475569]">
            Designed &amp; Built by Musharaf Khan Pathan
          </span>
          <span className="block text-[0.72rem] text-[#475569]">© 2026 · Chicago, IL</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleFooterNavigate(link.id)}
              className="border-none bg-transparent text-[0.82rem] text-[#94A3B8] transition-colors duration-200 hover:text-[#00D4FF]"
              data-cursor="interactive"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 md:justify-end">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#94A3B8] transition-all duration-200 hover:scale-[1.15] hover:text-[#00D4FF]"
            data-cursor="interactive"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#94A3B8] transition-all duration-200 hover:scale-[1.15] hover:text-[#00D4FF]"
            data-cursor="interactive"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
