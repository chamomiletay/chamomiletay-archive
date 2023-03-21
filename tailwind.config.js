/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'mint': '#D5DED2',
        'strawberry': '#FCE7E8',
        'plum': '#d9d2e9',
        'dusty-blue': '#CDE1EB',
        'vanilla': '#FCF7ED',
        'grape': '#948BA9',
        'beige': '#FBF4ED',
        'bread': '#D8C4B9',
        'pale-blue': '#F3F7FA'
      },
      fontFamily: {
        'nanum-gothic': ['Nanum Gothic', 'sans-serif'],
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
        'noto-serif-jp': ['Noto Serif JP', 'sans-serif'],
        'm-plus-rounded': ['M PLUS Rounded 1c', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif']
      },
      animation: {},
    },
  },
  plugins: [],
}
