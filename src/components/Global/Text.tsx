import { Container, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: 10,
    margin: "auto 5 auto 5",
    textAlign: "justify",
  },
});

interface Props {
    text: string
}

export const Text = ({ text }: Props) => {
  const { root } = useStyles();

  return (
    <Container maxWidth="sm" className={root}>
      <Paper square elevation={0}>
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Container>
  );
};
