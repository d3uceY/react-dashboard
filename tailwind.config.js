/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#1B1C34',
        'dark-blue': '#0120F7',
        'blue': '#88D2F3',
        'red': '#FB5152',
        'green': '#20B7B5'
      }
    },
  },
  plugins: [],
}