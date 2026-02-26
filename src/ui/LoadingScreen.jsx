import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
    >
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 px-8">
        <svg viewBox="0 0 240 120" className="h-28 w-52" aria-label="MKP Logo">
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#7b2ff7" />
            </linearGradient>
          </defs>
          <motion.text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-sora text-[72px] font-extrabold tracking-[0.2em]"
            fill="rgba(0,0,0,0)"
            stroke="url(#loadingGradient)"
            strokeWidth="1.8"
            strokeDasharray="520"
            strokeDashoffset="520"
            initial={{ strokeDashoffset: 520, fill: "rgba(0,0,0,0)" }}
            animate={{ strokeDashoffset: 0, fill: "url(#loadingGradient)" }}
            transition={{
              strokeDashoffset: { duration: 1.5, ease: "easeInOut" },
              fill: { duration: 0.35, delay: 1.2, ease: "easeInOut" },
            }}
          >
            MKP
          </motion.text>
        </svg>

        <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-main"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
