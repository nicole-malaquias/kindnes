import Menu from "../../components/Menu";
import { Container, Content, LeftColumn, Line, RightColumn } from "./styled";
import JuliaPhoto from "../../assets/profile-photos/julia.jpg";
import LuciraPhoto from "../../assets/profile-photos/lucira.png";
import NicolePhoto from "../../assets/profile-photos/nicole.png";
import TaniziaPhoto from "../../assets/profile-photos/tanizia.jpg";
import EmanuelaPhoto from "../../assets/profile-photos/emanuela.jpg";

import CardDev from "../../components/AboutUs/CardDev";
const AboutUs = () => {
  return (
    <>
      <Container>
        <Menu />
        <Content>
          <LeftColumn>
            <CardDev
              side="left"
              name="Tanizia"
              photo={TaniziaPhoto}
              linkedin="https://www.linkedin.com/in/tanizia-fagundes-a45896125/"
            />
            <CardDev
              side="left"
              name="Emanuela"
              photo={EmanuelaPhoto}
              linkedin="https://www.linkedin.com/in/emanuela-biondo-quizini-245ab0195"
            />
            <CardDev
              side="left"
              name="Nicole"
              photo={NicolePhoto}
              linkedin="https://www.linkedin.com/in/nicole-m-7b799685/"
            />
          </LeftColumn>
          <Line></Line>
          <RightColumn>
            <CardDev
              side="right"
              name="Lucira"
              photo={LuciraPhoto}
              linkedin="https://www.linkedin.com/in/lucira-silva/"
            />
            <CardDev
              side="right"
              name="Julia"
              photo={JuliaPhoto}
              linkedin="https://www.linkedin.com/in/juliaclepf/"
            />
          </RightColumn>
        </Content>
      </Container>
    </>
  );
};
export default AboutUs;
