module.exports = {
 purge: [],
 theme: {
  rotate: {
   '270': '270deg',
  },
 },
 variants: {
  opacity: ['responsive', 'hover', 'focus', 'disabled'],
 },

 plugins: [require('tailwind')],
}
