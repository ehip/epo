import { Box, Typography } from "@material-ui/core";

// components
import { Text } from "../Text";

// styles
import { useStyles } from "./styles";

export const TextField = ({ title, text }: { title: string; text: string }) => {
  const { root, header } = useStyles();

  return (
    <Box className={root}>
      <Typography variant="h3" className={header}>{title}</Typography>
      <Text text={text} />
    </Box>
  );
};
