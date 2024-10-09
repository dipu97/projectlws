/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  purge: [],
  variants: {

  },
  content: ["src/**/*.{html,js}", "./src/*.{html,js,jsx}"],
  theme: {
    screens: {


    },
    extend: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],

}

