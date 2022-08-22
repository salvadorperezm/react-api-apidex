import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
}

const theme = extendTheme({
  config,
  colors: {
    mainPurple: '#e3d1f9',
    darkerPurple: '#a385da',
    white: '#ffffff',
    black: `#000000`,
    lightPink: `#f4f0fc`,
  },
  fonts: {
    montserrat: `'Montserrat', sans-serif`,
    chango: `'Chango', display`,
  },
})

export default theme
