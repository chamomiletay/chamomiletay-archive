/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'mint': '#e2ebdf',
        'strawberry': '#F2D7D9',
        'plum': '#d9d2e9'
      },
      fontFamily: {
        'nanum-gothic': ['Nanum Gothic', 'sans-serif'],
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
        'noto-serif-jp': ['Noto Serif JP', 'sans-serif'],
        'm-plus-rounded': ['M PLUS Rounded 1c', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
      animation: {},
    },
  },
  plugins: [],
}
