import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F5",
        surface: "#FFFFFF",
        border: "#E8E4DE",
        coral: "#E8765A",
        sage: "#A8C4BC",
        ink: "#1A1A1A",
        muted: "#6B6560",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        paper: "0 1px 2px rgba(26, 26, 26, 0.04), 0 10px 30px rgba(26, 26, 26, 0.04)",
        "paper-hover": "0 2px 4px rgba(26, 26, 26, 0.05), 0 16px 38px rgba(26, 26, 26, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
