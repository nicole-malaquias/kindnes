import FormRegister from "../../components/FormRegister";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import image from "../../assets/image-register.svg";

import { Container } from "./styles";

const Register = () => {
  return (
    <>
      <Menu />
      <Container>
          <img src={image} alt="" />
        <FormRegister />
      </Container>
      <Footer />
    </>
  );
};
export default Register;
