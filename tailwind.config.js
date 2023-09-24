/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2',
        '225': '2.25',
        '250': '2.5',
      },
      grayscale: {
        25: '25%',
        50: '50%',
        75: '75%',
      }
    }
  },
  plugins: []
};
