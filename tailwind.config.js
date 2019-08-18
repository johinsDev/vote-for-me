// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    colors: {
      white: "#fff",
      gray: {
        ...colors.gray,
        "300": "#ebebeb",
        "400": "#333333",
        "500": "#666666",
        "700": "#979797",
      },
    },
  },
};
