import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import Button from "../Button";
import * as S from "./styled";
import api from "../../services";
import { toastError } from "../../utils";
const FormHabit = ({ addHabits, setAddHabits, setModal, modal }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const token = localStorage.getItem("@gestao:token") || "";
  const id = parseInt(localStorage.getItem("@gestao:user_Id")) || "";

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePostHabits = (body) => {
    api
      .post("habits/", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => toastError("Error adding habit"));
  };
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
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
    setAddHabits(1 + addHabits);
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
      .post("habits/", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((_) => toastError("can't possible to register the habit"));
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
          <option value="beginner">Beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select onChange={handleDifficultyChange} required>
          <option value=""></option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <Button type="submit">Submit</Button>
        <Button className="closed" handleClick={() => setModal(!modal)}>
          X
        </Button>
      </S.FormHabits>
    </S.ContainerFormHabits>
  );
};

export default FormHabit;
