/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#611f69",
        customBlue:  "#0C7185",
      },
    },
  },
  plugins: [],
};
