import { Container } from "./styled";
const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...register(name)} {...rest} />
      {!!error && <p>- {error}</p>}
    </Container>
  );
};
export default Input;
