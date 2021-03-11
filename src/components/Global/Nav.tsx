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
          <Typography variant="h6" className={button}>EPO</Typography>
        </Link>
        <List dense className={list}>
          {paths.map(({ name, path }, index) => {
            return (
              <Link key={index} style={{ textDecoration: "none" }} to={path}>
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
