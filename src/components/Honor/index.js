import Habits from "../Habits";
import * as S from "./styled";
import { useHabit } from "../../Providers/Habits";

const Honor = () => {
  const { habits } = useHabit();
  return (
    <S.ContainerHonor>
      <h1> Honor</h1>
      <S.Honor>
        {habits !== "" &&
          habits.map(
            (habit, index) =>
              habit.achieved === true && (
                <Habits habit={habit} honor={true} key={index} />
              )
          )}
      </S.Honor>
    </S.ContainerHonor>
  );
};

export default Honor;
