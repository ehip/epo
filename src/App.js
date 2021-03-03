import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import { Nav } from "./components/Nav";

// views
import { Home } from "./views/Home";

// theming
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
