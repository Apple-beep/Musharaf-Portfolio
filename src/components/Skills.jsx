import { motion } from "framer-motion";
import { useMemo } from "react";
import { skillCategories, skillsTicker } from "../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";

const tickerGroups = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
  data: ["Pandas", "NumPy", "Matplotlib", "MongoDB", "Data Analysis", "Visualization"],
  cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Git", "CI/CD"],
  web: ["React", "Node.js", "Express", "Firebase", "REST APIs", "GraphQL"],
  soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Mentoring"],
};

const tickerPalette = {
  languages: { color: "#93C5FD", border: "rgba(59,130,246,0.35)" },
  aiml: { color: "#F9A8D4", border: "rgba(236,72,153,0.35)" },
  data: { color: "#C4B5FD", border: "rgba(139,92,246,0.35)" },
  cloud: { color: "#FCD34D", border: "rgba(245,158,11,0.35)" },
  web: { color: "#6EE7B7", border: "rgba(16,185,129,0.35)" },
  soft: { color: "#94A3B8", border: "rgba(148,163,184,0.25)" },
};

const categoryCardMeta = {
  Languages: { accent: "#3B82F6", icon: "</>" },
  "AI/ML": { accent: "#EC4899", icon: "AI" },
  Data: { accent: "#8B5CF6", icon: "DB" },
  "Cloud & Systems": { accent: "#F59E0B", icon: "☁" },
  "Web/Tools": { accent: "#10B981", icon: "{ }" },
  "Soft Skills": { accent: "#06B6D4", icon: "✦" },
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

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => {
              const meta = categoryCardMeta[category.name] ?? { accent: "#00D4FF", icon: "•" };

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
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      background: `${meta.accent}26`,
                      color: meta.accent,
                    }}
                  >
                    {meta.icon}
                  </span>
                  <h3 className="mb-4 flex items-center gap-2.5 font-sora text-[1rem] font-bold text-[#F1F5F9]">
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[5px] border px-[10px] py-1 font-mono text-[0.75rem] text-[#CBD5E1] transition-all duration-200 hover:scale-[1.03] hover:border-[rgba(0,212,255,0.35)] hover:bg-[rgba(0,212,255,0.1)] hover:text-[#00D4FF]"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          borderColor: "rgba(255,255,255,0.1)",
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
