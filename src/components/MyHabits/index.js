import Habits from "./habits";
import api from "../../services";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FormHabit from "../FormHabit";
import { useContext } from "react";
import { useAuthentication } from "../../Providers/Authentication";

const MyHabits = () => {
  const history = useHistory();
  const [habits, setHabits] = useState([]);
  const [modal, setModal] = useState(false);
  const localToken = localStorage.getItem("@gestao:token") || "";
  const { authenticated } = useContext(useAuthentication);

  if (!authenticated) {
    history.push("/login");
  }
  const LoadingHabit = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then((response) => {
        const { data } = response;
        setHabits(data);
        localStorage.setItem("@gestao:habitos", JSON.stringify(data));
      })
      .catch((res) => console.log("deu ruim"));
  };
  const handleAddHabit = (data) => {
    setModal(!modal);
  };
  useEffect(() => {
    LoadingHabit();
  }, []);

  return (
    <div>
      <div className="Add new Habit" onClick={handleAddHabit}>
        <h1>Add New Habits</h1>
      </div>
      {habits.map(
        (habit, index) =>
          habit.achieved === false && <Habits habit={habit} key={index} />
      )}
      {modal && <FormHabit />}
    </div>
  );
};

export default MyHabits;
