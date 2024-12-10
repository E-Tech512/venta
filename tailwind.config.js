/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'black',    // Color primario
        secondary: 'white',  // Color secundario
        tertiary: 'gray',   // Color terciario
      },
    },
  },
  plugins: [],
}

