import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const FormLogin = ({ logado, setLogado }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .required("Campo obrigatório"),
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
    axios
      .post("https://kabit-api.herokuapp.com/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwt_decode(token);
        localStorage.clear();
        localStorage.setItem("@gestao:token", JSON.stringify(token));
        localStorage.setItem(
          "@gestao:user_Id",
          JSON.stringify(decoded.user_id)
        );
      });
  };

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <input placeholder="usuario" {...register("username")} />
        <p>
          {!!errors.usuario}
          {errors.usuario?.message}
        </p>

        <input placeholder="password" {...register("password")} />
        <p>
          {" "}
          {!!errors.password}
          {errors.password?.message}
        </p>

        <button type="submit" variant="outlined">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormLogin;
