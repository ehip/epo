import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    color: "#c3c3c3",
    textDecoration: "none",
    transitionProperty: "color",
    transitionDuration: "0.1s",
    "&:hover": {
      color: theme.palette.text.secondary,
      cursor: "pointer",
      textDecoration: "none",
      transitionProperty: "color",
      transitionDuration: "0.1s",
    },
  },
}));
