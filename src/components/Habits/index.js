import ContainerHabit from "./style";
import api from "../../services";
import Button from "../Button";
import { getPersonalHabits } from "../../services/conection";

const Habits = ({ habit, addHabits, setAddHabits, sethabits }) => {
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
        <p> {how_much_achieved} : 24 </p>
        <Button handleClick={handleAchieved}>Add</Button>
      </ContainerHabit>
    </>
  );
};

export default Habits;
