import { Container } from "./styles";

const Button = ({
  children,
  colorButton,
  width,
  height,
  handleClick,
  color,
  padding,
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
      padding={padding}
    >
      {children}
    </Container>
  );
};
export default Button;
