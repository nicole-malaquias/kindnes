import { Container } from "./styles";
import logo from "../../assets/logo.svg";
const Menu = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo"></img>
        <h1>be habits</h1>
      </div>
    </Container>
  );
};
export default Menu;
