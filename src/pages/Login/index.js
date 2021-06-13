import FormLogin from "../../components/FormLogin";
import ImageLogin from "../../assets/image-login.svg"
import { Container } from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
    <Menu/>
      <Container>
        <img src={ImageLogin} alt="" />
        <FormLogin />
      </Container>
      <Footer />
    </>
  );
};
export default Login;
