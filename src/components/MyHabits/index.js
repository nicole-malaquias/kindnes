import Habits from "../Habits";
import api from "../../services";
import React, { useEffect, useState } from "react";
import FormHabit from "../FormHabit";
import * as S from "./style";

import RandomHabits from "../../components/RandomHabits";
import CardExplication from "../../components/CardExplication";

import { useHabit } from "../../Providers/Habits";

const MyHabits = () => {
  const { updateHabits } = useHabit();
  const [modal, setModal] = useState(false);
  const [addHabits, setAddHabits] = useState(0);
  const [cardExplication, setCardExplication] = useState(false);
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
          setCardExplication(!cardExplication);
        }
        localStorage.setItem("@gestao:habitos", JSON.stringify(data));
        sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
        updateHabits(data);
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
  }, [addHabits]);

  useEffect(() => {
    Loading();
    sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
  }, [addHabits]);

  return (
    <S.ContainerMyHabits>
      <h1>My Habits</h1>

      <S.AddNewHabit onClick={handleAddHabit}>
        <h4>Add New Habits</h4>
      </S.AddNewHabit>
      <S.Habits>
        {habits &&
          habits.map(
            (habit, index) =>
              habit.achieved === false && (
                <Habits
                  habit={habit}
                  key={index}
                  addHabits={addHabits}
                  setAddHabits={setAddHabits}
                  sethabits={sethabits}
                  honor={false}
                />
              )
          )}
      </S.Habits>
      {cardExplication && (
        <CardExplication
          text={"Aqui se adiciona um habito"}
          setCardExplication={setCardExplication}
          cardExplication={cardExplication}
        />
      )}
      {modal && (
        <FormHabit
          addHabits={addHabits}
          setAddHabits={setAddHabits}
          setModal={setModal}
          modal={modal}
        />
      )}
      <RandomHabits
        addHabits={addHabits}
        setAddHabits={setAddHabits}
        modalHabito={modal}
      />
    </S.ContainerMyHabits>
  );
};

export default MyHabits;
