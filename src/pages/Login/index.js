import FormLogin from "../../components/FormLogin";
import ImageLogin from "../../assets/image-login.svg";
import { Container, Content } from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
      <Container>
        <Menu />
        <Content>
          <img src={ImageLogin} alt="" />
          <FormLogin />
        </Content>

        <Footer />
      </Container>
    </>
  );
};
export default Login;
