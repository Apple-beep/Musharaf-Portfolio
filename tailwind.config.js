/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        bg: { primary: "#050508", secondary: "#0a0a12" },
        accent: { cyan: "#00d4ff", purple: "#7b2ff7", green: "#00ff88" },
        text: { primary: "#e6edf3", muted: "#7d8590" },
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(0,212,255,0.15), transparent 70%)",
      },
      animation: {
        "scroll-left": "scroll-left 180s linear infinite",
        "scroll-right": "scroll-right 200s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,212,255,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.5)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
