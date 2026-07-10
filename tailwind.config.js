/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        ample: ['AmpleSoft', 'sans-serif'],
      },
      colors: {
        festivalRed: '#FA0201',
      },
    },
  },
  plugins: [],
};
