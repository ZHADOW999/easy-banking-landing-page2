/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      darkBlue:"var(--DarkBlue)",
      LimeGreen:"var(--LimeGreen)",
      BrightCyan:"var(--BrightCyan)",
      GrayishBlue:"var(--GrayishBlue)",
      LightGrayishBlue:"var(--LightGrayishBlue)",
      VeryLightGray:"var(--VeryLightGray)",
      White:"var(--White)",
    },

    fontFamily:{
      'body':  'Public Sans, sans-serif'
    },
    
    
    screens:{
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1024px',
      '2xl':'1250px',
      '3xl':'1440px',
    },

    extend: {
      fontSize:{
        1: '0.8rem',
        1.5:'0.9rem',
        2: '1rem',
        3: '1.125rem',
        4: '1.5rem',
        5: '2rem',
        6: '2.5rem'
      },

      

      boxShadow:{
        '3xl':'0px 100px 400px 100px hsl(0, 0%, 0%, 0.6)'
      },
    },
  },
  plugins: [],
}