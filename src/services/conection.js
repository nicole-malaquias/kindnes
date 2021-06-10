import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import toastLogin from "../utils";
import api from "../services";
import { useContext } from "react";
import { useAuthentication } from "../Providers/Authentication";

const handleFormLogin = (data) => {
  const { token } = useAuthentication();
  api
    .post("/sessions/", data)
    .then((response) => {
      const token = response.data.access;
      const decoded = jwt_decode(token);
      localStorage.clear();
      localStorage.setItem("@gestao:token", token);
      localStorage.setItem("@gestao:user_Id", JSON.stringify(decoded.user_id));
    })
    .catch((_) => toastLogin());
};

export default handleFormLogin;
