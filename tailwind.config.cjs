/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,svelte}',
  ],
  theme: {
    extend: {},
    colors: {
      'grayish-blue': '#8486a9',
      'soft-red': '#fb6087',

      'white': 'ffffff',
      'dark-desaturated-blue': '#343650',
      'very-dark-blue': '#1e1f29',
      'almost-black-blue': '#191a24',
    },
    fontFamily: {
      'red-hat': ['Red Hat Text', 'sans-serif']
    },
  },
  plugins: [],
};
