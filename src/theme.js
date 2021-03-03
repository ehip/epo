import { createMuiTheme } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red['A700'],
            light: '#ff5132',
            dark: '#9b0000',
        },
        secondary: {
            main: grey[900],
            light: '#484848',
            dark: '#000000',
        }
    },
})