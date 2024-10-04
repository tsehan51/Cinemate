module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'other': {'min': '500px', 'max': '1260px' },
      },
    },
  },
  plugins: [],
}