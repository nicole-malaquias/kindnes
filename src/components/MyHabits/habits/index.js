import ContainerHabit from "./style";
import api from "../../../services";
import Button from "../../Button";
const Habits = ({ habit, index, addH, setAddH }) => {
  const { title, difficulty, category, how_much_achieved, id } = habit;

  const handleAchieved = () => {
    const token = localStorage.getItem("@gestao:token");
    setAddH(addH + 1);
    let body = {
      how_much_achieved: 24,
      achieved: true,
    };
    if (how_much_achieved === 23) {
      console.log("ué?");
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
  };

  return (
    <>
      <ContainerHabit>
        <p>{title}</p>
        <p>difficulty: {difficulty}</p>
        <p>category : {category}</p>
        <p> {how_much_achieved} : 24 </p>
        <Button onClick={handleAchieved}>Add</Button>
      </ContainerHabit>
    </>
  );
};

export default Habits;
