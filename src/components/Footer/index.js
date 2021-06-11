import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <Container>
      <h2>
        <Link to="/aboutus">About</Link>
      </h2>
      <Link to="/">
        <div>
          <img src={logo} alt="logo"></img>
          <h1>be habits</h1>
        </div>
      </Link>
    </Container>
  );
};
export default Footer;
