import * as S from "./styled";
import React, { useState } from "react";

import Button from "../Button";

import { useHabit } from "../../Providers/Habits";

const FormRandom = ({
  title,
  addHabits,
  setAddHabits,
  formRandomHabit,
  setFormRandomHabit,
}) => {
  const [difficulty, setDifficulty] = useState("");
  const id = parseInt(localStorage.getItem("@gestao:user_Id")) || "";
  const { addHabit } = useHabit();

  const handleRandom = () => {
    const body = {
      title,
      category: "category",
      difficulty: difficulty,
      frequency: "usual",
      achieved: false,
      how_much_achieved: 0,
      user: id,
    };

    addHabit(body);
    setFormRandomHabit(!formRandomHabit);
  };

  return (
    <S.ContainerModalRandom>
      <S.FormRandom>
        <span>"{title}"</span>
        <label htmlFor="difficulty">
          <p>Difficulty </p>
        </label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <S.ContainerButtonRandom>
          <Button handleClick={handleRandom}>Yes</Button>
          <Button handleClick={() => setFormRandomHabit(!formRandomHabit)}>
            No
          </Button>
        </S.ContainerButtonRandom>
      </S.FormRandom>
    </S.ContainerModalRandom>
  );
};

export default FormRandom;
