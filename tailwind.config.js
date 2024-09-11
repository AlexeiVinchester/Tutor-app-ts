/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': 'rgb(255, 92, 53)', 
        'bg-info': 'rgb(254, 244, 234)',
        'main-turquoise': 'rgb(80, 201, 173)'
      }
    },
  },
  plugins: [],
}