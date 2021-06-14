import * as S from "./styled";
import React, { useState } from "react";
import api from "../../services";
import Button from "../Button";
import { handlePostHabitsRandom } from "../../services/conection";
const FormRandom = ({
  title,
  addHabits,
  setAddHabits,
  formRandomHabit,
  setFormRandomHabit,
}) => {
  const [difficulty, setDifficulty] = useState("");
  const token = localStorage.getItem("@gestao:token") || "";
  const id = parseInt(localStorage.getItem("@gestao:user_Id")) || "";
  const handleCategoryChange = (event) => {
    setDifficulty(event.target.value);
  };

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
    handlePostHabitsRandom(
      body,
      setFormRandomHabit,
      formRandomHabit,
      setAddHabits,
      addHabits
    );
  };
  return (
    <S.ContainerModalRandom>
      <S.Form_Random>
        <span>"{title}"</span>
        <label htmlFor="difficulty">
          <p>Difficulty </p>
        </label>
        <select value={difficulty} onChange={handleCategoryChange} required>
          <option value=""></option>
          <option value="beginner"> Beginner </option>
          <option value="intermediate">intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        {/* <S.ContainerButtonRandom> */}
        <Button handleClick={handleRandom}>Yes</Button>
        <Button handleClick={() => setFormRandomHabit(!formRandomHabit)}>
          No
        </Button>
        {/* </S.ContainerButtonRandom> */}
      </S.Form_Random>
    </S.ContainerModalRandom>
  );
};

export default FormRandom;
