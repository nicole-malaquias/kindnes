import { Container } from "./styles";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <Container>
      <h2>Inserir aqui link para o about</h2>
      <div>
        <img src={logo} alt="logo"></img>
        <h1>be habits</h1>
      </div>
    </Container>
  );
};
export default Footer;
