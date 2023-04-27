/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      animation:{
        heading: "texty 4s both",
        heading1: "fadingEffect 4s both",
        heading2: "zoomingEffect 4s both"
      },
      keyframes: {
        fadingEffect: {
          "from, 50%":{
          opacity: 0
          },
          "to":{
            opacity: 1
          }
        },
        texty:{
          from:{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
          },
          "50%, to": {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }
        },
        zoomingEffect: {
          from:{
            transform: "scale(1.4)"
          },
          "to":{
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}

