import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

// views
import { Home } from "./pages/Home";
import { Osakunta } from "./pages/Osakunta";
import { Jaseneksi } from "./pages/Jaseneksi";
import { Linkkeja } from "./pages/Linkkeja";

// theming
import { theme } from "./theme";
import { Box, ThemeProvider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  boxWrapper: {
    paddingBottom: 320,
  }
})

export const App = () => {
  const { boxWrapper } = useStyles() 

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Box className={boxWrapper}>
          <Route exact path="/" component={Home} />
          <Route exact path="/osakunta" component={Osakunta} />
          <Route exact path="/jaseneksi" component={Jaseneksi} />
          <Route exact path="/linkkeja" component={Linkkeja} />
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
