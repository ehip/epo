import { Container, Typography } from "@material-ui/core";

// components
import { HeaderText } from "../../components/HeaderText";
import { Form } from "../../components/Form";

// styles
import { useStyles } from "./styles";

export const Jaseneksi = () => {
  const { root, header } = useStyles();
  const jaseneksi: string = `Täytä alla oleva liittymiskaavake liittyäksesi EPO:n jäseneksi. Kaavakkeen lähettämisen jälkeen maksa jäsenmaksu. Huomioithan, että hyväksymme uudet hakemukset hallituksen kokouksessa, joita järjestetään noin kuukauden välein. Sinut voidaan hyväksyä jäseneksi, kun jäsenhakemuksesi on saapunut ja jäsenmaksusi näkyy tilillä kokouspäivänä. Tästä johtuen hyväksymisessä voi ilmetä viivettä. Seuraa sähköpostiasi, olemme yhteydessä sinuun heti hyväksymisen jälkeen!\n\nJäsenmaksu 5€ maksetaan Oulun etelä- ja keskipohjalaisen osakunnan tilille FI57 4744 3020 0320 55. Laita maksun viestiksi "Jäsenmaksu:{nimi}".\n\nTäytä alla oleva lomake ja varmista, että et ole robotti.`;

  return (
    <Container maxWidth="lg" className={root}>
      <HeaderText title="Jäseneksi" text={jaseneksi} />
      <Typography className={header} variant="h4">
        Jäsenlomake
      </Typography>
      <Form />
    </Container>
  );
};
