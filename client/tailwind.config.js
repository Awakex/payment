/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6CB0FF",
        disabled: "#9F9F9F",
      },
    },
  },
  plugins: [],
};
