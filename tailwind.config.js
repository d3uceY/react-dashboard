/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#F0F1F5',
        'red': '#FB5152',
        'blue': '#88D2F3',
        'darkblue': '#0120F7',
        'green': '#CDEDEC',
        'verydarkblue': '#1B1C34',
      }
    },
  },
  plugins: [],
}