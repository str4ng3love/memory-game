/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,js,tsx,jsx}"],
  theme: {
    gridTemplateColumns: {
      auto: `repeat(auto-fit, minmax(128px, 1fr));`,
      mini_auto: `repeat(auto-fit, minmax(64px, 1fr));`,
    },
    extend: {
      screens: {
        md: "1080px",
      },
      animation: {
        "spin-out": "spinOut 1s ease-in",
        "fade-in": "fadeIn 0.3s linear",
        "fade-out": "fadeOut 0.3s linear",
      },
      keyframes: {
        spinOut: {
          "0%": {
            opacity: "1",
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
            opacity: "0",
            scale: "0.6",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
