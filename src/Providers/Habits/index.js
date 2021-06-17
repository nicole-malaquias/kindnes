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
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
