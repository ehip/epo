import { Paper, Grid, Typography, Link } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";

import { useStyles } from "./styles";

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
      data: "epo.hallitus@gmail.com",
    },
  ];

  return (
    <Paper square elevation={0} component="footer" className={root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={gridContainer}
      >
        <Grid item>
          <Link href="https://www.facebook.com/groups/oulunepo">
            <Facebook className={icon} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com/oulunepo/">
            <Instagram className={icon} />
          </Link>
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
