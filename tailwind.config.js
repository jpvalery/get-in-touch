const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.js",
    "./node_modules/@jpvalery/mistral/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        form: colors.blue,
      },
    },
    rotate: {
      "-75": "-75deg",
      75: "75deg",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
