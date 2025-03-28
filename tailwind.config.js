/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-blue': '#0A2A42',
          'light-blue': '#4DC3FF',
          'dark-text': '#042B4D',
          'light-gray': '#B0C4DE',
          'section-bg': '#041A26',
        },
      },
    },
    plugins: [],
  }