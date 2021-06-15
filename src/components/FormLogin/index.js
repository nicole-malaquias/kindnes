import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { toastErrorLogin } from "../../utils";
import api from "../../services";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container } from "./styles";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field")
      .min(4, "Minimum 4 characters"),

    password: yup
      .string()
      .min(6, "password length of minimum 6 digits")
      .required("Required field")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "must contain number, both lower and uppercase letters and special characters"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwt_decode(token);
        localStorage.clear();
        localStorage.setItem("@gestao:token", token);
        localStorage.setItem(
          "@gestao:user_Id",
          JSON.stringify(decoded.user_id)
        );
        reset();
        history.push("/dashboard");
      })
      .catch((_) => toastErrorLogin());
  };

  return (
    <Container>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          register={register}
          type="text"
          name="username"
          label="username"
          placeholder="username"
          error={errors.username?.message}
        />
        <Input
          register={register}
          type="password"
          name="password"
          label="password"
          placeholder="password"
          error={errors.password?.message}
        />
        <Button type="submit" colorButton="pink">
          Login
        </Button>
      </form>
      <p>
        Would you like to <Link to="/register">register?</Link>
      </p>
    </Container>
  );
};

export default FormLogin;
