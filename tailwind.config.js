/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      'custom-bg': '#385165'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
