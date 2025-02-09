
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide_from_right: {
          '0%': {
              transform: 'translateX(250%)',
          }, '20%': {
            transform: 'translateX(0%)',
          },'80%': {
            transform: 'translateX(0%)',
          },
           '100%': {
            transform: 'translateX(-300%)',
          }
        },
       "loop-scroll": {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        },
      },
      animation: {
        slide_from_right: 'slide_from_right 6s ease-in-out both',
        "loop-scroll": "loop-scroll 50s linear infinite"
      }
    },fontFamily:{
      inter: ['var(--font-inter)', 'sans-serif'],
      poppins: ['var(--font-poppins)', 'sans-serif'],
      montserrat: ['var(--font-montserrat)', 'sans-serif'],
      lato: ['var(--font-lato)', 'sans-serif'],
      openSans: ['var(--font-open-sans)', 'sans-serif'],
      oswald: ['var(--font-oswald)', 'sans-serif'],
      roboto: ['var(--font-roboto)', 'sans-serif'],
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require('flowbite/plugin')
  ],
}
