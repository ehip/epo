import { ChangeEvent, useState } from "react";
import { Checkbox, Grid, TextField } from "@material-ui/core";

export const Form = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <form noValidate autoComplete="off">
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <TextField required fullWidth label="Etunimi" variant="outlined" />
        </Grid>
        <Grid item xs>
          <TextField required fullWidth label="Sukunimi" variant="outlined" />
        </Grid>
        <Grid item xs>
          <TextField required fullWidth label="Kotipaikka" variant="outlined" />
        </Grid>
        <Grid item xs>
          <TextField required fullWidth label="Sähköposti" variant="outlined" />
        </Grid>
        <Grid item xs>
          <Checkbox checked={checked} onChange={handleChange} color="secondary" />
        </Grid>
      </Grid>
    </form>
  );
};
