/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradientOne': '#41C5A4',
        'gradientTwo' : '#1BA87D',
        'bgPrimaryColor' :'#E5E5E5'
      },
    },
        screens: {
      'mobile': '390px',
      // => @media (min-width: 390px) { ... }
    },
  },
  plugins: [],
}
