import React from "react";
import {
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.textPrimary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.textPrimary.light,
      cursor: "pointer",
      textDecoration: "none",
    },
  },
}));

export const Nav = () => {
  const { root, container, list, button } = useStyles();

  const paths = [
    {
      name: "Osakunta",
      path: "/osakunta",
    },
    {
      name: "Jäseneksi",
      path: "/jaseneksi",
    },
    {
      name: "Linkkejä",
      path: "/linkkeja",
    },
  ];

  return (
    <Toolbar className={root}>
      <Container maxWidth="xl" className={container}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography className={button}>EPO</Typography>
        </Link>
        <List dense className={list}>
          {paths.map(({ name, path }, index) => {
            return (
              <Link id={index} style={{ textDecoration: "none" }} to={path}>
                <ListItem className={button}>
                  <ListItemText primary={name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Container>
    </Toolbar>
  );
};
