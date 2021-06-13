import Habits from "./habits";
import api from "../../services";
import React, { useEffect, useState } from "react";
import FormHabit from "../FormHabit";
import ContainerMyHabits from "./style";
import MyProgress from "../MyProgress";
import RandomHabits from "../../components/RandomHabits";
import CardExplication1 from "../../components/CardExplication1";
const MyHabits = () => {
  const [modal, setModal] = useState(false);
  const [addH, setAddH] = useState(0);
  const [cEHab, setcEHab] = useState(false);
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

        if (data.length === 0) {
          setcEHab(!cEHab);
        }

        localStorage.setItem("@gestao:habitos", JSON.stringify(data));
        console.log("atualizou na nuvem");
        sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
      })
      .catch((res) => console.log("deu ruim"));
  };

  const handleAddHabit = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (habits !== JSON.parse(localStorage.getItem("@gestao:habitos"))) {
      Loading();
    }
  }, [addH]);

  useEffect(() => {
    console.log("USEFFECT FUNFA");
    Loading();
    sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
  }, [addH]);

  return (
    <ContainerMyHabits>
      <h1>My Habits</h1>
      <div className="Add-new-Habit" onClick={handleAddHabit}>
        <h4>Add New Habits</h4>
      </div>

      {habits &&
        habits.map(
          (habit, index) =>
            habit.achieved === false && (
              <Habits
                habit={habit}
                key={index}
                addH={addH}
                setAddH={setAddH}
                sethabits={sethabits}
              />
            )
        )}
      {cEHab && (
        <CardExplication1
          text={"Aqui se adiciona um habito"}
          setcEHab={setcEHab}
          cEHab={cEHab}
        />
      )}
      {modal && (
        <FormHabit
          addH={addH}
          setAddH={setAddH}
          setModal={setModal}
          modal={modal}
        />
      )}
      <RandomHabits addH={addH} setAddH={setAddH} />
      <MyProgress habits={habits} />
    </ContainerMyHabits>
  );
};

export default MyHabits;
