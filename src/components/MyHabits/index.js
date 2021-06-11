import Habits from "./habits";
import api from "../../services";
import React, { useEffect, useState } from "react";
import FormHabit from "../FormHabit";
import ContainerMyHabits from "./style";
import MyProgress from "../MyProgress";

const MyHabits = () => {
  const [modal, setModal] = useState(false);
  const [addH, setAddH] = useState(0);
  const localToken = localStorage.getItem("@gestao:token") || "";
  const [habits, sethabits] = useState(
    JSON.parse(localStorage.getItem("@gestao:habitos")) || []
  );
  const Loading = () => {
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
      })
      .catch((res) => console.log("deu ruim"));
  };

  const handleAddHabit = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (habits !== JSON.parse(localStorage.getItem("@gestao:habitos"))) {
      sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
      Loading();
    }
  }, [addH]);
  useEffect(() => {
    // console.log("oi");
    sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
    Loading();
  }, [addH]);

  return (
    <ContainerMyHabits>
      <div className="Add-new-Habit" onClick={handleAddHabit}>
        <h1>Add New Habits</h1>
      </div>

      {habits.map(
        (habit, index) =>
          habit.achieved === false && (
            <Habits habit={habit} key={index} addH={addH} setAddH={setAddH} />
          )
      )}
      {modal && <FormHabit addH={addH} setAddH={setAddH} />}
      <MyProgress habits={habits} />
    </ContainerMyHabits>
  );
};

export default MyHabits;
