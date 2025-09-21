/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubic: "'Rubik 80s Fade', system-ui",
      suse: "'SUSE', cursive",
      'm-plus': "'M PLUS 1 Code', monospace",
    },
    extend: {
      colors: {
        'light-ash': '#EAEAEA',
        'midnight-indigo': '#111837',
        'golden-saffron': '#b97603',
        'royal-amethyst': '#7e23a5',
        'light-cream': '#FFFFF6',
      },
    },
  },
  plugins: [require('daisyui')],
};
