import { Box, Container } from "@material-ui/core";

// components
import { Jumbotron } from "../../components/Jumbotron";
import { Text } from "../../components/Text";

export const Home = () => {
  
  const text: string =
    "Nämä ovat epon vanhat sivut! Uudet verkkosivut ja liittymislomake löytyvät osoitteesta: https://sites.google.com/view/oulunepo "
    "Oulun Etelä- ja Keskipohjalainen osakunta eli EPO ry toimii pohjalaishenkisten opiskelijoiden yhteisenä järjestönä. EPO järjestää jäsenilleen kaikenlaista hauskaa tekemistä erilaisten tapahtumien ja aktiviteettien muodossa. Suosittuja EPO:n tapahtumia ovat esimerkiksi erilaiset illanvietot, joissa katsotaan elokuvia ja pelataan lautapelejä, lisäksi jokavuotiset pikkujoulut ja kesällä tapahtuvat excursiot ovat jäsenistön suosiossa. Tule rohkeasti mukaan hauskaan ja yhteisölliseen porukkaan!";

  return (
    <Box>
      <Jumbotron />
      <Container maxWidth="md" style={{ padding: "40px" }}>
        <Text text={text} />
      </Container>
    </Box>
  );
};
