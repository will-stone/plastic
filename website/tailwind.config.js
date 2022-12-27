const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography')

const { palette } = require('../palette')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    typography,
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: palette.shark,
          color: palette.cadetBlue,
        },
        h1: {
          color: palette.sunglo,
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.5xl'),
          letterSpacing: theme('letterSpacing.widest'),
          textAlign: 'center',
        },
        h2: {
          color: palette.ghost,
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.3xl'),
        },
        h3: { fontFamily: theme('fontFamily.comfortaa') },
        hr: {
          borderColor: palette.bunker,
        },
      })
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: { ...palette },
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              color: palette.cornflowerBlue,
            },
            blockquote: {
              color: palette.shuttleGray,
            },
            code: {
              color: palette.ghost,
            },
            color: palette.cadetBlue,
            h1: {
              color: palette.sunglo,
            },
            h2: {
              color: palette.ghost,
            },
            h3: {
              color: palette.ghost,
            },
            h4: {
              color: palette.ghost,
            },
            h5: {
              color: palette.ghost,
            },
          },
        },
      }),
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },
  },
}
