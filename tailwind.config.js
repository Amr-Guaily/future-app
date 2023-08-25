/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx,tsx,mdx}",
    "./components/**/*.{js,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': "1280px"
      }
    },
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
      colors: {
        'primary': '#215B8C',
        'secondary': '#e35e37'
      },
    },
  },
  plugins: [],
}

