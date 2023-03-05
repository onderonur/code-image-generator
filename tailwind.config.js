// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        secondary: colors.teal,
        body: colors.slate,
        text: colors.slate,
        success: 'hsl(143 100% 40%)',
        alert: 'hsl(39 100% 63%)',
        error: 'hsl(1 100% 68%)',
      },
      boxShadow: {
        popper:
          'hsl(206 15% 60% / 0.2) 0px 0px 15px, hsla(206 15% 60% / 0.15) 0px 0px 3px 1px',
      },
    },
  },
  plugins: [],
};
