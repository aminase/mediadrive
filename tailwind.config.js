module.exports = {
  purge: [],
  theme: {
    rotate: {
      '270': '270deg',
    },
  },
  variants: {
    outline: ['responsive', 'focus'],
  },

  plugins: [require('tailwind')],
}
