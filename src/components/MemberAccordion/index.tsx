import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

// interfaces
import { Board } from "../../data/interfaces/Board";

export const MemberAccordion = ({
  accordionData,
}: {
  accordionData: Board;
}) => {
  const { root, header, member } = useStyles();

  return (
    <Accordion className={root}>
      <AccordionSummary>
        <Typography variant="h6">{accordionData.year}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          <Grid item className={header}>
            <Typography variant="h4">Hallitus</Typography>
          </Grid>
          {accordionData.board.map((jasen, index) => {
            return (
              <Grid item key={index} className={member}>
                <Typography variant="h6">{jasen.title}</Typography>
                <Typography variant="body1">{jasen.name}</Typography>
              </Grid>
            );
          })}
          <Grid item className={header}>
            <Typography variant="h4">Toimihenkilöt</Typography>
          </Grid>
          {accordionData.clerks.map((jasen, index) => {
            return (
              <Grid item key={index} className={member}>
                <Typography variant="h6">{jasen.title}</Typography>
                <Typography variant="body1">{jasen.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
