import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-[100px] text-center"
      style={{ paddingLeft: "24px", paddingRight: "24px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.06),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:16px_16px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 mx-auto w-full max-w-[760px]"
      >
        <span
          className="inline-flex items-center gap-2 rounded-[999px] border bg-[rgba(34,197,94,0.1)] text-[#86EFAC]"
          style={{
            borderColor: "rgba(34,197,94,0.3)",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.78rem",
            padding: "7px 20px",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#22C55E", animation: "pulse-green 2s ease-in-out infinite" }}>●</span>
          Open to Work — May 2026
        </span>

        <h2
          className="font-sora font-extrabold text-transparent"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            textShadow: "0 0 80px rgba(0,212,255,0.12)",
            lineHeight: 1,
            marginBottom: "10px",
          }}
        >
          What&apos;s Next?
        </h2>

        <h3 className="font-sora font-semibold text-[#F1F5F9]" style={{ fontSize: "1.3rem", marginBottom: "18px" }}>
          Get In Touch
        </h3>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 12px",
          }}
        >
          I&apos;m actively looking for full-time Software Engineering, Data, AI, or Security roles starting May 2026 out of Chicago, IL.
        </p>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "0.92rem",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Whether you have a question, a role in mind, or just want to say hi - my inbox is always open.
        </p>

        <div className="mt-[44px] flex justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] rounded-[50px] px-[48px] py-[18px] text-[1.05rem] font-bold no-underline shadow-[0_0_40px_rgba(0,212,255,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-[0_0_70px_rgba(0,212,255,0.5),0_20px_40px_rgba(0,0,0,0.3)]"
            style={{
              background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)",
              color: "#0A0A0F",
              letterSpacing: "0.01em",
            }}
            aria-label="Send an email to Musharaf Khan Pathan"
          >
            <Mail size={22} color="#0A0A0F" />
            Say Hello →
          </a>
        </div>

        <div className="mt-[40px] flex flex-wrap items-center justify-center gap-[36px]">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.88rem] text-[#94A3B8] no-underline transition-all duration-[250ms] hover:-translate-y-[2px] hover:text-[#00D4FF]"
            data-cursor="interactive"
            aria-label="Visit Musharaf's GitHub profile"
          >
            <Github size={20} />
            Apple-beep
          </a>

          <a
            href={personalInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.88rem] text-[#94A3B8] no-underline transition-all duration-[250ms] hover:-translate-y-[2px] hover:text-[#00D4FF]"
            data-cursor="interactive"
            aria-label="Connect with Musharaf on LinkedIn"
          >
            <Linkedin size={20} />
            musharaf-khan-pathan
          </a>
        </div>
      </motion.div>
    </section>
  );
}
