/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "960px",
        sm: "700px",
      },
      colors: {
        background: "#1e1e38",
        primary: "#1B95E0",
        secondary: "#262948",
        accent: "#424a71",
        textPrimary: "#ffffffde",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
