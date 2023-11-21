/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "screen-color": "#e1e1e1",
        "bg-color": "#2fd78a",
        "text-color": "#304c5a",
        "card-light": "#b1b1b1",
      },
    },
  },
  plugins: [],
};
