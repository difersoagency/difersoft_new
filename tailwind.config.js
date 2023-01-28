/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main-yellow' : '#FBAA19',
        'main-purple' :  '#7F4B9E',
        'dark-purple' : '#562B81',
        'white' : '#FFFFFF',
      },
    },
  },
  plugins: [],
}
