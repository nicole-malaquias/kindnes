import ContainerHabit from "./style";
import api from "../../services";
import Button from "../Button";
import { getPersonalHabits } from "../../services/conection";

const Habits = ({ habit, addHabits, setAddHabits, sethabits, honor }) => {
  const { title, how_much_achieved, id } = habit;
  const localToken = localStorage.getItem("@gestao:token") || "";

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
  };

  return (
    <>
      <ContainerHabit onClick={handleProgress}>
        <div className="title">
          <p>{title}</p>
        </div>

        {honor === false && <Button handleClick={handleAchieved}>Add</Button>}
        {honor === true && (
          <i class="fas fa-award fa-2x" style={{ color: "#f1af09" }}></i>
        )}
      </ContainerHabit>
    </>
  );
};

export default Habits;
