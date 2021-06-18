import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import Button from "../Button";
import * as S from "./styled";
import { useHabit } from "../../Providers/Habits";

const FormHabit = ({ addHabits, setAddHabits, setModal, modal }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const id = parseInt(localStorage.getItem("@gestao:user_Id")) || "";
  const { addHabit } = useHabit();

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
    console.log(body);
    addHabit(body);
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
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="myself">With Myself</option>
          <option value="others">With Others</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select onChange={(e) => setDifficulty(e.target.value)} required>
          <option value=""></option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
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
