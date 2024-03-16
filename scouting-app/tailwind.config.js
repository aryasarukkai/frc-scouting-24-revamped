module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        popup: 'popup 0.3s ease-in-out',
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}