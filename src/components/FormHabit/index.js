import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services";
import React, { useState } from "react";
import Button from "../Button";
import * as S from "./styled";

const FormHabit = ({ addH, setAddH, setModal, modal }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const token = localStorage.getItem("@gestao:token") || "";
  const id = parseInt(localStorage.getItem("@gestao:user_Id")) || "";

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setModal(!modal);
    setAddH(1 + addH);
    const { title } = data;
    const body = {
      title,
      category: category,
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
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <S.ContainerFormHabits>
      <S.FormHabits onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" {...register("title")} />
        <p>
          {!!errors.title}
          {errors.title?.message}
        </p>
        <label htmlFor="category">Category</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value=""></option>
          <option value={"beginner"}>Beginner</option>
          <option value={"intermediate"}>intermediate</option>
          <option value={"advanced"}>Advanced</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select onChange={handleDifficultyChange} required>
          <option value=""></option>
          <option value={"beginner"}>Beginner</option>
          <option value={"intermediate"}>intermediate</option>
          <option value={"advanced"}>Advanced</option>
        </select>

        <Button type="submit">Enviar</Button>
        <Button className="x" handleClick={() => setModal(!modal)}>
          X
        </Button>
      </S.FormHabits>
    </S.ContainerFormHabits>
  );
};

export default FormHabit;
