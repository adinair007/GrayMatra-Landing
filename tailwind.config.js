/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        saffron: "rgba(254, 159, 6, 1)",
      },
    },
  },
  plugins: [],
};
