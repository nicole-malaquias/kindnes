import ContainerHabit from "./style";
import api from "../../services";
import Button from "../Button";
import { getPersonalHabits } from "../../services/conection";
import { useHabit } from "../../Providers/Habits";

const Habits = ({ habit, addHabits, setAddHabits, sethabits, honor }) => {
  const { handleHabit } = useHabit();
  const { title, how_much_achieved, id } = habit;

  const handleAchieved = () => {
    const token = localStorage.getItem("@gestao:token");
    setAddHabits(addHabits + 1);
    let body = {
      how_much_achieved: 24,
      achieved: true,
    };
    if (how_much_achieved > 23) {
      api.patch(`/habits/${id}/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      body = { how_much_achieved: how_much_achieved + 1, achieved: false };
      api.patch(`/habits/${id}/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    getPersonalHabits(sethabits);
  };
  const handleProgress = () => {
    localStorage.setItem("@gestao:atual_habit", JSON.stringify(habit));
    handleHabit(habit);
  };

  return (
    <>
      <ContainerHabit onClick={handleProgress}>
        <div className="title">
          <p>{title}</p>
        </div>
        <span>{habit.how_much_achieved}</span>
        {honor === false && <Button handleClick={handleAchieved}>Add</Button>}
        {honor === true && (
          <i class="fas fa-award fa-2x" style={{ color: "#f1af09" }}></i>
        )}
      </ContainerHabit>
    </>
  );
};

export default Habits;
