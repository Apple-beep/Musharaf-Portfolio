import { motion } from "framer-motion";
import {
  testimonialHighlightTags,
  testimonialsData,
} from "../data/portfolioData";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function FloatingDot({ className, delay = 0, duration = 8, prefersReducedMotion = false }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "#00d4ff",
        boxShadow:
          "0 0 20px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.2)",
        opacity: 0.7,
      }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -20, 0, 15, 0],
              x: [0, 10, -5, 8, 0],
              opacity: [0.7, 1, 0.8, 1, 0.7],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    />
  );
}

export default function Testimonials() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-[120px]">
      <FloatingDot
        className="right-[7%] top-16 hidden md:block"
        delay={0.2}
        duration={8}
        prefersReducedMotion={prefersReducedMotion}
      />
      <FloatingDot
        className="bottom-12 left-[5%] hidden md:block"
        delay={1.1}
        duration={9}
        prefersReducedMotion={prefersReducedMotion}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <span
            className="mb-[14px] block font-fira text-[0.82rem] uppercase text-[#00D4FF]"
            style={{ letterSpacing: "0.12em" }}
          >
            {"< 06. TESTIMONIALS />"}
          </span>

          <h2 className="mb-2 font-sora text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.15] text-[#F1F5F9]">
            Testimonials
          </h2>

          <div className="mx-auto mb-6 h-[3px] w-14 rounded-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />

          <p className="mx-auto max-w-3xl font-inter text-[15px] leading-relaxed text-[#94A3B8]">
            Feedback from supervisors and colleagues who have seen my work,
            professionalism, and collaboration firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.08, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {testimonialHighlightTags.map((highlight) => (
            <span
              key={highlight}
              className="rounded-[999px] border border-[rgba(0,212,255,0.42)] bg-[rgba(0,212,255,0.14)] px-3 py-1 font-fira text-[12px] text-[#D7E8F7] shadow-[0_0_16px_rgba(0,212,255,0.22)] hover:border-[rgba(0,212,255,0.72)] hover:bg-[rgba(0,212,255,0.24)] hover:text-[#EAF7FF] hover:shadow-[0_0_24px_rgba(0,212,255,0.38)]"
              style={{
                transition: prefersReducedMotion ? "none" : "all 200ms ease",
              }}
            >
              {highlight}
            </span>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                delay: prefersReducedMotion ? 0 : index * 0.12,
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
              className="glass relative overflow-hidden rounded-[16px] p-7 md:p-8"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-5 font-sora text-[48px] leading-none md:left-8 md:top-6"
                style={{ color: "rgba(0, 212, 255, 0.32)" }}
              >
                &ldquo;
              </span>

              <div className="relative z-[1] flex h-full flex-col pt-8">
                <blockquote className="flex-1">
                  <p className="font-inter text-[15px] leading-[1.75] text-[#CBD5E1]">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div
                  className="mt-6 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(0,212,255,0.22) 50%, rgba(255,255,255,0.06) 100%)",
                  }}
                />

                <div className="mt-5">
                  <h3 className="font-sora text-[1rem] font-semibold text-[#F1F5F9]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 font-inter text-sm text-[#94A3B8]">
                    {testimonial.title}
                  </p>
                  <p className="mt-1 font-fira text-[13px] text-[#00D4FF]">
                    {testimonial.org}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
