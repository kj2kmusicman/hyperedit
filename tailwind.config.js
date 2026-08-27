/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NextMoney brand colors
        nextmoney: {
          green: '#10B981',
          gold: '#C8A84E',
          black: '#0A0A0A',
          dark: '#111111',
        },
      },
    },
  },
  plugins: [],
};
