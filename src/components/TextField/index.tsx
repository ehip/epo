import { Box, Typography } from "@material-ui/core";

// components
import { Text } from "../Text";

// styles
import { useStyles } from "./styles";

interface Props {
  title: string;
  text: string;
}

export const TextField = ({ title, text }: Props) => {
  const { root } = useStyles();

  return (
    <Box className={root}>
      <Typography variant="h3">{title}</Typography>
      <Text text={text} />
    </Box>
  );
};
