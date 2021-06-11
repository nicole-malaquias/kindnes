import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ContainerMyProgress } from "./style";
import { ContainerProgress } from "./style";
const MyProgress = ({ habits }) => {
  let total = habits.reduce((acc, item) => (acc += item.how_much_achieved), 0);

  return (
    <ContainerProgress>
      <h2> General Progress</h2>
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
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "rgb(50,55,207)",
          })}
        />
      </ContainerMyProgress>
    </ContainerProgress>
  );
};

export default MyProgress;
