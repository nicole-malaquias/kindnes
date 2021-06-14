import { useState } from "react";
import Habits from "../Habits";
import * as S from "./styled";
import api from "../../services";

const Honor = () => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("@gestao:habitos")) || ""
  );
  const localToken = localStorage.getItem("@gestao:token") || "";

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then((response) => {
        const { data } = response;
        localStorage.setItem("@gestao:habitos", JSON.stringify(data));
        setHabits(data);
      });
  };

  return (
    <S.ContainerHonor>
      {console.log("habitos", habits)}
      {habits !== "" &&
        habits.map((habit) =>
          habit.achieved === true ? (
            <Habits habit={habit} honor={true} />
          ) : (
            <> </>
          )
        )}
    </S.ContainerHonor>
  );
};

export default Honor;
