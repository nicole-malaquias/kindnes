import Habits from "../Habits";
import * as S from "./styled";
import { useHabit } from "../../Providers/Habits";

const Honor = () => {
  const { habits } = useHabit();
  return (
    <S.ContainerHonor>
      <h1> Honor</h1>
      {habits !== "" &&
        habits.map((habit, index) =>
          habit.achieved === true ? (
            <Habits habit={habit} honor={true} index={index} />
          ) : (
            <> </>
          )
        )}
    </S.ContainerHonor>
  );
};

export default Honor;
