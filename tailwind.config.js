/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4269a2',
        secondary: '#776d6b',
        light: '#2192FF',
        main_bg: '#4269a210',
      },

    },
  },
  plugins: [],
}