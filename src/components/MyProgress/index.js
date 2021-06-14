import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ContainerMyProgress } from "./style";
import { ContainerProgress } from "./style";

const MyProgress = () => {
  let habit = "";
  let total = 10;
  // let habit = localStorage.getItem("@gestao:atual_habit") || "";
  // const [total, setTotal] = useState(0);

  // const loading = () => {
  //   habit = localStorage.getItem("@gestao:atual_habit") || "";
  //   if (habits !== null && habit === "") {
  //     let temp = habits.reduce(
  //       (acc, item) => (acc += item.how_much_achieved),
  //       0
  //     );
  //     setTotal(0);
  //   }
  //   if (habit !== "") {
  //     let temp = JSON.parse(habit);
  //     setTotal(temp.how_much_achieved);
  //   }
  // };

  // useEffect(() => {
  //   loading();
  // }, []);

  // useEffect(() => {
  //   loading();
  //   console.log("ola");
  // }, []);

  return (
    <ContainerProgress>
      <p>{habit === "" ? "General Progress" : habit.title}</p>
      <ContainerMyProgress>
        <CircularProgressbar
          value={total}
          text={` ${total} %`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.7,
            pathColor: `rgb(50,55,207)`,
            textColor: "rgb(50,55,207)",
            trailColor: "#d6d6d6",
            backgroundColor: "rgb(50,55,207)",
          })}
        />
      </ContainerMyProgress>
    </ContainerProgress>
  );
};

export default MyProgress;
