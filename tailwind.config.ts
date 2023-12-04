/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary": "#0AEAAC",
        "subtle": "#4DD3DD",
        "secondary": "#ED5808",
        "accent": "#08F5B1",
        "dark": "#09090b",
        slate: {
          10: '#f1f3f4',
          900: "#0f172a",

        },
        light : {
          10 : '#f8fafc',
          20 : '#f1f5f9',
          30: '#cbd5e1',
          40: '#94a3b8',
          50: '#64748b',
          90 : '#0f172a',
          95 : '#020617',

        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};