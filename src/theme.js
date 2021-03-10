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
        },
        textPrimary: {
            main: '#ffffff',
            light: '#c7c7c7'
        }
    },
    typography: {
        h2: {
            "@media (max-width:600px)": {
                fontSize: "3rem"
            },
            "@media (max-width:470px)": {
                fontSize: "2rem"
            },
            "@media (max-width:280px)": {
                fontSize: "1.5rem"
            }
        },
    }
})

export { theme }