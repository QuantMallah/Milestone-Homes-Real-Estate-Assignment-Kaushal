/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#D4AF37',
          200: '#C8A221',
          300: '#BC950B',
          400: '#B08902',
          500: '#A47C00',
          600: '#986D00',
          700: '#8C5E00',
          800: '#804F00',
          900: '#744000',
        },
      },
    },
  },
  plugins: [],
}