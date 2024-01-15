module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwindcss'), require('autoprefixer')]
};
