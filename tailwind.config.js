/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': {
          100: '#e3f2fd',
          200: '#bbdefb',
          300: '#90caf9',
          400: '#64b5f6',
          500: '#42a5f5',
          600: '#2196f3',
          700: '#1e88e5',
          800: '#1976d2',
          900: '#1565c0',
        },
        'sand-gold': {
          100: '#fff8e1',
          200: '#ffecb3',
          300: '#ffe082',
          400: '#ffd54f',
          500: '#ffca28',
          600: '#ffc107',
          700: '#ffb300',
          800: '#ffa000',
          900: '#ff8f00',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

