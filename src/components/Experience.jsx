import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { experienceData } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const TYPE_STYLES = {
  Engineering: {
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    color: "#93C5FD",
  },
  Automotive: {
    background: "rgba(245,158,11,0.15)",
    border: "1px solid rgba(245,158,11,0.4)",
    color: "#FCD34D",
  },
  Education: {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.4)",
    color: "#6EE7B7",
  },
  Data: {
    background: "rgba(139,92,246,0.15)",
    border: "1px solid rgba(139,92,246,0.4)",
    color: "#C4B5FD",
  },
  AI: {
    background: "rgba(236,72,153,0.15)",
    border: "1px solid rgba(236,72,153,0.4)",
    color: "#F9A8D4",
  },
};

const CURRENT_COMPANIES = new Set(["Colorado Resilience", "EcoCAR EV Challenge"]);

function DateBadge({ date, company }) {
  if (!CURRENT_COMPANIES.has(company) || !date.includes("Present")) {
    return <span>{date}</span>;
  }

  const prefix = date.replace("Present", "").trim();

  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      <span>{prefix}</span>
      <span className="inline-flex items-center gap-[6px] text-[#86efac]">
        <span
          className="pulse-green-dot inline-block rounded-full bg-[#22C55E]"
          style={{ width: "7px", height: "7px" }}
        />
        Present
      </span>
    </span>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const cardVariants = {
    hidden: (offset) => ({
      opacity: 0,
      x: offset,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    }, timelineRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <motion.section
      id="experience"
      className="px-6 py-[120px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span
            className="mb-[14px] block text-[0.82rem] uppercase text-[#00D4FF]"
            style={{ letterSpacing: "0.12em", fontFamily: "'Courier New', monospace" }}
          >
            {"< 02. EXPERIENCE />"}
          </span>
          <h2
            className="mb-2 font-sora font-extrabold text-[#F1F5F9]"
            style={{ fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.15 }}
          >
            Where I've Worked
          </h2>
          <div className="mx-auto mb-12 h-[3px] w-14 rounded-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />
        </motion.div>

        <div ref={timelineRef} className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-[2px] overflow-hidden md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #00D4FF 10%, #7C3AED 50%, #00D4FF 90%, transparent)",
              }}
            />
          </div>

          <motion.div
            className="space-y-10"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            {experienceData.map((item, index) => {
              const right = index % 2 === 1;

              return (
                <div key={`${item.company}-${item.role}`} className="relative flex w-full md:justify-center">
                  <div
                    className="absolute left-[10px] top-7 z-20 h-3 w-3 rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: "#00D4FF",
                      boxShadow: "0 0 10px rgba(0,212,255,0.6)",
                      border: "2px solid #0A0A0F",
                    }}
                  />

                  <motion.div
                    variants={cardVariants}
                    custom={right ? 40 : -40}
                    whileHover={{
                      borderColor: "rgba(0,212,255,0.3)",
                      boxShadow: "0 0 30px rgba(0,212,255,0.05)",
                      y: -4,
                    }}
                    className={`ml-12 w-[calc(100%-56px)] max-w-[440px] rounded-xl border bg-[#0D0D18] px-8 py-7 transition-all duration-300 md:ml-0 md:w-[45%] ${
                      right ? "md:translate-x-[54%]" : "md:-translate-x-[54%]"
                    }`}
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-sora text-lg font-bold text-[#00D4FF]">{item.company}</h3>
                        <p className="mt-1 font-inter text-base font-semibold text-[#F1F5F9]">{item.role}</p>
                      </div>
                      <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-fira text-[0.85rem] text-[#94A3B8]">
                        <DateBadge date={item.date} company={item.company} />
                      </span>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-2 font-inter text-[0.8rem] text-[#64748B]">
                      <MapPin size={13} />
                      {item.location}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2 font-inter text-sm text-[#CBD5E1]">
                          <span className="text-[#00D4FF]">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <span
                      className="mt-5 inline-flex rounded-[8px] px-3 py-1 font-fira text-[11px]"
                      style={TYPE_STYLES[item.type] ?? TYPE_STYLES.Engineering}
                    >
                      {item.type}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
