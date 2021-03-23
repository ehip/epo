import { Container, Grid, Typography } from "@material-ui/core";

// interfaces
import { Linkki, Linkit } from "../../data/interfaces/Linkki";

// json
import linkit from "../../data/json/linkit.json";

export const Linkkeja = () => {
  // imagine this is the first thing that comes to your mind
  // holy shit i'm such a flaming piece of garbage of a programmer
  const links: Linkit[] = linkit;
  const epoLinks: Linkki[] = links[0].links;
  const otherLinks: Linkki[] = links[1].links;

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h2">Hyödyllisiä linkkejä</Typography>
        </Grid>
        {epoLinks.map((link, index) => {
          return (
            <Grid item>
              <Typography variant="body1">
                <a key={index} href={link.link}>
                  {link.name}
                </a>
              </Typography>
            </Grid>
          );
        })}
        <Grid item>
          <Typography variant="h4">Muita osakuntia</Typography>
        </Grid>
        {otherLinks.map((link, index) => {
          return (
            <Grid item>
              <Typography variant="body1">
                <a key={index} href={link.link}>
                  {link.name}
                </a>
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
