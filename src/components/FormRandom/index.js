import * as S from "./styled";
import React, { useState } from "react";
import api from "../../services";
import Button from "../Button";
import { toastError } from "../../utils";
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
    api
      .post("/habits/", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setFormRandomHabit(!formRandomHabit);
        setAddHabits(addHabits + 1);
      })
      .catch((_) => toastError("Error adding habit"));
  };

  return (
    <S.ContainerModalRandom>
      <S.FormRandom>
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
