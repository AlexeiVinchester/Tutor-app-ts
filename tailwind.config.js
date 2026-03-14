/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-accent': 'var(--color-primary-accent)',
        turquoise: 'var(--color-turquoise)',
        'text-primary': 'var(--color-text-primary)',
        'main-orange': 'var(--color-primary)',
        'main-turquoise': 'var(--color-turquoise)',
        'bg-info': 'rgb(254, 244, 234)',
        footer: 'rgb(25, 39, 51)',
        'footer-text': 'rgb(182, 199, 214)',
        'hover-blue': 'rgb(0, 95, 163)',
        'back-side-statistics': 'rgb(25, 39, 51)',
        'statistics-back': 'rgb(246, 249, 252)',
        'send-data-button-text': 'var(--color-primary)',
      },
      boxShadow: {
        card: 'var(--shadow-md)',
        card-sm: 'var(--shadow-sm)',
        panel: 'var(--shadow-panel)',
      },
    },
    fontFamily: {
      'footer-text': '"Lexend Deca", sans-serif',
    },
  },
  plugins: [],
};
