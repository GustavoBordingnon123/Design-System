/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      small: 16,
      medium: 18,
      large: 20,
      extraLarge: 24,
      biggest: 32,
    },
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'white': '#FFF',

      gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      400: '#7C7C8A',
      800: '#202024',
      900: '#121214',
      },
      
      cyan: {
        300: '#B3E6F8',
        500: '#81D8F7'
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
