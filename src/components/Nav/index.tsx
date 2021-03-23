import {
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// styles
import { useStyles } from "./styles";

export const Nav = () => {
  const { root, container, list, button } = useStyles();

  const paths = [
    {
      name: "Osakunta",
      path: "/~epo/osakunta",
    },
    {
      name: "Jäseneksi",
      path: "/~epo/jaseneksi",
    },
    {
      name: "Linkkejä",
      path: "/~epo/linkkeja",
    },
  ];

  return (
    <Toolbar className={root}>
      <Container maxWidth="xl" className={container}>
        <Link style={{ textDecoration: "none" }} to="/~epo">
          <Typography variant="h6" className={button}>
            EPO
          </Typography>
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
