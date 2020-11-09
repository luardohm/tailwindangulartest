module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.ts', './projects/**/*.html', './projects/**/*.ts'],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      sans: ['Verdana']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#8B8B8B',
      secondary: '#FF0000',
      terciary: '#444444',
      gray: {
        100: '#F0F0F0',
        200: '#C9C9C9R',
        300: '#8B8B8B',
        400: '#444444',
      },
      black: '#000000',
      white: '#fff',
    }
  },
  corePlugins: {},
  plugins: [],
}
