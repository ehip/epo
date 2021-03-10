import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";

// views
import { Home } from "./views/Home";
import { Osakunta } from "./views/Osakunta";
import { Jaseneksi } from "./views/Jaseneksi";
import { Linkkeja } from "./views/Linkkeja";

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
