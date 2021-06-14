import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useHistory } from "react-router";
import { handleFormLogon } from "../../services/conection";
const FormRegister = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(4, "Mínimo 4 caracteres"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha mínima de 6 dígitos")
      .required("Campo obrigatório")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "A senha deve contar ao menos uma letra maiúscula, uma minúscula, um caractere especial e ao menos um dígito"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
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

  const handleForm = ({ username, email, password }) => {
    const necessaryDatas = { username, email, password };

    handleFormLogon(necessaryDatas);
    history.push("/login");

    reset();
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" {...register("username")} />
        {errors.username?.message && <p>{errors.username.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <label htmlFor="passwordConfirm">Confirmação de senha</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm?.message && (
          <p>{errors.passwordConfirm.message}</p>
        )}

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
export default FormRegister;
