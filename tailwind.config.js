/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      'black': '#000',
      'charcoal': '#014040',
      'green': '#02735E',
      'jade': '#03C778',
      'old': '#015C42',
      'orange': '#F27405',
      'brown': '#731702',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'custom': ['var(--custom)'],
    },
  },
  plugins: [],
}