import { makeStyles } from "@material-ui/core";

// assets
import img from "../../assets/img/jumbotron.jpeg";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 400,
    maxHeight: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
    WebkitTextStroke: "0.5px white",
  },
}));
