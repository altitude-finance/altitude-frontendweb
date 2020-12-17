import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, lightGreen } from '@material-ui/core/colors'

export const getLightTheme = () => createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: "#29b6f6"
    },
    secondary: {
      main: "#e91e63"
      // main: lightGreen["A400"]
    },
    background: {
      footer: "#fafafa",
      paper: "#fff",
      // default: "#fafafa"
      default: "#e0e0e0"
    },
    custom: {
      tertiary: "#0e4686"
    }
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: [
      '"League Spartan"',
      // '"Montserrat"',
      //'"Roboto"', 
      '"Helvetica"', 
      '"Arial"', 
      'sans-serif'
    ].join(',')
  }
})
