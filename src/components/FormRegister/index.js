import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useHistory } from "react-router";
import { toastErrorRegister, toastSuccessRegister } from "../../utils";
import { Container, Terms } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const FormRegister = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field")
      .min(4, "Mínimo 4 caracteres"),
    email: yup.string().email("Email inválido").required("Required field"),
    password: yup
      .string()
      .min(6, "Senha mínima de 6 dígitos")
      .required("Required field")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "Password must contain  at least one number,  both lower and uppercase letters and special characters"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Incorrect password")
      .required("Required field"),
    agree: yup
      .boolean()
      .oneOf([true], "You need to accept the terms")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = ({ username, email, password }) => {
    const necessaryDatas = { username, email, password };
    api
      .post("/users/", necessaryDatas)
      .then((_) => {
        toastSuccessRegister();
        history.push("/login");
      })
      .catch((_) => toastErrorRegister());
    reset();
  };
  return (
    <>
      <Container>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          {errors.username?.message && <p>{errors.username.message}</p>}

          <label htmlFor="">email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
          <label htmlFor="passwordConfirm">confirm your password</label>
          <input
            id="passwordConfirm"
            type="password"
            placeholder="confirm your password"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message && (
            <p>{errors.passwordConfirm.message}</p>
          )}
          <Terms>
            <input id="terms" type="checkbox" {...register("agree")} />
            <label htmlFor="terms">I agree with the terms</label>
            {errors.agree?.message && <p>{errors.agree?.message}</p>}
          </Terms>

          <Button type="submit">Send</Button>
        </form>

        <p>
          Already registered? <Link to="/login">login</Link>
        </p>
      </Container>
    </>
  );
};
export default FormRegister;
