import { useEffect } from "react";
import { getPersonalHabits } from "../../services/conection";

const Honor = () => {
  const habits = JSON.parse(localStorage.getItem("@gestao:habitos")) || "";
  useEffect(() => {
    getPersonalHabits();
    habits = JSON.parse(localStorage.getItem("@gestao:habitos")) || "";
  }, []);

  return (
    <>
      {habits !== "" &&
        habits.map((habit) => {
          habit.how_much_achieved >= 24 && <h1>oi</h1>;
        })}
    </>
  );
};

export default Honor;
