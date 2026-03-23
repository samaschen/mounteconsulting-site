import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /**
         * Site theme (cream + four swatches: apricot, forest, ochre, teal).
         * Use these for brand-consistent UI; legacy aliases below map here.
         */
        mounte: {
          cream: "#F9F7F2",
          forest: "#1A3C34",
          apricot: "#E8C4A6",
          ochre: "#C6A348",
          teal: "#6B9080",
          "teal-dark": "#567A6E",
        },
        /** Primary actions / links — muted teal from theme */
        brand: {
          50: "#f4f8f6",
          100: "#e3ebe7",
          200: "#c5d9d0",
          300: "#9cbfb1",
          400: "#729e8c",
          500: "#6B9080",
          600: "#567A6E",
          700: "#47645A",
          800: "#3c524a",
          900: "#344541",
          950: "#1c2622",
        },
        /** Contact strip: warm apricot field + forest accents */
        contact: {
          yellow: "#E8C4A6",
          green: "#1A3C34",
        },
        /** Clients band: forest ground + ochre type */
        clients: {
          forest: "#1A3C34",
          gold: "#D4BC6A",
        },
        cream: "#F9F7F2",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "ui-serif", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "marquee-logos": "marqueeX 45s linear infinite",
        "marquee-quotes": "marqueeX 70s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
