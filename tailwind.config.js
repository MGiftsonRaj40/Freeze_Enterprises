/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('src/bg.jpg')",
        backdropBlur: {
          xs: '2px',
          '3xl': '40px',
        }
      }
    },
  },
  plugins: [],
}

