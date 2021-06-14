import jwt_decode from "jwt-decode";
import { toastLogin } from "../utils";
import api from "../services";
import {
  toastSuccessRegister,
  toastErrorRegister,
  toastErrorAddHabitRandom,
} from "../utils";
const localToken = localStorage.getItem("@gestao:token") || "";

export const HandleFormLogin = (data) => {
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

export const handlePostHabits = (body) => {
  api
    .post("/habits/", body, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    })
    .catch((err) => console.log(err));
};

export const handlePostHabitsRandom = (
  body,
  setFormRandomHabit,
  formRandomHabit,
  setAddHabits,
  addHabits
) => {
  api
    .post("/habits/", body, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    })
    .then((response) => {
      setFormRandomHabit(!formRandomHabit);
      setAddHabits(addHabits + 1);
    })
    .catch((err) => toastErrorAddHabitRandom());
};

export const handleFormLogon = (necessaryDatas) => {
  api
    .post("/users/", necessaryDatas)
    .then((_) => {
      toastSuccessRegister();
    })
    .catch((_) => toastErrorRegister());
};

export const getPersonalHabits = (sethabits) => {
  api
    .get("/habits/personal/", {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    })
    .then((response) => {
      const { data } = response;
      localStorage.setItem("@gestao:habitos", JSON.stringify(data));
      sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
    });
};
