/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-orange': 'rgb(255, 92, 53)',
        'bg-info': 'rgb(254, 244, 234)',
        'main-turquoise': 'rgb(80, 201, 173)',
        footer: 'rgb(25, 39, 51)',
        'footer-text': 'rgb(182, 199, 214)',
        'hover-blue': 'rgb(0, 95, 163)',
        'back-side-statistics': 'rgb(25, 39, 51)',
        'statistics-back': 'rgb(246, 249, 252)',
        'send-data-button-text': 'rgb(255, 69, 0)'
      },
    },
    fontFamily: {
      'footer-text': '"Lexend Deca", sans-serif',
    },
  },
  plugins: [],
};
