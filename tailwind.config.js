/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "960px",
      },
      colors: {
        background: "#121212",
        primary: "#1B95E0",
        secondary: "#2B2B2B",
        textPrimary: "#ffffffde",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
