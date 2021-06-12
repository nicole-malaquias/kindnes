import { Container } from "./styles";
import logo from "../../assets/logo.svg";
const Menu = ({ isLogin }) => {
  return !isLogin ? (
    <Container>
      <div>
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
        <h1>be habits</h1>
      </div>
    </Container>
  ) : (
    "renderir com menu burger e botão logaout"
  );
};
export default Menu;
