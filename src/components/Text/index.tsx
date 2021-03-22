import { Box, Paper, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export const Text = ({ text }: { text: string }) => {
  const { root } = useStyles();

  return (
    <Box className={root}>
      <Paper square elevation={0}>
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
};
