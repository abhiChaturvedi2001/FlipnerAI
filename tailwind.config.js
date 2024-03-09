/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bgColor": "#3c326f"
      },
      textColor: {
        "headingColor": "#3c326f",
        "textColor": "#8173ea"
      },
      fontFamily: {
        "my-font1": ["Climate Crisis ", "sans-serif"],
        "my-font2": ["Poppins", "sans-serif"]
      }

    },
  },
  plugins: [],
}