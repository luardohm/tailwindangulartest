
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'gray',
  colorSecondary: 'black',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'gray',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'red',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'EV Digital Invest Styleguide',
  brandUrl: 'https://example.com',
  brandImage: 'https://cdn-crowd2.imgix.net/files/projects/testprojekt-kudamm/9d20f136-d5f4-42a8-81a3-5281828fc3a2_EVDI-Logo_360x150.png?w=360&auto=format',
});