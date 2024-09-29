/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#ECB236',
        'blue-medium': '#2A4BB3',
        'blue-light': '#97dffc',
		'dark': '#030303',
        'primary': '#FFF',
        'secondary': '#e0e0e0',
        'muted': '#b0b0b0',
        'dark': '#333333',
        'background': '#25252F',
      },
      fontFamily: {
        press: ['var(--font-primary)', 'cursive'],
        serif: ['Merriweather', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
