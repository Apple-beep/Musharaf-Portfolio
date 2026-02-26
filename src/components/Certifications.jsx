import { motion } from "framer-motion";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "AWS", featured: true },
  { name: "Dean's List (6×)", issuer: "Illinois Tech", featured: true },
  { name: "Data Analytics Professional", issuer: "The Global Career Accelerator" },
  { name: "Career Development Specialist", issuer: "The Global Career Accelerator" },
  { name: "Music Industry Essentials (GRAMMYs)", issuer: "GRAMMYs / Podium" },
  { name: "AI Fundamentals (Intel)", issuer: "Intel" },
  { name: "Academic Excellence Award", issuer: "Illinois Tech" },
  { name: "Leadership Certificate", issuer: "Illinois Tech" },
  { name: "Research Scholar", issuer: "Illinois Tech" },
  { name: "Python Advanced (HackerRank)", issuer: "HackerRank" },
  { name: "Technology Consulting (Deloitte)", issuer: "Deloitte" },
  { name: "Data Visualization (Tata)", issuer: "Tata" },
  { name: "Software Engineering (Wells Fargo)", issuer: "Wells Fargo" },
  { name: "Cybersecurity (Mastercard)", issuer: "Mastercard" },
];

const issuerAccent = {
  AWS: "#FF9900",
  "The Global Career Accelerator": "#8B5CF6",
  "GRAMMYs / Podium": "#F59E0B",
  Intel: "#0071C5",
  "Illinois Tech": "#00D4FF",
  HackerRank: "#00EA64",
  Deloitte: "#86BC25",
  Tata: "#00529B",
  "Wells Fargo": "#D71E28",
  Mastercard: "#EB001B",
};

function FeaturedCertificationCard({ cert, index }) {
  const isAws = cert.issuer === "AWS";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative overflow-hidden border"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        padding: "32px",
        minHeight: "140px",
        background: isAws
          ? "linear-gradient(135deg, #0A1628 0%, #0D2040 60%, #0A1A30 100%)"
          : "linear-gradient(135deg, #0A1A28 0%, #0D1A3A 60%, #080E1E 100%)",
        borderColor: isAws ? "rgba(255,153,0,0.25)" : "rgba(0,212,255,0.2)",
      }}
    >
      <span
        className="pointer-events-none absolute select-none font-sora text-[5rem] font-black leading-none"
        style={{
          bottom: isAws ? "16px" : "12px",
          right: "20px",
          color: isAws ? "rgba(255,153,0,0.06)" : "rgba(0,212,255,0.06)",
        }}
      >
        {isAws ? "AWS" : "6×"}
      </span>

      <span className="absolute text-[#FFD700]" style={{ top: "20px", right: "20px", fontSize: "1.2rem" }}>
        ★
      </span>

      <div className="relative z-10">
        <h3 className="font-sora text-[1.25rem] font-bold text-[#F1F5F9]">{cert.name}</h3>
        <p
          className="mt-2"
          style={{
            color: isAws ? "#FF9900" : "#00D4FF",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.78rem",
          }}
        >
          {cert.issuer}
        </p>
      </div>
    </motion.article>
  );
}

function RegularCertificationCard({ cert, index }) {
  const accent = issuerAccent[cert.issuer] ?? "#00D4FF";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{
        y: -3,
        borderColor: "rgba(255,255,255,0.14)",
        borderLeftColor: accent,
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      }}
      className="rounded-[10px] border transition-all duration-300"
      style={{
        background: "#0D0D18",
        borderColor: "rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${accent}`,
        padding: "18px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <h3 className="font-sora text-[0.95rem] font-semibold leading-[1.3] text-[#F1F5F9]">{cert.name}</h3>
      <p
        className="mt-[2px] flex items-center gap-[7px]"
        style={{ color: accent, fontFamily: "'Courier New', monospace", fontSize: "0.75rem" }}
      >
        <span
          className="inline-block shrink-0 rounded-full"
          style={{ width: "7px", height: "7px", backgroundColor: accent }}
        />
        {cert.issuer}
      </p>
    </motion.article>
  );
}

export default function Certifications() {
  const featured = certifications.filter((cert) => cert.featured);
  const regular = certifications.filter((cert) => !cert.featured);

  return (
    <section id="certifications" className="px-6 py-[120px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span
            className="mb-[14px] block text-[0.82rem] uppercase text-[#00D4FF]"
            style={{ letterSpacing: "0.12em", fontFamily: "'Courier New', monospace" }}
          >
            {"< 05. CERTIFICATIONS />"}
          </span>
          <h2 className="mb-2 font-sora text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.15] text-[#F1F5F9]">
            Credentials &amp; Recognition
          </h2>
          <div className="mb-12 h-[3px] w-14 rounded-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {featured.map((cert, index) => (
            <FeaturedCertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-[14px] md:grid-cols-2">
          {regular.map((cert, index) => (
            <RegularCertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
