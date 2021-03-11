import React from "react";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";

import img from "../../assets/img/salmiakki.gif";

const useStyles = makeStyles((theme) => ({
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

export const Footer = () => {
  const { root, gridContainer, icon } = useStyles();

  const footerTexts = [
    {
      key: "name",
      data: "Oulun Etelä- ja Keskipohjalainen Osakunta ry",
    },
    {
      key: "pl",
      data: "PL 8000",
    },
    {
      key: "post",
      data: "90014 OULUN YLIOPISTO",
    },
    {
      key: "email",
      data: "epo-hallitus@lists.oulu.fi",
    },
  ];

  return (
    <Paper square elevation="0" component="footer" className={root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={gridContainer}
      >
        <Grid item>
          <Facebook className={icon} />
        </Grid>
        <Grid item>
          <Instagram className={icon} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {footerTexts.map(({ key, data }) => {
            return (
              <Grid item key={key}>
                <Typography>{data}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};
