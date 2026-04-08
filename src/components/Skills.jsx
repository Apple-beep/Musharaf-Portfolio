import { motion } from "framer-motion";
import {
  BrainCircuit,
  Car,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  Smartphone,
  Users,
} from "lucide-react";
import { useMemo } from "react";
import { skillCategories, skillsTicker, softSkills } from "../data/portfolioData";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import SectionHeader from "../ui/SectionHeader";

const tickerGroups = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "Swift", "C++", "C", "Go", "SQL", "MATLAB", "HTML/CSS", "React", "Flask", "Node.js", "Redux", "Express"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning", "Pandas", "NumPy", "Matplotlib", "Tableau", "Data Analysis"],
  cloud: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Kubernetes", "Linux/Ubuntu", "CI/CD", "Jenkins", "Git/GitHub", "VirtualBox", "Microservices"],
  dbapi: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "REST APIs", "GraphQL", "API Design", "Performance Optimization"],
  mobile: ["SwiftUI", "AVFoundation", "Xcode", "Instruments", "Vision", "C/Assembly", "gdb", "valgrind", "strace", "Embedded Systems"],
  specialized: ["LiDAR", "Radar", "ROS (Robot Operating System)", "V2X Communication", "Camera Sensor Fusion", "Agile/Scrum", "Test-Driven Development", "Code Review"],
  soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Mentoring"],
};

const tickerPalette = {
  languages: { color: "#93C5FD", border: "rgba(59,130,246,0.35)" },
  aiml: { color: "#F9A8D4", border: "rgba(236,72,153,0.35)" },
  cloud: { color: "#FCD34D", border: "rgba(245,158,11,0.35)" },
  dbapi: { color: "#C4B5FD", border: "rgba(139,92,246,0.35)" },
  mobile: { color: "#7DD3FC", border: "rgba(14,165,233,0.35)" },
  specialized: { color: "#FCA5A5", border: "rgba(239,68,68,0.35)" },
  soft: { color: "#94A3B8", border: "rgba(148,163,184,0.25)" },
};

const categoryIconMap = {
  Code2,
  BrainCircuit,
  Cloud,
  Database,
  Smartphone,
  Car,
};

const categoryCardMeta = {
  "Languages & Frameworks": { accent: "#3B82F6" },
  "AI/ML & Data Science": { accent: "#EC4899" },
  "Cloud & DevOps": { accent: "#F59E0B" },
  "Databases & APIs": { accent: "#8B5CF6" },
  "Mobile & Systems": { accent: "#0EA5E9" },
  "Specialized & Emerging Tech": { accent: "#EF4444" },
};

const softSkillIconMap = {
  Users,
  MessageSquare,
  Lightbulb,
  Handshake,
  GraduationCap,
  RefreshCw,
};

const proficiencyBars = [
  {
    label: "Python + AI/ML",
    percent: 88,
    gradient: "linear-gradient(90deg, #EC4899, #8B5CF6)",
  },
  {
    label: "React + Frontend",
    percent: 86,
    gradient: "linear-gradient(90deg, #3B82F6, #06B6D4)",
  },
  {
    label: "Backend + SQL",
    percent: 84,
    gradient: "linear-gradient(90deg, #10B981, #3B82F6)",
  },
  {
    label: "Cloud + DevOps",
    percent: 81,
    gradient: "linear-gradient(90deg, #F59E0B, #EF4444)",
  },
  {
    label: "Security",
    percent: 79,
    gradient: "linear-gradient(90deg, #EF4444, #EC4899)",
  },
];

function getTickerStyle(skill) {
  const group =
    Object.entries(tickerGroups).find(([, items]) => items.includes(skill))?.[0] ?? "soft";
  const palette = tickerPalette[group] ?? tickerPalette.soft;

  return {
    color: palette.color,
    borderColor: palette.border,
  };
}

export default function Skills() {
  const tickerSet = useMemo(() => [...skillsTicker, ...skillsTicker, ...skillsTicker], []);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.section
      id="skills"
      className="px-6 py-[120px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader number="4" label="Skills" title="My Toolkit" />

        <div className="mt-14 space-y-12">
          <div className="space-y-4 overflow-hidden">
            <div className="flex w-max animate-scroll-left gap-4 hover:[animation-play-state:paused]">
              {tickerSet.map((skill, index) => {
                const style = getTickerStyle(skill);
                return (
                  <span
                    key={`left-${skill}-${index}`}
                    className="inline-flex items-center gap-[6px] whitespace-nowrap rounded-[20px] border px-[14px] py-[6px] text-[0.78rem]"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      borderColor: style.borderColor,
                      color: style.color,
                      borderRadius: "999px",
                      padding: "6px 16px",
                    }}
                  >
                    <span style={{ color: style.color, fontSize: "0.55rem" }}>✦</span>
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className="flex w-max animate-scroll-right gap-4 hover:[animation-play-state:paused]">
              {tickerSet.map((skill, index) => {
                const style = getTickerStyle(skill);
                return (
                  <span
                    key={`right-${skill}-${index}`}
                    className="inline-flex items-center gap-[6px] whitespace-nowrap rounded-[20px] border px-[14px] py-[6px] text-[0.78rem]"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      borderColor: style.borderColor,
                      color: style.color,
                      borderRadius: "999px",
                      padding: "6px 16px",
                    }}
                  >
                    <span style={{ color: style.color, fontSize: "0.55rem" }}>✦</span>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const meta = categoryCardMeta[category.name] ?? { accent: "#00D4FF" };
              const Icon = categoryIconMap[category.icon];

              return (
                <motion.article
                  key={category.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                  className="rounded-[12px] border p-7"
                  style={{
                    background: "#0D0D18",
                    borderColor: "rgba(255,255,255,0.07)",
                    borderTop: `3px solid ${meta.accent}`,
                    padding: "28px 24px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    className="mb-[14px] inline-flex items-center justify-center rounded-[8px]"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `${meta.accent}26`,
                      color: meta.accent,
                    }}
                  >
                    {Icon ? <Icon size={18} strokeWidth={2.2} /> : "•"}
                  </span>
                  <h3 className="mb-4 flex items-center gap-2.5 font-sora text-[1rem] font-bold text-[#F1F5F9]">
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[8px] border px-2 py-1 font-mono text-[0.82rem] font-semibold text-[#F1F5F9] shadow-[0_0_0_1px_rgba(0,212,255,0.14),0_0_18px_rgba(0,212,255,0.2)] transition-all duration-200 hover:scale-[1.05] hover:brightness-110 hover:border-[rgba(0,212,255,0.62)] hover:bg-[rgba(0,212,255,0.24)] hover:text-white hover:shadow-[0_0_0_1px_rgba(0,212,255,0.26),0_0_26px_rgba(0,212,255,0.32)]"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.14) 100%)",
                          borderColor: "rgba(0,212,255,0.38)",
                          fontFamily: "'Courier New', monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-sora text-[0.95rem] font-semibold text-[#F1F5F9]">
                Soft Skills:
              </span>
              <span
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,212,255,0.22) 0%, rgba(124,58,237,0.12) 55%, transparent 100%)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {softSkills.map((skill, index) => {
                const Icon = softSkillIconMap[skill.icon] ?? Users;

                return (
                  <motion.article
                    key={skill.name}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.5,
                      delay: prefersReducedMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            y: -4,
                            borderColor: "rgba(0, 212, 255, 0.45)",
                            boxShadow: "0 0 30px rgba(0, 212, 255, 0.2)",
                          }
                    }
                    className="glass rounded-[16px] p-6"
                    style={{
                      borderColor: "rgba(255,255,255,0.07)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="inline-flex shrink-0 items-center justify-center rounded-[12px]"
                        style={{
                          width: "48px",
                          height: "48px",
                          background: "rgba(0,212,255,0.1)",
                          color: "#00D4FF",
                        }}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </span>

                      <div>
                        <h3 className="font-sora text-[1rem] font-bold text-[#F1F5F9]">
                          {skill.name}
                        </h3>
                        <p className="mt-2 font-inter text-[0.95rem] leading-[1.75] text-[#94A3B8]">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0 }}
            style={{
              background: "#0D0D18",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "36px 40px",
              marginTop: "32px",
            }}
          >
            <h3
              style={{
                color: "#F1F5F9",
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: "28px",
                marginTop: "56px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              Proficiency Levels
              <span
                style={{
                  height: "1px",
                  flex: 1,
                  background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)",
                }}
              />
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {proficiencyBars.map((bar, index) => (
                <div key={bar.label} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#F1F5F9",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {bar.label}
                    </span>
                    <span
                      style={{
                        color: "#00D4FF",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {bar.percent}%
                    </span>
                  </div>

                  <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${bar.percent}%` }}
                      transition={{
                        duration: 1.4,
                        ease: "easeOut",
                        delay: index * 0.12,
                      }}
                      viewport={{ once: true, amount: 0 }}
                      style={{
                        height: "100%",
                        background: bar.gradient,
                        borderRadius: "999px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                          animation: "shimmer-bar 2.5s ease-in-out infinite",
                          borderRadius: "999px",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
