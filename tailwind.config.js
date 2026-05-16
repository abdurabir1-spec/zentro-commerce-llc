/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oxblood: "#6F1D1B",
        champagne: "#BB9457",
        copper: "#99582A",
        parchment: "#FFE6A7",
        ink: "#090807",
        graphite: "#141210",
        smoke: "#E8E1D2",
        platinum: "#B8B1A2",
      },
      boxShadow: {
        "premium": "0 34px 110px rgba(0, 0, 0, 0.48)",
        "gold": "0 22px 70px rgba(187, 148, 87, 0.18)",
        "inner-gold": "inset 0 1px 0 rgba(255, 230, 167, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.58" },
          "50%": { opacity: "0.95" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.72s ease-out both",
        "soft-pulse": "soft-pulse 4.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
