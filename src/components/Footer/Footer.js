import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

import img from '../../assets/img/salmiakki.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "repeat-x",
    height: 300,
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
}));

export const Footer = () => {
  const { root } = useStyles();
  return (
    <Paper square elevation="0" className={root}>
      asd
    </Paper>
  )
};
