import { createContext, useContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [clickHabit, setClickHabit] = useState([]);
  const [habits, setHabits] = useState([]);

  const handleHabit = (habit) => {
    setClickHabit(habit);
  };

  const updateHabits = (habits) => {
    setHabits(habits);
  };

  return (
    <HabitContext.Provider
      value={{ clickHabit, handleHabit, habits, updateHabits }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
