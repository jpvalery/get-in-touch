const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./elements/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        advisor: colors.emerald,
        consultant: colors.violet,
        cta: colors.blue,
        form: colors.blue,
      },
    },
    rotate: {
      "-75": "-75deg",
      75: "75deg",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
