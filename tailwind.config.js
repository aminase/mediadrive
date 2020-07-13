module.exports = {
 purge: [],
 theme: {
  rotate: {
   '270': '270deg',
  },
 },
 variants: {
  outline: ['responsive', 'focus'],
  opacity: ['responsive', 'hover', 'focus', 'disabled'],
 },
 plugins: [require('tailwind')],
}
