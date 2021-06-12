import { Container } from "./styles";

const Button = ({
  children,
  colorButton,
  width,
  height,
  handleClick,
  color,
  ...rest
}) => {
  return (
    <Container
      colorButton={colorButton}
      color={color}
      width={width}
      height={height}
      type="button"
      {...rest}
      onClick={handleClick}
    >
      {children}
    </Container>
  );
};
export default Button;
