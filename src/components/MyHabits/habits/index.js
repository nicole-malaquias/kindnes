import ContainerHabit from "./style";
import api from "../../../services";

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
        <h3>{title}</h3>
        <h4>difficulty: {difficulty}</h4>
        <h4>category : {category}</h4>
        <h4> {how_much_achieved} : 24 </h4>
        <button onClick={handleAchieved}>Add</button>
      </ContainerHabit>
    </>
  );
};

export default Habits;
