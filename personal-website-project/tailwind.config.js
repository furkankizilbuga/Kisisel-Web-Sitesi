/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'main-light-grey': '#52565e',
        'main-purple': '#3730A3',
        'title': '#1F2937'
      },
      fontFamily: {
        'main-font': ["Inter Variable", "sans-serif"]
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}