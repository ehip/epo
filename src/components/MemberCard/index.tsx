import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

// interfaces
import { Jasen } from "../../data/interfaces/Jasen";

interface Props {
  cardData: Jasen;
}

export const MemberCard = ({ cardData }: Props) => {
  return (
    <Card>
      <CardMedia image={cardData.img} component="img" />
      <CardContent>
        <Typography variant="body1">{cardData.position}</Typography>
        <Typography variant="subtitle2">{cardData.name}</Typography>
      </CardContent>
    </Card>
  );
};
