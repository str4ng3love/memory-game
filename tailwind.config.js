/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,js,tsx,jsx}"],
  theme: {
    gridTemplateColumns:{
      'auto': `repeat(auto-fit, minmax(128px, 1fr));`,
    },
    extend: {
      animation:{
      
      }
    },
  },
  plugins: [],
}
