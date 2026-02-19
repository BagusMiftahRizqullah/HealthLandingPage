import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f1f3d",
        accent: "#38cd92"
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 31, 61, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
