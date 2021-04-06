const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography')

const palette = require('../palette')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: { ...palette },
      typography: () => ({
        DEFAULT: {
          css: {
            color: palette.cadetBlue,
            h1: {
              color: palette.sunglo,
            },
            h2: {
              color: palette.ghost,
            },
            a: {
              color: palette.cornflowerBlue,
            },
            code: {
              color: palette.ghost,
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: palette.shark,
          color: palette.cadetBlue,
        },
        h1: {
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.5xl'),
          color: palette.sunglo,
          letterSpacing: theme('letterSpacing.widest'),
        },
        h2: {
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.3xl'),
          color: palette.ghost,
        },
        h3: { fontFamily: theme('fontFamily.comfortaa') },
        hr: {
          borderColor: palette.bunker,
        },
      })
    }),
  ],
}
