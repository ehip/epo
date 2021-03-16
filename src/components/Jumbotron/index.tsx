import { Paper, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export const Jumbotron = () => {
  const { root } = useStyles();

  return (
    <Paper square elevation={0} className={root}>
      <Typography variant="h2" align="center">
        OULUN ETELÄ- JA KESKIPOHJALAINEN OSAKUNTA
      </Typography>
    </Paper>
  );
};
