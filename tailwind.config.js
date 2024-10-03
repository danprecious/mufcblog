/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        bg: "var(--background-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        bgShade: "var(--background-shade)",
        textcolor: "var(--text-color)",

      }
    },
  },
  plugins: [],
};
