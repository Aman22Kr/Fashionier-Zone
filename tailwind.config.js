/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#282321', wine: '#702f3d', blush: '#f4e9e5', sand: '#f8f5f1', gold: '#b39a72' },
      fontFamily: { sans: ['Inter', 'Arial', 'sans-serif'], serif: ['Cormorant Garamond', 'Georgia', 'serif'] },
      letterSpacing: { editorial: '.18em' }
    }
  },
  plugins: []
}
