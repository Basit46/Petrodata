/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#171717",
        ash: "#262626",
        white: "#FAFAFA",
        green: "#009688",
        gray: "#A3A3A3",
      },
      screens: {
        xmd: "700px",
        vsm: "400px",
      },
    },
  },
  plugins: [],
};
