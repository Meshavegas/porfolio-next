/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      base: "#006064 ",
      "base-soft": "#407072",
      "base-light": "#80B0B2",
      "light-grey": "#9F5F00",
      light: "#FF9800",
      "light-100": "#FFBF60",
      brown: "#473C33",
      red: "#850000",
      black: "#1F1F1F",
      gray: "#8F8F8F",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": 'url("/hero.png")',
        "story-image": 'url("/story.jpg")',
        "testimony-image": 'url("/testimony.jpg")',
      },
    },
  },
  plugins: [],
};
