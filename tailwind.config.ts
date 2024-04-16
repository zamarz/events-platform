import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#264653",
        secondary: "#2A9D8F",
        tertiary: {
          dark: "#E76F51",
          light: "#F4A261",
          alt: "#fefae0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
