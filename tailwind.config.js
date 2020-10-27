const { colors } = require('tailwindcss/defaultTheme');
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      ...colors,
      main: {
        100: '#2A2A2E',
      },
    },
  },
  variants: {},
  plugins: [],
};
