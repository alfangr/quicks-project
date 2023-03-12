/** @type {import('tailwindcss').Config} */
const colors = require('./src/constants/color');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
