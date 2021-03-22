import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@material-ui/core";

// interfaces
import { Board } from "../../data/interfaces/Board";

export const MemberAccordion = ({
  accordionData,
}: {
  accordionData: Board;
}) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>{accordionData.year}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">Hallitus</Typography>
          </Grid>
          {accordionData.board.map((jasen, index) => {
            return (
              <Grid item key={index}>
                <Typography variant="h6">{jasen.title}</Typography>
                <Typography variant="body1">{jasen.name}</Typography>
              </Grid>
            );
          })}
          <Grid item>
            <Typography variant="h4">Toimihenkilöt</Typography>
          </Grid>
          {accordionData.clerks.map((jasen, index) => {
            return (
              <Grid item key={index}>
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
