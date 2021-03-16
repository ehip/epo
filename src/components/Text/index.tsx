import { Container, Paper, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

interface Props {
  text: string;
}

export const Text = ({ text }: Props) => {
  const { root } = useStyles();

  return (
    <Container maxWidth="md" className={root}>
      <Paper square elevation={0}>
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Container>
  );
};
