import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#006064",
      primary2: "#00a9b0",
      primary3: "#005f63",
      primary4: "#00cdd6",
      primary5: "#00e2ff",
      secondary: "#ff9800",
      "dark-secondary": "#ffa800",
      "light-grey": "#cb7800",
      gray: "#929292",
      gray2: "#f7f7f7",
      "gray-light": "#838281",
      light: "#ffa800",
      "light-100": "#F7F7F7",
      "light-200": "#f7f7f7e1",
      white2: "#CEE5F2",
      red: "#d10000",
      whited: "#EDF2F4",
      white: "#FFF",
      black: "#000",
      transparent: "#00000000",
    },
    extend: {
      backgroundImage: {},
      boxShadow: {
        image: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
