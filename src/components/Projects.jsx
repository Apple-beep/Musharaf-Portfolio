import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "HireLens - AI Resume Screener",
    category: "AI",
    tech: ["Python", "React", "NLP", "OpenAI API"],
    metric: "Bias detection + fairness audits",
    description:
      "Resume screening workspace with explainable AI — ingests job descriptions, ranks candidates, detects hiring bias with counterfactual insights and audit trails.",
    github: "https://github.com/Apple-beep/hirelens",
    live: "https://github.com/Apple-beep/hirelens",
    featured: true,
  },
  {
    id: "02",
    title: "CheckURL - Phishing Link Scanner",
    category: "Security",
    tech: ["JavaScript", "Firefox Extension", "HTML5"],
    metric: "92% accuracy · 84% fewer dangerous clicks",
    description:
      "Firefox extension scanning URLs in real-time with green/yellow/red risk indicators. Tested on URLhaus malicious dataset achieving sub-900ms per scan.",
    github: "https://github.com/Apple-beep/CheckUrl-ext",
    live: "/CheckUrl.pdf",
    featured: true,
  },
  {
    id: "03",
    title: "VisionVoice - iOS Accessibility App",
    category: "iOS",
    tech: ["Swift", "SwiftUI", "AVFoundation", "Vision"],
    metric: "95% OCR accuracy · Apple WWDC",
    description:
      "iOS app for visually impaired users with voice-to-text, AI plant care analysis, and on-device ML for offline privacy. WCAG 2.1 AA compliant.",
    github: "https://github.com/Apple-beep/VisionVoice/tree/main",
    live: "https://github.com/Apple-beep/VisionVoice/tree/main",
    featured: false,
  },
  {
    id: "04",
    title: "Soteria - Smart Emergency Response",
    category: "IoT",
    tech: ["Python", "ESP32", "IoT", "PoE"],
    metric: "Reduced emergency response time ~50%",
    description:
      "IoT prototype with real-time UI, sensor integration, and automated evacuation guidance for smart occupancy monitoring.",
    github: "https://github.com/poe-iit2",
    live: "/soteria1.pdf",
    featured: false,
  },
  {
    id: "05",
    title: "F1 Database Management System",
    category: "Database",
    tech: ["Python", "MySQL", "SQL", "OLAP"],
    metric: "10K+ records with OLAP analytics",
    description:
      "Full CRUD system with OLAP analytics over Formula 1 racing data. Complex JOIN queries and optimized indexing for high-volume data retrieval.",
    github: "https://github.com/Apple-beep/f1-database-management-system",
    live: "https://github.com/Apple-beep/f1-database-management-system",
    featured: false,
  },
  {
    id: "06",
    title: "AI Pathfinding - Greedy & A* Search",
    category: "AI",
    tech: ["Python", "AI", "Algorithms"],
    metric: "~1000× speedup over brute force",
    description:
      "Implementation and comparison of Greedy Best-First and A* search algorithms with heuristic optimization for maze and grid traversal.",
    github: "https://github.com/Apple-beep/AI-Pathfinding-Search-Algorithms",
    live: "https://github.com/Apple-beep/AI-Pathfinding-Search-Algorithms",
    featured: false,
  },
];

const categoryStyles = {
  AI: {
    background: "rgba(124,58,237,0.15)",
    border: "1px solid rgba(124,58,237,0.5)",
    color: "#A78BFA",
  },
  Security: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#FCA5A5",
  },
  iOS: {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.4)",
    color: "#6EE7B7",
  },
  IoT: {
    background: "rgba(245,158,11,0.15)",
    border: "1px solid rgba(245,158,11,0.4)",
    color: "#FCD34D",
  },
  Database: {
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    color: "#93C5FD",
  },
};

const metricBadgeStyle = {
  background: "rgba(0,212,255,0.08)",
  border: "1px solid rgba(0,212,255,0.25)",
  color: "#00D4FF",
  fontFamily: "monospace",
  fontSize: "0.72rem",
  padding: "4px 10px",
  borderRadius: "4px",
  display: "inline-block",
  marginBottom: "14px",
};

const techTagStyle = {
  fontFamily: "'Courier New', monospace",
  fontSize: "0.72rem",
  fontWeight: 600,
  padding: "4px 8px",
  borderRadius: "3px",
  display: "inline-block",
  marginRight: "6px",
  marginBottom: "6px",
};

function ProjectLinks({ project }) {
  const liveUrl = project.live && project.live !== "#" ? project.live : project.github;

  return (
    <div className="flex items-center gap-2">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} GitHub link`}
        className="text-[#94A3B8] transition-all duration-300 hover:scale-110 hover:text-[#00D4FF]"
      >
        <Github size={18} />
      </a>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} external link`}
        className="text-[#94A3B8] transition-all duration-300 hover:scale-110 hover:text-[#00D4FF]"
      >
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

function FeaturedPreview({ projectId }) {
  if (projectId === "01") {
    return (
      <div className="rounded-xl border border-white/15 bg-black/30 p-4">
        <p className="mb-3 font-fira text-xs text-cyan-200/85">Candidate Score Ranking</p>

        <div className="space-y-2.5">
          <div>
            <div className="mb-1 flex items-center justify-between font-fira text-[11px] text-white/70">
              <span>Candidate A</span>
              <span>85%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#22C55E]" style={{ width: "85%" }} />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between font-fira text-[11px] text-white/70">
              <span>Candidate B</span>
              <span>62%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#EAB308]" style={{ width: "62%" }} />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between font-fira text-[11px] text-white/70">
              <span>Candidate C</span>
              <span>38%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#EF4444]" style={{ width: "38%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/15 bg-black/30 p-4">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 h-6 flex-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-fira text-[11px] text-white/60">
          https://suspicious-link.xyz
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-md border border-green-400/30 bg-green-500/10 px-3 py-2">
        <div className="relative h-4 w-4 rounded-full border border-green-300/80 bg-green-400/15">
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300" />
        </div>
        <span className="font-fira text-xs text-green-200">✓ Safe — No threats detected</span>
      </div>
    </div>
  );
}

function FeaturedCard({ project, index }) {
  const featuredBackground =
    project.id === "01"
      ? "linear-gradient(135deg, #0A0A1F 0%, #1A0A3A 55%, #0D1F2D 100%)"
      : "linear-gradient(135deg, #0A1A0A 0%, #0A2A1A 55%, #0A1F2D 100%)";

  return (
    <motion.article
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(0,212,255,0.2)",
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 p-7 md:p-8"
      style={{
        background: featuredBackground,
        boxShadow: "0 0 30px rgba(0,212,255,0.15), inset 0 0 30px rgba(0,0,0,0.5)",
        transition: "all 0.35s ease",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 38px, rgba(0,212,255,0.14) 39px, transparent 40px)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="mb-2 inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase"
              style={{ color: "#F59E0B", letterSpacing: "0.08em" }}
            >
              <span>★</span>
              Featured
            </span>
            <span
              className="inline-flex rounded-[20px] px-[10px] py-[3px] text-[0.72rem] font-medium"
              style={categoryStyles[project.category]}
            >
              {project.category}
            </span>
          </div>
          <ProjectLinks project={project} />
        </div>

        <h3 className="font-sora text-2xl font-bold text-white">{project.title}</h3>
        <p className="font-inter text-sm leading-relaxed text-slate-300">{project.description}</p>

        <span style={metricBadgeStyle}>⚡ {project.metric}</span>

        <div>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={techTagStyle}
              className="inline-block border border-[rgba(0,212,255,0.28)] bg-[rgba(0,212,255,0.11)] text-[#D7E8F8] shadow-[0_0_14px_rgba(0,212,255,0.14)] transition-all duration-200 hover:scale-[1.05] hover:border-[rgba(0,212,255,0.52)] hover:bg-[rgba(0,212,255,0.2)] hover:text-[#EFF8FF] hover:shadow-[0_0_22px_rgba(0,212,255,0.28)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <FeaturedPreview projectId={project.id} />
      </div>
    </motion.article>
  );
}

function SmallProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        borderColor: "rgba(0,212,255,0.4)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
      }}
      className="relative rounded-[16px] border p-7"
      style={{
        background: "#0D0D18",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "all 0.3s ease",
      }}
    >
      <span
        className="pointer-events-none absolute right-4 top-3 z-0 select-none font-sans text-[6rem] font-black leading-none"
        style={{ color: "rgba(255,255,255,0.05)" }}
      >
        {project.id}
      </span>

      <div className="relative z-[1]">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className="inline-flex rounded-[20px] px-[10px] py-[3px] text-[0.72rem] font-medium"
            style={categoryStyles[project.category]}
          >
            {project.category}
          </span>

          <ProjectLinks project={project} />
        </div>

        <h3 className="mb-3 pr-10 font-sora text-xl font-semibold text-[#F1F5F9]">{project.title}</h3>
        <p className="mb-4 font-inter text-sm leading-relaxed text-[#94A3B8]">{project.description}</p>

        <span style={metricBadgeStyle}>⚡ {project.metric}</span>

        <div>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={techTagStyle}
              className="inline-block border border-[rgba(0,212,255,0.28)] bg-[rgba(0,212,255,0.11)] text-[#D7E8F8] shadow-[0_0_14px_rgba(0,212,255,0.14)] transition-all duration-200 hover:scale-[1.05] hover:border-[rgba(0,212,255,0.52)] hover:bg-[rgba(0,212,255,0.2)] hover:text-[#EFF8FF] hover:shadow-[0_0_22px_rgba(0,212,255,0.28)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const smallProjects = projects.slice(2);
  const githubProfileUrl = "https://github.com/Apple-beep";

  return (
    <section id="projects" className="px-6 py-[100px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-fira text-sm uppercase tracking-[0.14em] text-[#00D4FF]">
            {"< 03. PROJECTS />"}
          </p>
          <h2 className="mt-3 font-sora text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white">
            Things I&apos;ve Built
          </h2>
          <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />
          <p className="mt-4 font-inter text-[15px] leading-relaxed text-[#94A3B8]">
            A selection of real-world projects — shipped, measured, and production-ready.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="interactive"
          aria-label="Open Apple-beep GitHub profile in a new tab"
          onClick={(event) => {
            event.preventDefault();
            window.open(githubProfileUrl, "_blank", "noopener,noreferrer");
          }}
          className="relative z-10 mt-14 flex w-fit cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#00D4FF] px-8 py-3.5 text-[0.9rem] font-medium tracking-[0.02em] text-[#00D4FF] no-underline transition-all duration-300 hover:bg-[#00D4FF] hover:text-[#0A0A0F] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          style={{ borderWidth: "1.5px", marginLeft: "auto", marginRight: "auto" }}
        >
          <Github size={18} />
          View All Projects on GitHub →
        </a>
      </div>
    </section>
  );
}
