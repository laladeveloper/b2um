const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '80%': { opacity: '0.81' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 0.85s ease-in-out',
      },
    },
    screens: {
      xsm: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
