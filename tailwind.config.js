/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "linear-gradient(180deg,#fb727e,#f45151 75%)",
      },
      boxShadow: {
        "3xl": "0 -3px 3px rgba(0,0,0,.09)",
      },
    },
  },
  plugins: [],
};
