import { Container } from "./styles";
import logo from "../../assets/logo.svg";
const Menu = ({ isLogin }) => {
  return !isLogin ? (
    <Container>
      <div>
        <img src={logo} alt="logo"></img>
        <h1>be habits</h1>
      </div>
    </Container>
  ) : (
    "renderir com menu burger e botão logaout"
  );
};
export default Menu;
