/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        
        "black-dark": 'hsl(var(--black-dark) / <alpha-value>)',
        "black-light": 'hsl(var(--black-light) / <alpha-value>)',
        "white": 'hsl(var(--white) / <alpha-value>)',
        "grey": 'hsl(var(--grey) / <alpha-value>)',
      },
      fontFamily: {
        "titre": ['Rubik Mono One', 'monospace'],
        "texte": ['Kumbh Sans', 'sans-serif'],
        "logo": ['Courier Prime', 'monospace'],
      },
      translate: {
        '11/10': '110%',
        '101/100': '101%',
        '200/100': '200%',
      },
      spacing: {
        '17': '4.3rem',
        '18.5': '4.6rem',
        '19': '4.8rem',
        '19.5': '4.9rem',
        '25': '6.3rem',
        '27': '6.8rem',
        '31': '7.85rem',
        '38': '9.7rem',

        '128': '32rem',
      },
      screens: {
        'xs': {'min': '360px', 'max': '639px'},
        'xl': {'min': '1350px'},
        '2xl': {'min': '1734px'},
        '3xl': {'min': '1921px'},
      },
      gridTemplateColumns: {
        'xxs': 'repeat(auto-fit, minmax(2.5rem, 1fr))',
        'xs': 'repeat(auto-fit, minmax(4rem, 1fr))',
        'sm': 'repeat(auto-fit, minmax(5rem, 1fr))',
        'md': 'repeat(auto-fit, minmax(2.5rem, 1fr))',
        'lg': 'repeat(auto-fit, minmax(2.5rem, 1fr))',
        'xl': 'repeat(auto-fit, minmax(2.5rem, 1fr))',
        '2xl': 'repeat(auto-fit, minmax(2.5rem, 1fr))',
      },
      rotate: {
        '15': '15deg',
      },
    },
  },
  plugins: [],
}

