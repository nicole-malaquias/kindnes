import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { toastErrorLogin } from "../../utils";
import api from "../../services";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Container } from "./styles";
const useStyles = makeStyles({
  field: {
    backgroundColor: "var(--white)",
    borderRadius: "5px",
    marginTop: "2px",
  },
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DBA5F3",
    },
  },
});
const FormLogin = () => {
  const classes = useStyles();
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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
      <h2>SignIn</h2>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            className={classes.field}
            color="primary"
            variant="outlined"
            label="Username"
            name="Username"
            type="text"
            {...(errors.username?.message && {
              error: true,
              helperText: errors.username.message,
            })}
            {...register("username")}
          />
          <TextField
            className={classes.field}
            color="primary"
            variant="outlined"
            label="password"
            name="password"
            type="text"
            {...(errors.password?.message && {
              error: true,
              helperText: errors.password.message,
            })}
            {...register("password")}
          />

          <Button type="submit" colorButton="purplePink">Login</Button>
        </form>
      </ThemeProvider>
    </Container>
  );
};

export default FormLogin;
