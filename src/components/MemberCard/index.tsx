import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

// interfaces
import { Jasen } from "../../data/interfaces/Jasen";

export const MemberCard = ({ cardData }: { cardData: Jasen }) => {
  const { root } = useStyles();

  return (
    <Card variant="outlined" className={root}>
      <CardMedia src={require(`../../${cardData.img}`).default} component="img" />
      <CardContent>
        <Typography variant="body1">{cardData.position}</Typography>
        <Typography variant="subtitle2">{cardData.name}</Typography>
      </CardContent>
    </Card>
  );
};
