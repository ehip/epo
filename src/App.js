import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import { Nav } from "./components/Nav/Nav";

// views
import { Home } from "./views/Home";
import { Osakunta } from "./views/Osakunta"
import { Jaseneksi } from "./views/Jaseneksi"
import { Linkkeja } from "./views/Linkkeja"

// theming
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/osakunta" component={Osakunta} />
        <Route exact path="/jaseneksi" component={Jaseneksi} />
        <Route exact path="/linkkeja" component={Linkkeja} />
      </Router>
    </ThemeProvider>
  );
}