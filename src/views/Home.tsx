import { Box } from "@material-ui/core";

// components
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Text } from "../components/Global/Text"

export const Home = () => {
  const text: string = "Oulun Etelä- ja Keskipohjalainen osakunta eli EPO ry toimii pohjalaishenkisten opiskelijoiden yhteisenä järjestönä. EPO järjestää jäsenilleen kaikenlaista hauskaa tekemistä erilaisten tapahtumien ja aktiviteettien muodossa. Suosittuja EPO:n tapahtumia ovat esimerkiksi erilaiset illanvietot, joissa katsotaan elokuvia ja pelataan lautapelejä, lisäksi jokavuotiset pikkujoulut ja kesällä tapahtuvat excursiot ovat jäsenistön suosiossa. Tule rohkeasti mukaan hauskaan ja yhteisölliseen porukkaan!"

  return (
    <Box>
      <Jumbotron />
      <Text text={text} />
    </Box>
  );
};
