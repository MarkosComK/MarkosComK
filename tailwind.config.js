/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-darkest': '#2c0735',
        'purple-darker': '#4e148c',
        'purple-dark': '#613dc1',
        'purple-medium': '#858ae3',
        'purple-light': '#97dffc',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-muted': '#b0b0b0',
        'text-dark': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'press-start': ['Press_Start_2P', 'cursive'],
      },
    },
  },
  plugins: [],
}
