import FormRegister from "../../components/FormRegister";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import image from "../../assets/image-register.svg";

import { Container, Content } from "./styled";

const Register = () => {
  return (
    <>
      <Container>
        <Menu />
        <Content>
          <img src={image} alt="" />
          <FormRegister />
        </Content>
        <Footer />
      </Container>
    </>
  );
};
export default Register;
