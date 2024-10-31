/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#CC4141', // SSW specific shade of red
        },
        gray: {
          300: '#AAAAAA', // SSW specific shade of grey
          150: '#D5D5D5', // A shade of grey halfway between #AAAAAA and white
        },
      },
    },
  },
  plugins: [],
}

