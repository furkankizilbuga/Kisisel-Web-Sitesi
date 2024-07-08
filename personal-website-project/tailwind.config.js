/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-light-grey': '#6B7280',
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