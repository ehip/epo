import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  },
});

export const App = () => {
  const { boxWrapper } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Box className={boxWrapper}>
          <Routes>
            <Route path="/~epo/" Component={Home} />
            <Route path="/~epo/osakunta" Component={Osakunta} />
            <Route path="/~epo/jaseneksi" Component={Jaseneksi} />
            <Route path="/~epo/linkkeja" Component={Linkkeja} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
