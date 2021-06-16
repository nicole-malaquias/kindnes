import NotFoundImage from "../../assets/pana.png";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Container, Content } from "./styles";
const NotFound = () => {
  return (
    <>
      <Container>
        <Menu />
        <Content>
          <h2>Page not Found</h2>
          <img src={NotFoundImage} alt="Page not found" />
        </Content>
        <Footer />
      </Container>
    </>
  );
};
export default NotFound;
