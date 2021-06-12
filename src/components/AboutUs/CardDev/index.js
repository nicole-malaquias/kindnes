import { Container, Datas } from "./styles";

const CardDev = ({name, photo, linkedin, side}) => {

    return (
      <Container side={side}>
        <img src={photo} alt={name} />
        <Datas>
          <h4>{name}</h4>
          <p>
            <a href={linkedin} target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </p>
        </Datas>
      </Container>
    );
}
export default CardDev;