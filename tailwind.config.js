/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'quantic': ["Quantico", 'sans-serif'],
      },
      keyframes: {
        loader: {'to': {transform: 'rotate(360deg)'}},
      },
      animation: {
        'loader': 'loader 1s linear infinite'
      }
    },
  },
  plugins: [],
}

