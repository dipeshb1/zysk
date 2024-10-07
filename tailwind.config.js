/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        'badgeBg': "#F9F5FF",
        "btn":"#7f56d9",
        "testBg":"#f9fafb",
        "ctaBg":"#F9FAFB"
      },
      colors: {
         'badgeBorder': "#E9D7FE",
         "primary": "#6941C6",
         "h1": "#101828",
         "para": "#475467",
         "cta-border":"#D0D5DD",
         "footer-title": "#667085"
      }
    },
  },
  plugins: [],
};