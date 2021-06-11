import { Card, Container, LeftColumn, Line, RightColumn } from "./styles";

const AboutUs = () => {
  return (
    <Container>
      <LeftColumn>
        <Card side="left">
          <img src="" alt="Tanizia photo" />
          <div>
            <h3>Tanizia</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/tanizia-fagundes-a45896125/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </Card>

        <Card side="left">
          <img src="" alt="Emanuela photo" />
          <div>
            <h3>Emanuela</h3>
            <p>
              <a href="https://www.linkedin.com/in/emanuela-biondo-quizini-245ab0195/">
                Linkedin
              </a>
            </p>
          </div>
        </Card>

        <Card side="left">
          <img src="" alt="Nicole photo" />
          <div>
            <h3>Nicole</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/nicole-m-7b799685/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </Card>
      </LeftColumn>
      <Line></Line>
      <RightColumn>
        <Card side="right">
          <img src="" alt="Lucira photo" />
          <div>
            <h3>Lucira</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/lucira-silva/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </Card>
        <Card side="right">
          <img src="" alt="Julia photo" />
          <div>
            <h3>Julia</h3>
            <p>
              <a href="https://www.linkedin.com/in/juliaclepf/" target="_blank">
                Linkedin
              </a>
            </p>
          </div>
        </Card>
      </RightColumn>
    </Container>
  );
};
export default AboutUs;
