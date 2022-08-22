module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
