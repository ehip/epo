import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

// styles
import { useStyles } from './styles'

// interfaces
import { Jasen } from "../../data/interfaces/Jasen";

interface Props {
  cardData: Jasen;
}

export const MemberCard = ({ cardData }: Props) => {
  const { root } = useStyles();

  return (
    <Card variant="outlined" className={root}>
      <CardMedia image={cardData.img} component="img" />
      <CardContent>
        <Typography variant="body1">{cardData.position}</Typography>
        <Typography variant="subtitle2">{cardData.name}</Typography>
      </CardContent>
    </Card>
  );
};
