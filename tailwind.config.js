/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui', 'sans-serif'],
    },

    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',

      success: {
        500: '#00875f',
        100: '#00b37e',
      },

      danger: {
        500: '#C44751',
        100: '#f75a68',
      },

      gray: {
        100: '#e1e1e6', // highlight
        300: '#c4c4cc', // headline
        400: '#8d8d99', // body

        500: '#7c7c8a', // placeholder
        600: '#323238', // divider

        700: '#29292e', // card
        800: '#202024', // cards
        900: '#121214', // background
      },
    },
    extend: {},
  },
  plugins: [],
};
