import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
// import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: `Montserrat`,
  heading: `Parisienne`,
  mono: `'Menlo', monospace`,
}

// const breakpoints = createBreakpoints({
//   sm: "40em",
//   md: "52em",
//   lg: "64em",
//   xl: "80em",
// });

const theme = extendTheme(
  {
    colors: {
      black: '#020801',
      white: '#F2EFEB',
      gray: {
        50: '#F2F3F2',
        100: '#DBDDD9',
        200: '#C3C8C1',
        300: '#ACB2A9',
        400: '#959C91',
        500: '#7D8778',
        600: '#646C60',
        700: '#4B5148',
        800: '#323630',
        900: '#191B18',
      },
      secondary: {
        50: '#f3fbe4',
        100: '#e0f0c0',
        200: '#cde599',
        300: '#b8db71',
        400: '#a5d14b',
        500: '#8cb732',
        600: '#6c8f26',
        700: '#4d661a',
        800: '#2d3d0c',
        900: '#0d1500',
      },
      primary: {
        50: '#fff6dc',
        100: '#fbeab0',
        200: '#f9e183',
        300: '#f6db53',
        400: '#f4d824',
        500: '#dbc60b',
        600: '#aa8f04',
        700: '#795e00',
        800: '#493300',
        900: '#191000',
      },
    },
    fonts,
    // breakpoints,
    components: {
      Text: {
        baseStyle: {
          fontWeight: '300',
        },
      },
      Heading: {
        baseStyle: {
          fontWeight: '200',
        },
      },
    },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)

export default theme
