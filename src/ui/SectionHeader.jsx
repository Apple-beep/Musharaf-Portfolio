import { motion } from "framer-motion";

export default function SectionHeader({ number, label, title, center = false }) {
  const formattedNumber = String(number).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={center ? "text-center" : ""}
    >
      <span
        className="mb-[14px] block font-fira text-[0.82rem] uppercase text-[#00D4FF]"
        style={{ letterSpacing: "0.12em" }}
      >
        {`< ${formattedNumber}. ${label.toUpperCase()} />`}
      </span>
      <h2 className="mb-2 font-sora text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.15] text-[#F1F5F9]">
        {title}
      </h2>
      <div
        className={`mb-12 h-[3px] w-14 rounded-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] ${
          center ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
