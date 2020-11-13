import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, lightGreen } from '@material-ui/core/colors'

export const getLightTheme = () => createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: "#29b6f6"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    }
    // primary: {
    //   main: cyan[500],
    // },
    // secondary: {
    //   main: lightGreen["A400"]
    // }
  }
})
