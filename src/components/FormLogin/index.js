import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HandleFormLogin } from "../../services/conection";
import jwt_decode from "jwt-decode";
import { toastLogin } from "../../utils";
import api from "../../services";
import { useAuthy } from "../../Providers/Authy";
import { useHistory } from "react-router";

const FormLogin = () => {
  const history = useHistory();
  const { updateAuthy } = useAuthy();
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().min(4, "4 digit minimum").required("Required field"),
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
    HandleFormLogin(data);
    history.push("/dashboard");

    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwt_decode(token);
        updateAuthy(token, decoded.user_id);
        reset();
      })
      .catch((_) => toastLogin());
  };

  return (
    <div>
      <h1> Login</h1>
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
    </div>
  );
};

export default FormLogin;
