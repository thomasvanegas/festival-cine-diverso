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
        /**
         * Paleta oficial de la III Edición (2025) — "Historias que nos habitan".
         * Fuente: public/imgs/edicion_2025/Códigos de color.jpg
         * Rosas/morados (hojas del roble morado y raíces), amarillos/naranjas
         * (roble amarillo y cielo) y marrones (tronco/tierra).
         */
        edicion25: {
          rosa: '#c55eb6',
          magenta: '#9740ab',
          violeta: '#69268e',
          ciruela: '#3c0e4e',
          lila: '#ce80ff',
          iris: '#6428a7',
          indigo: '#401967',
          noche: '#300e52',
          sol: '#e7be3c',
          ambar: '#d5942d',
          cobre: '#a76019',
          tierra: '#6d4125',
          crema: '#fff49f',
          mantequilla: '#f5df77',
          arena: '#e7c95f',
          /** Fondo de la banda inferior del poster oficial (blanco cálido). */
          papel: '#fffce3',
          /** Color de la base de tierra.webp: el footer 2025 empata con él. */
          subsuelo: '#1d042d',
        },
      },
    },
  },
  plugins: [],
};
