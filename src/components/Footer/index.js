import { Container } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <Container>
      <h2>
        <Link to="/aboutus">About</Link>
      </h2>
    </Container>
  );
};
export default Footer;
