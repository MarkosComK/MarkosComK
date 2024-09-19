/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-darkest': '#2c0735', // Deep, dark purple for backgrounds or major elements
        'purple-darker': '#4e148c', // Slightly lighter than darkest, for prominent features
        'purple-dark': '#613dc1',   // Strong purple for headings and key accents
        'purple-medium': '#858ae3', // Medium purple for text or secondary elements
        'purple-light': '#97dffc',  // Light purple for backgrounds or highlights
        
        // Additional colors for text
        'text-primary': '#ffffff',  // White for main text on dark backgrounds
        'text-secondary': '#e0e0e0',// Light gray for secondary text or less prominent information
        'text-muted': '#b0b0b0',    // Gray for less important or disabled text
        'text-dark': '#333333',     // Very dark gray for text on light backgrounds
      },
    },
  },
  plugins: [],
}
