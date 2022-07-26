/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          
          accent: "#3A4256",
          neutral: "#fff",
          "base-100": "#ffffff",
          action:'red',
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
