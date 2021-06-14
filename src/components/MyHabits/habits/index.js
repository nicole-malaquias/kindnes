import ContainerHabit from "./style";
import api from "../../../services";
import Button from "../../Button";
const Habits = ({ habit, index, addH, setAddH, sethabits }) => {
  const { title, how_much_achieved, id } = habit;
  console.log(addH);
  const localToken = localStorage.getItem("@gestao:token") || "";

  const handleAchieved = () => {
    const token = localStorage.getItem("@gestao:token");
    console.log(addH);
    setAddH(addH + 1);
    let body = {
      how_much_achieved: 24,
      achieved: true,
    };
    if (how_much_achieved > 23) {
      console.log("ué?");
      api.patch(`/habits/${id}/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      body = { how_much_achieved: how_much_achieved + 1, achieved: false };
      console.log(body);
      api.patch(`/habits/${id}/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then((response) => {
        const { data } = response;
        localStorage.setItem("@gestao:habitos", JSON.stringify(data));
        sethabits(JSON.parse(localStorage.getItem("@gestao:habitos")));
      });
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
