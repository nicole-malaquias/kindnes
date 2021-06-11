import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContainerFormHabits from "./style";
import api from "../../services";
import React, { useState } from "react";

const FormHabit = ({ addH, setAddH }) => {
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
    frequency: yup.string().required("Campo obrigatório"),
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
    setAddH(!addH);
    const { title, frequency } = data;
    const body = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
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
    <ContainerFormHabits>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" {...register("title")} />
        <p>
          {!!errors.username}
          {errors.username?.message}
        </p>

        <label htmlFor="category">category</label>
        <select
          value={category}
          {...register("status", {
            required: "required",
          })}
          onChange={handleCategoryChange}
        >
          <option value={"beginner"}>Beginner</option>
          <option value={"intermediate"}>intermediate</option>
          <option value={"advanced"}>Advanced</option>
        </select>

        <label htmlFor="difficulty">difficulty</label>
        <select
          value={difficulty}
          {...register("status", {
            required: "required",
          })}
          onChange={handleDifficultyChange}
        >
          <option value={"beginner"}>Beginner</option>
          <option value={"intermediate"}>intermediate</option>
          <option value={"advanced"}>Advanced</option>
        </select>

        <label htmlFor="frequency">frequency</label>
        <input type="number" id="frequency" {...register("frequency")} />
        <p>
          {!!errors.frequency}
          {errors.frequency?.message}
        </p>

        <button type="submit">Enviar</button>
      </form>
    </ContainerFormHabits>
  );
};

export default FormHabit;
