import { Box, makeStyles } from "@material-ui/core";

// components
import { TextField } from "../components/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: "pre-line",
  },
}));

export const Osakunta = () => {
  const { root } = useStyles();
  
  const toiminta: string = `EPO järjestää jäsenistönsä iloksi toimintaa laidasta laitaan. Voit vetää verkkarit jalkaan ja lähteä pelaamaan sählyä osakuntien viikottaiselle vuorolle tai sulkapalloa EPOn vuorolle. Toisaalta voit iltapuku päällä lipua kanssamme speksi-iltaan. Pelkkä pyyhe riittää monille saunailloissa. EPO-paita sopii tietenkin tilaisuuteen kuin tilaisuuteen! Olet sitten haka Trivial pursuitissa, sählyssä, (hohto)keilauksessa tai laulussa, EPOn toiminnassa pääset toteuttamaan itseäsi. Tai voit tehdä kuten monet hallituksestammekin ja korvata taidon innolla!\n\nPitkin syys- ja kevätlukukausia ohjelmaamme kuuluvat useat: - saunaillat - lautapeli-illat - hohtokeilausillat - baarikierrokset - hiihtoretket - excut. Näiden tapahtumien lisäksi EPO:lla on joitakin suurempia tapahtumia esimerkiksi pikkujoulut.\n\nTarkempaa tietoa toiminnastamme saat liittymällä sähköpostilistalle tai seuraamalla meitä Facebookissa ja Instagramissa!`;

  const historia: string = `Oulun etelä- ja keskipohjalainen osakunta perustettiin 13. toukokuuta vuonna 1980 ravintola Reidarin takkakabinetissa. Idea osakunnan perustamisesta lähti eteläpohjalaisen kaveriporukan ajatuksesta pistää pystyyn Ouluun oma EPO, kun kerran Helsingissäkin sellainen jo oli. Osakunnan perustamiskokouksesta ilmoitettiin Oulun Ylioppilaslehdessä 9. toukokuuta 1980. Kokouksessa päätettiin perustaa Oulun eteläpohjalainen osakunta ry. Ainaisjäsenmaksuksi päätettiin tuolloin kymmenen markkaa. Osakunta rekisteröitiin yhdistysrekisteriin vuonna 1981. Samaisena vuonna osakunnan hallitus kyseenalaisti osakunnan virallisen nimen ja päätti järjestää nimenkeksintäkilpailun. Kilpailu ei tuottanut tulosta, mutta vuonna 1982 yhdistysrekisteritoimisto ratkaisi ongelman. Osakunnan nimi vaadittiin muuttamaan Eteläpohjalaiseksi opiskelijayhdistykseksi.\n\nOsakunnan historian aikana on ollut myös taantumia. Vuosina 1990 -1993 osakunnan toiminta oli vähäistä, kunnes vuonna 1994 toiminta vilkastui jälleen ja jatkui aina vuoteen 1999 asti. Tuona aikana osakunnassa tehtiin myös päätös ottaa keskipohjalaiset mukaan toimintaan. Tämän seurauksena osakunnan nimi muutettiin 7. kesäkuuta vuonna 1996 Oulun Etelä- ja Keskipohjalainen Osakunta ry:ksi. Toinen taantumavaihe alkoi vuodesta 2000 ja kesti aina vuoteen 2003 asti. Tänä aikana osakunnan toiminta hiipui lähes olemattomiin, kunnes syksyllä 2003 päätettiin ryhtyä toimeen. Osakunta piti ylimääräisen kokouksen ja yhdistykselle valittiin uusi hallitus. Siitä lähtien osakunnan toiminta on ollut vireämpää kuin koskaan. Vuodesta 2003 lähtien osakuntaamme on liittynyt jo yli 150 jäsentä ja vahva kasvu jatkuu edelleen.\n\n2010-luku tarjosi osakunnalle niin hyviä kuin vähän hiljaisempiakin vuosia, mutta osakunnan toiminta jatkui kuitenkin menneellä vuosikymmenellä yleisesti varsin aktiivisena ja hyvänä. EPO tarjosi jäsenistölleen mielekästä tekemistä ja yhteisöllistä osallistumista. Lisäksi osakunta rekrytoi onnistuneesti uusia ja aktiivisia jäseniä mukaan osakunnan toimintaan, minkä seurauksena Oulun Etelä- ja Keskipohjalainen osakunta on vuonna 2020 edelleen toiminnassa ja voi hyvin.`;

  return (
    <Box className={root}>
      <TextField title="Toiminta" text={toiminta} />
      <TextField title="Historia" text={historia} />
    </Box>
  );
};
