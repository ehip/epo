import { ChangeEvent, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

// interfaces
import { Lomake } from "../../data/interfaces/Lomake";

export const Form = () => {
  const { root, checkbox } = useStyles();
  const [iframe, setIFrame] = useState<boolean>(false);
  const [form, setForm] = useState<Lomake>({
    etunimi: "",
    sukunimi: "",
    kotipaikka: "",
    sahkoposti: "",
    checkbox: false
  });

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, checkbox: event.target.checked });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleButtonClick = () => {
    setIFrame(true);
  };

  return (
    <form
      className={root}
      method="post"
      action="https://www.oulu.fi/cgi-bin/FormMail.pl"
      target="formIFrame"
      noValidate
      autoComplete="off"
    >
      <input
        type="hidden"
        name="recipient"
        value="709f794d8f7015ea46c8b50107e93c8dxx"
      />
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <TextField
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
            required
            fullWidth
            name="etunimi"
            label="Etunimi"
            placeholder="Etunimi"
            variant="outlined"
            value={form.etunimi}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
            required
            fullWidth
            name="sukunimi"
            label="Sukunimi"
            placeholder="Sukunimi"
            variant="outlined"
            value={form.sukunimi}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
            required
            fullWidth
            name="kotipaikka"
            label="Kotipaikka"
            placeholder="Kotipaikka"
            variant="outlined"
            value={form.kotipaikka}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
            required
            fullWidth
            name="sahkoposti"
            label="Sähköposti"
            placeholder="Sähköposti"
            variant="outlined"
            value={form.sahkoposti}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                className={checkbox}
                checked={form.checkbox}
                onChange={handleCheckChange}
                name="checked"
              />
            }
            label="Liity sähköpostilistalle"
          />
          <input type="hidden" name="checkBoxValue" value={form.checkbox ? "listalle: yay" : "listalle: nay"} />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            type="submit"
          >
            Lähetä
          </Button>
        </Grid>
        <Grid item xs style={{ width: "100%" }}>
          <iframe
            title="iframe"
            style={{ border: 0, display: iframe ? "block" : "none" }}
            name="formIFrame"
          ></iframe>
        </Grid>
      </Grid>
    </form>
  );
};
