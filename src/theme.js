import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d50000',
            light: '#ff5132',
            dark: '#9b0000',
        },
        secondary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
        }
    },
})

export { theme }