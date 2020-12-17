import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, lightGreen } from '@material-ui/core/colors'

export const getDarkTheme = () => createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#29b6f6"
      // main: "#424242"
    },
    secondary: {
      // main: "#e91e63"
      main: lightGreen["A400"]
    },
    background: {
      footer: "#0e4686",
      paper: "#424242",
      default: "#303030"
    },
    custom: {
      tertiary: "#e0e0e0"
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
