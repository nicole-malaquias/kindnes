import React, { useState } from "react";
import ContainerRandomHabit from "./style";
import Button from "../Button";
import FormRandom from "../FormRandom";

const RandomHabist = ({ addHabits, setAddHabits, modalHabito }) => {
  const [formRandomHabit, setFormRandomHabit] = useState(false);
  const [title, setTitle] = useState("");
  const habitsRandom = [
    " Call a friend or a family member",
    " Ask a homeless person how they are doing",
    " Say good morning to a stranger",
    " Ask if a coworker needs help",
    " Write 3 things that you love about yourself",
    " Choose to eat something healthy",
    " Meditate for 10 minutes",
    " Spend quality time with loved ones",
    " Compliment someones smile",
    " Thank your employees",
    " Bring your coworkers a special treat.",
    " Let someone go in front of you on traffic or on a line",
  ];

  const handleRandomHabit = () => {
    if (!modalHabito) {
      setFormRandomHabit(!formRandomHabit);
    }
    const number = Math.floor(Math.random() * habitsRandom.length - 1) + 1;
    setTitle("");
    setTitle(habitsRandom[number]);
  };
  return (
    <ContainerRandomHabit>
      <h1>Random Habits</h1>
      <Button handleClick={handleRandomHabit}>Random</Button>
      {formRandomHabit && (
        <FormRandom
          addHabits={addHabits}
          setAddHabits={setAddHabits}
          title={title}
          formRandomHabit={formRandomHabit}
          setFormRandomHabit={setFormRandomHabit}
        />
      )}
    </ContainerRandomHabit>
  );
};

export default RandomHabist;
