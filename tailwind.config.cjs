/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'Fondo': "url('/src/imgs/fondo.svg')",
      },
    },
  },
  plugins: [],
};
