const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./components/**/*.js", "./stories/**/*.*", "./.storybook/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        green: colors.green,
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["hover"],
      ringWidth: ["hover"],
    },
  },
  plugins: [],
};
