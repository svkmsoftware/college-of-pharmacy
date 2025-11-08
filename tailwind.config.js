/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        sop: {
          primary: "#0b3d5b",
          dark: "#072936",
          accent: "#f6b016",
          utilityBg: "#ffffff",
          utilityText: "#22343b",
        },
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown .18s ease-out",
      },
    },
  },
  plugins: [],
};
