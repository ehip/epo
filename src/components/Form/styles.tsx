import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "10px 0",
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
}));
