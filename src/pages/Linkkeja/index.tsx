import { Container, Grid, Typography, Link } from "@material-ui/core";

// styles
import { useStyles } from './styles'

// interfaces
import { Linkki, Linkit } from "../../data/interfaces/Linkki";

// json
import linkit from "../../data/json/linkit.json";

export const Linkkeja = () => {
  const { header, linkClass } = useStyles()

  // imagine this is the first thing that comes to your mind after almost 3 years of programming
  // holy shit i'm such a flaming piece of garbage of a programmer
  const links: Linkit[] = linkit;
  const epoLinks: Linkki[] = links[0].links;
  const otherLinks: Linkki[] = links[1].links;

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={header}>
          <Typography variant="h3">Hyödyllisiä linkkejä</Typography>
        </Grid>
        {epoLinks.map((link, index) => {
          return (
            <Grid item className={linkClass}>
              <Typography variant="body1">
                <Link key={index} href={link.link}>
                  {link.name}
                </Link>
              </Typography>
            </Grid>
          );
        })}
        <Grid item className={header}>
          <Typography variant="h4">Muita osakuntia</Typography>
        </Grid>
        {otherLinks.map((link, index) => {
          return (
            <Grid item className={linkClass}>
              <Typography variant="body1">
                <Link key={index} href={link.link}>
                  {link.name}
                </Link>
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
