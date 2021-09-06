module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#14171a',
          200: '#657786',
          300: '#aab8c2',
          400: '#e1e8ed',
          500: '#f5f8fa',
        },
        brand: {
          100: '#1da1f2',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
