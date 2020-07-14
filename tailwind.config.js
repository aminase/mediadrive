module.exports = {
 purge: [],
 theme: {
  rotate: {
   '270': '270deg',
  },
 },
 variants: [
  'responsive',
  'group-hover',
  'group-focus',
  'focus-within',
  'first',
  'last',
  'odd',
  'even',
  'hover',
  'focus',
  'active',
  'visited',
  'disabled',
 ],

 plugins: [require('tailwind')],
}
