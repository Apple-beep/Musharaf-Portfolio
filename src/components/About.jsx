import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, GraduationCap, MapPin, Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../ui/SectionHeader";

const BIO_PARAGRAPH_1 =
  "I'm a Software Engineer and CS senior at Illinois Institute of Technology, graduating May 2026. At Colorado Resilience, I engineer React frontends, Flask REST APIs, and AWS infrastructure for production compliance software used in regulated environments.";

const BIO_PARAGRAPH_2 =
  "I've shipped real tools people use — HireLens, an AI resume screener with bias detection, and CheckURL, a Firefox extension that achieved 92% phishing detection accuracy. I'm also an Apple WWDC Swift Student Challenge participant with VisionVoice, an iOS accessibility app achieving 95% OCR accuracy.";

const INFO_BADGES = [
  { icon: MapPin, label: "Chicago, IL" },
  { icon: GraduationCap, label: "May 2026 · GPA 3.8" },
  { icon: BriefcaseBusiness, label: "F-1 OPT Ready" },
  { icon: Star, label: "McKinsey Forward Scholar" },
  { icon: Award, label: "Apple WWDC Participant" },
];

const STATS = [
  { key: "gpa", label: "GPA", value: 3.8, decimals: 1, suffix: "" },
  { key: "deans-list", label: "DEAN'S LIST", value: 6, decimals: 0, suffix: "×" },
  { key: "students", label: "STUDENTS MENTORED", value: 100, decimals: 0, suffix: "+" },
  { key: "roles", label: "PROFESSIONAL ROLES", value: 5, decimals: 0, suffix: "" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.section
      id="about"
      className="px-6 pb-[120px] pt-[80px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader number="1" label="About" title="Get to Know Me" />

        <div className="mt-14 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <motion.div
            className="mx-auto w-full max-w-[320px]"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative w-full overflow-hidden rounded-[20px]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,212,255,0.2), 0 0 60px rgba(124,58,237,0.25), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Animated conic border glow */}
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[20px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, transparent 50%, rgba(124,58,237,0.15) 100%)",
                }}
              />

              {/* Profile Photo */}
              <img
                src="/profile.jpg"
                alt="Musharaf Khan Pathan - Software Engineer at Illinois Institute of Technology"
                className="relative z-0 h-full w-full object-cover object-top"
                style={{ aspectRatio: "3 / 4", display: "block" }}
                onError={(e) => {
                  // Fallback to MKP card if photo not found
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />

              {/* Fallback card (hidden by default, shows if image fails) */}
              <div
                className="relative z-0 hidden h-full w-full flex-col items-center justify-center rounded-[20px] border p-8 text-center"
                style={{
                  aspectRatio: "3 / 4",
                  background:
                    "linear-gradient(135deg, #0D0D25 0%, #1A0A3A 50%, #0D1525 100%)",
                  borderColor: "rgba(0,212,255,0.25)",
                }}
              >
                <span
                  className="font-sora text-[4rem] font-extrabold leading-none"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MKP
                </span>
                <p className="mt-2 text-[0.75rem] text-[#94A3B8]">Musharaf Khan Pathan</p>
              </div>

              {/* Name + badge overlay at bottom of photo */}
              <div
                className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-2 pb-5 pt-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.6) 60%, transparent 100%)",
                }}
              >
                <p className="font-sora text-[0.9rem] font-semibold text-white">Musharaf Khan Pathan</p>
                <span className="inline-flex items-center gap-2 rounded-[999px] border border-[rgba(34,197,94,0.35)] bg-[rgba(34,197,94,0.12)] px-3 py-1 font-fira text-[0.72rem] text-[#86EFAC]">
                  <span className="pulse-green-dot h-2 w-2 rounded-full bg-[#22C55E]" />
                  Open to Work
                </span>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="max-w-[520px] space-y-5">
              <p className="font-inter text-[15px] leading-[1.85] text-[#94A3B8]">{BIO_PARAGRAPH_1}</p>
              <p className="font-inter text-[15px] leading-[1.85] text-[#94A3B8]">{BIO_PARAGRAPH_2}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {INFO_BADGES.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(0,212,255,0.28)] bg-[linear-gradient(135deg,rgba(0,212,255,0.12),rgba(124,58,237,0.08))] px-[14px] py-[7px] text-[0.83rem] font-medium text-[#D6E6F8] shadow-[0_0_18px_rgba(0,212,255,0.12)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[rgba(0,212,255,0.55)] hover:bg-[linear-gradient(135deg,rgba(0,212,255,0.18),rgba(124,58,237,0.14))] hover:text-[#F1F7FF] hover:shadow-[0_0_24px_rgba(0,212,255,0.22)]"
                >
                  <item.icon size={15} className="text-[#8CCFFF]" />
                  {item.label}
                </span>
              ))}
            </div>

            <div ref={ref} className="mt-6 grid grid-cols-2 gap-3">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{
                    borderColor: "rgba(0,212,255,0.35)",
                    boxShadow: "0 0 24px rgba(0,212,255,0.08)",
                    y: -3,
                  }}
                  className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#0D0D18] px-4 py-5 text-center transition-all duration-300"
                >
                  <p className="font-fira text-[0.6rem] uppercase tracking-[0.12em] text-[#94A3B8]">
                    {stat.label}
                  </p>

                  <div
                    className="mt-2 flex items-end justify-center gap-0.5 leading-none text-[#00D4FF]"
                    style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "'Courier New', monospace" }}
                  >
                    <span>
                      {inView ? (
                        <CountUp end={stat.value} decimals={stat.decimals} duration={1.6} />
                      ) : (
                        stat.value.toFixed(stat.decimals)
                      )}
                    </span>
                    {stat.suffix ? <span>{stat.suffix}</span> : null}
                  </div>

                  <span className="mx-auto mt-1.5 block h-[2px] w-8 rounded-[2px] bg-[#00D4FF]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
