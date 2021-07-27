const color = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: color.cyan,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: [
        'active',
        'odd',
      ],
    },
  },
  plugins: [],
}
