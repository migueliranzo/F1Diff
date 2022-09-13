module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1314px",
        xl: "1314px",
        "2xl": "1314px",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
