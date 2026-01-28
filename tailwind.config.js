
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. IMPORTANTE: Sin esto, el Dark Mode que tenés por JS no funcionará con Tailwind
  darkMode: 'class',

  content: ["./src/views/**/*.{ejs,html}"],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada opcional
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          600: '#4f46e5',
          700: '#4338ca',
        }
      }
    },
  },
  plugins: [],
}