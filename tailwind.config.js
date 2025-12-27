/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coconut': {
          DEFAULT: '#6B8E23', // Olive Drab / Green
          'dark': '#4b661a',
          'light': '#8fb347',
        },
        'spice': {
          DEFAULT: '#D2691E', // Chocolate / Cinnamon
          'red': '#B22222',   // Firebrick
          'gold': '#DAA520',  // Goldenrod
        },
        'sand': '#F5F5DC',   // Beige
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

