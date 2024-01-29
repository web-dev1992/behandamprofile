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
        white: "0px 0px 10px rgba(255,255, 255 ,.2)",
      },
      dropShadow: {
        "3xl": "5px 5px 5px rgba(255,255,255,0.5)",
        red: "0px 0px 5px rgba(255,0, 0 ,.2)",
      },
      fontFamily: {
        IRANSans: "IRANSansXFaNum",
      },
      colors: { rose: "#f45151" },
    },
  },
  plugins: [],
};
