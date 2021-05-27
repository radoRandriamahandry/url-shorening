module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          violet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          violet: "hsl(257, 7%, 63%)",
          "dark-blue": "hsl(255, 11%, 22%)",
          "dark-violet": "hsl(260, 8%, 14%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
