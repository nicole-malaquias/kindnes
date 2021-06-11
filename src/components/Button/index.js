import { Container } from "./styles";

const Button = ({ children, colorButton, width, height, ...rest }) => {
  return (
    <Container
      colorButton={colorButton}
      width={width}
      height={height}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};
export default Button;
