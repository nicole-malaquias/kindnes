import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useHistory } from "react-router";
import { toastErrorRegister, toastSuccessRegister } from "../../utils";
import { Container, Terms } from "./styled";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
const FormRegister = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field")
      .min(4, "Minimum 4 characters"),
    email: yup.string().email("Invalid email").required("Required field"),
    password: yup
      .string()
      .min(6, "password length of minimum 6 digits")
      .required("Required field")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "must contain number, both lower and uppercase letters and special characters"
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
            type="email"
            name="email"
            label="email"
            placeholder="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            type="password"
            name="password"
            label="password"
            placeholder="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            type="password"
            name="passwordConfirm"
            label="Confirm your password"
            placeholder="Confirm your password"
            error={errors.passwordConfirm?.message}
          />
          <Terms>
            <input id="terms" type="checkbox" {...register("agree")} />
            <label htmlFor="terms">I agree with the terms</label>
            {errors.agree?.message && <p>- {errors.agree?.message}</p>}
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
