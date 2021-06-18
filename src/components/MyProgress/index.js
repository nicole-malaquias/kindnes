import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ContainerMyProgress } from "./style";
import { ContainerProgress } from "./style";
import { useHabit } from "../../Providers/Habits";

const MyProgress = () => {
  const { clickHabit } = useHabit();
  const { title, how_much_achieved } = clickHabit;

  return (
    <>
      <ContainerProgress>
        <p>{title === undefined ? "" : title}</p>
        <ContainerMyProgress>
          <CircularProgressbar
            value={how_much_achieved === undefined ? 0 : how_much_achieved}
            text={
              how_much_achieved === undefined ? 0 : how_much_achieved + "º day"
            }
            maxValue={24}
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
    </>
  );
};

export default MyProgress;
