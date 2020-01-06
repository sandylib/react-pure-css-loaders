import { configure, addParameters } from '@storybook/react'

addParameters({
  options: {
    name: 'css loaders',
    isFullscreen: false,
    showPanel: false,
    brandUrl: 'https://github.com/sandylib/react-pure-css-loaders'
  }
})

configure(require.context('../src', true, /\.stories\.js$/), module)
