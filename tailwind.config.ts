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
      colors: {
        primaryColorLetter: "#ea8e99",
        primaryColorTitle: "#e56479",
        primaryColorTitle2: "#91bd98",
      },
      fontFamily: {
        mainText: ["Ephesis", "Great Vibes", "cursive"],
        secondText: ["Great Vibes"],
        thirdText: [
          "Cookie",
          "cursive",
          "Ephesis",
          "cursive",
          "Great Vibes",
          "cursive",
          "Shadows Into Light",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
