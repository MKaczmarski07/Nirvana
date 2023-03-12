/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {screens: {
      'md': '960px'
    }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
