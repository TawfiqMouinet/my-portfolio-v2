import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: { textslide: "openclose 5s ease-in-out infinite" },
      keyframes: {
        openclose: {
          "0%": { top: "0.2rem", width: "0" },
          "5%": { width: "0" },
          "15%": { width: "250px" },
          "30%": { top: "0.2rem", width: "250px" },
          "33%": { top: "0.2rem", width: "0" },
          "35%": { top: "0.2rem", width: "0" },
          "38%": { top: "-5.5rem", width: "0" },
          "48%": { top: "-5.5rem", width: "600px" },
          "62%": { top: "-5.5rem", width: "600px" },
          "66%": { top: "-5.5rem", width: "0", indent: "0" },
          "71%": { top: "-11rem", width: "0", indent: "5px" },
          "86%": { top: "-11rem", width: "720px" },
          "95%": { top: "-11rem", width: "720px" },
          "98%": { top: "-11rem", width: "0", indent: "5px" },
          "100%": { top: "0", width: "0", indent: "0" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
export default config;
