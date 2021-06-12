import ContainerModalRandom from "./style";
import React, { useEffect, useState } from "react";
import api from "../../services";
import Button from "../Button";
const FormRandom = ({
  title,
  addH,
  setAddH,
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
      title: title,
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
      .then((response) => {
        setFormRandomHabit(!formRandomHabit);
        setAddH(addH + 1);
      })
      .catch((err) => console.log(err));
  };
  console.log("o contador do componente saindo", addH);
  return (
    <ContainerModalRandom>
      <h2>{title}</h2>
      <label htmlFor="difficulty">
        <p>Difficulty </p>
      </label>
      <select value={difficulty} onChange={handleCategoryChange}>
        <option value={"beginner"}> Beginner </option>
        <option value={"intermediate"}>intermediate</option>
        <option value={"advanced"}>Advanced</option>
      </select>
      <Button onClick={handleRandom}>Yes</Button>
      <Button onClick={() => setFormRandomHabit(!formRandomHabit)}>No</Button>
    </ContainerModalRandom>
  );
};

export default FormRandom;
