import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useAuthy } from "../Authy";
import { toastError } from "../../utils";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [clickHabit, setClickHabit] = useState([]);
  const [habits, setHabits] = useState([]);
  const { token } = useAuthy();

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data));
  };

  const addHabit = (body) => {
    console.log(body);
    api
      .post("habits/", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => getHabits())
      .catch((_) => toastError("can't possible to register the habit"));
  };

  const handleHabit = (habit) => {
    setClickHabit(habit);
  };

  const updateHabits = (habits) => {
    setHabits(habits);
  };
  const resetHabits = () => {
    setHabits([]);
  };

  return (
    <HabitContext.Provider
      value={{
        setHabits,
        setClickHabit,
        clickHabit,
        handleHabit,
        habits,
        updateHabits,
        resetHabits,
        getHabits,
        addHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
