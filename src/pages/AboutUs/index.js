import Menu from "../../components/Menu";
import { Container, LeftColumn, Line, RightColumn } from "./styled";
import JuliaPhoto from "../../assets/profile-photos/julia.jpg";
import CardDev from "../../components/AboutUs/CardDev";
const AboutUs = () => {
  return (
    <>
      <Menu />
      <Container>
        <LeftColumn>
          <CardDev
            side="left"
            name="Tanizia"
            linkedin="https://www.linkedin.com/in/tanizia-fagundes-a45896125/"
          />
          <CardDev
            side="left"
            name="Emanuela"
            linkedin="https://www.linkedin.com/in/emanuela-biondo-quizini-245ab0195"
          />
          <CardDev
            side="left"
            name="Nicole"
            linkedin="https://www.linkedin.com/in/nicole-m-7b799685/"
          />
        </LeftColumn>
        <Line></Line>
        <RightColumn>
          <CardDev
            side="right"
            name="Lucira"
            linkedin="https://www.linkedin.com/in/lucira-silva/"
          />
          <CardDev
            side="right"
            name="Julia"
            photo={JuliaPhoto}
            linkedin="https://www.linkedin.com/in/juliaclepf/"
          />
        </RightColumn>
      </Container>
    </>
  );
};
export default AboutUs;
