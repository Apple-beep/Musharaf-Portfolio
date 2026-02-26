import { motion } from "framer-motion";

export default function Footer() {
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
      <div className="mx-auto w-full max-w-[1200px] text-center">
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
    </motion.footer>
  );
}
