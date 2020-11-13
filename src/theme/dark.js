import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, lightGreen } from '@material-ui/core/colors'

export const getDarkTheme = () => createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#424242"
    },
    secondary: {
      main: lightGreen["A400"]
    },
    background: {
      paper: "#424242",
      default: "#303030"
    }
  }
})
