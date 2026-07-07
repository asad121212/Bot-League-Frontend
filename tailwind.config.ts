import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces (near-black arena look)
        surface: {
          DEFAULT: "#0B0B0D",
          raised: "#17171A",
          card: "#1C1C20",
          border: "#2A2A2F",
        },
        // Brand accent (arena red)
        brand: {
          DEFAULT: "#E5342A",
          hover: "#C82920",
          muted: "#3A1613",
        },
        gold: {
          DEFAULT: "#D9A72C",
          muted: "#2A2312",
        },
        ink: {
          primary: "#F5F5F7",
          secondary: "#B4B4BA",
          muted: "#75757C",
        },
      },
      fontFamily: {
        display: ["'Rajdhani'", "'Barlow Condensed'", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        glow: "0 0 24px rgba(229, 52, 42, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
