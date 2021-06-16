import api from "../services";
import { toastError } from "../utils";

const localToken = localStorage.getItem("@gestao:token") || "";

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
    .catch((err) => toastError("Unable to add this habit"));
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
