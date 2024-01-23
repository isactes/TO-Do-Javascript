/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  // presets: [require('./src/colorScheme')],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

