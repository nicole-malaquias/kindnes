import { Container } from "./styled";
import { Link } from "react-router-dom";
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
