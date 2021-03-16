import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

interface jasen {
  img: string,
  position: string,
  name: string
}

interface Props {
  cardData: jasen
}

export const MemberCard = ({ cardData }: Props) => {
  return (
    <Card>
      <CardMedia image={cardData.img} />
      <CardContent>
        <Typography variant="body1">{cardData.position}</Typography>
        <Typography variant="subtitle2">{cardData.name}</Typography>
      </CardContent>
    </Card>
  );
};
