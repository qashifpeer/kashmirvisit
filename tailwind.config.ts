/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Montserrat", "sans-serif"],
      },
      colors :{
        "primary" : "#107274",
        "secondary" : "#DFDEC4",
        "accent" : "#E9BBDE",
        "subtle" :"#ECE5E0",
        slate : {
          10 : '#f1f3f4'
        },
        green : {
          50: '#30AF58',
          90 : '#292C27'
        },
        gray : {
          10 : '#EEEEEE',
          20 : '#A2A2A2',
          30 : '#7B7B7B',
          50 : '#585858',
          90 : '#141414',
        }
      },
      screens : {
        xs : '400px',
        '3xl' : '1680px',
        '4xl' : '2200px',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};