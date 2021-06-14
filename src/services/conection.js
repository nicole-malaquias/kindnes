import jwt_decode from "jwt-decode";
import { toastLogin } from "../utils";
import api from "../services";
const localToken = localStorage.getItem("@gestao:token") || "";

const HandleFormLogin = (data) => {
  api
    .post("/sessions/", data)
    .then((response) => {
      const token = response.data.access;
      console.log(response);
      const decoded = jwt_decode(token);
      console.log(decoded.user_id);
      localStorage.clear();
      localStorage.setItem("@gestao:token", token);
      localStorage.setItem("@gestao:user_Id", JSON.stringify(decoded.user_id));
      localStorage.setItem("@gestao:habitos", JSON.stringify([]));
    })
    .catch((_) => toastLogin());
};

export default HandleFormLogin;
