/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {screens: {
      'md': '960px'
    },
    colors: {
      'primary': '#4e54c8',
      'secondary': '#7271E9',
      'greyText': '#333333',
      'background': '#f3f2f1'

    }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
