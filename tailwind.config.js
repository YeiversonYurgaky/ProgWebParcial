/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    colors: {
      'bread': '#e08f48',
      'bread2': '#f3d0a1'
    },},
  },
  plugins: [],
}

