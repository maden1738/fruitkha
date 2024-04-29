/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#07212e",
        secondary: "#051922",
        background: "#f5f5f5",
        accent: "#f28123",
        accent2: "#f28123bf",
        text: "#888888",
      },
      backgroundImage: {
        hero1: "url('/hero-bg.jpg')",
        hero2: "url('/hero-bg-2.jpg')",
        hero3: "url('/hero-bg-3.jpg')",
      },
    },
  },
  plugins: [],
};
