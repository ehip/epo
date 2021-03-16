import { makeStyles } from "@material-ui/core";

// assets
import img from "../../assets/img/salmiakki.gif";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "repeat-x",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0,
  },
  gridContainer: {
    marginTop: 100,
    marginBottom: 20,
  },
  icon: {
    color: theme.palette.secondary.dark,
    height: 100,
    width: 100,
    padding: 0,
    transitionProperty: "color",
    transitionDuration: "0.25s",
    "&:hover": {
      color: "#E9EBEE",
      cursor: "pointer",
      transitionProperty: "color",
      transitionDuration: "0.25s",
    },
  },
}));
