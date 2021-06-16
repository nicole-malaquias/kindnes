import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HandleFormLogin } from "../../services/conection";
import jwt_decode from "jwt-decode";
import { toastErrorLogin } from "../../utils";
import api from "../../services";

import { useAuthy } from "../../Providers/Authy";
import { useHistory } from "react-router";

import Button from "../../components/Button";
import { Container } from "./styles";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FormLogin = () => {
  const { updateAuthy, token } = useAuthy();
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field")
      .min(4, "Minimum 4 characters"),

    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, []);

  const handleForm = (data) => {
    HandleFormLogin(data);
    history.push("/dashboard");

    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwt_decode(token);
        updateAuthy(token, decoded.user_id);
        history.push("/dashboard");
        reset();
      })
      .catch((_) => toastErrorLogin());
  };

  return (
    <Container>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" {...register("username")} />
        <p>
          {!!errors.username}
          {errors.username?.message}
        </p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <p>
          {!!errors.password}
          {errors.password?.message}
        </p>
        <button type="submit">Submit</button>
      </form>
      <p>
        Don't have an account?<Link to="/register"> register</Link>
      </p>
    </Container>
  );
};

export default FormLogin;
