import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(188, 22, 22)",
      light: "#ff5132",
      dark: "#9b0000",
    },
    secondary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  typography: {
    h2: {
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      "@media (max-width:470px)": {
        fontSize: "2rem",
      },
      "@media (max-width:280px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

export { theme };
