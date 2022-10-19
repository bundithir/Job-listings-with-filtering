/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'Top': "url('./images/bg-header-desktop.svg')",
      }
    },
  },
  plugins: [],
}
