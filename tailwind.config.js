/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primaryColor': '#061738',
      'secondaryColor': '#60cd12',
      'lightColor': '#e2f6de',
      'darkColor': '#03262c',
      'textGray': '#dee2e6',
      'nchorColor': '#007aff',
    },
  },
  plugins: [require('flowbite/plugin')],

}
