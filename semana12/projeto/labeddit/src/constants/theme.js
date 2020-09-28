import { createMuiTheme } from '@material-ui/core/styles'
import { neutralColor, primaryColor, secondaryColor, darkNeutralColor, lightNeutralColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
    },
    secondary: {
      main: secondaryColor,
      contrastText: darkNeutralColor
    },
    neutral: {
      main: neutralColor,
      light: lightNeutralColor
    },
    text: {
      primary: darkNeutralColor
    }
  }
})

export default theme