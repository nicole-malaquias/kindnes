import api from "../../services";
import { useGroup } from "../../Providers/Group";
import { useAuthy } from "../../Providers/Authy";
import Button from "../Button";
import { ContainerActivities, TextBox } from "./styled";
import Confetti from "react-dom-confetti";
import { configConfetti } from "../../utils";

const GroupActivities = () => {
  const { token } = useAuthy();
  const {
    activities,
    goal,
    getGroup,
    isSubscribe,
    goalId,
    goalHowMuch,
    handle,
    setHandle,
  } = useGroup();

  const handleActivitie = () => {
    if (Object.values(goal).length > 0 && goalHowMuch < 4) {
      const addHowMuch = Number(goalHowMuch) + Number(1);
      setHandle(true);
      const body = {
        how_much_achieved: addHowMuch,
      };

      api
        .patch(`goals/${goalId}/`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          getGroup();
        });
    }
  };

  if (isSubscribe && goal) {
    return (
      <ContainerActivities>
        {activities &&
          activities.map((elem, index) => (
            <li key={index}>
              <TextBox>
                <p>{elem.title}</p>
              </TextBox>
              <Button colorButton="purplePink" handleClick={handleActivitie}>
                Done
              </Button>
              <Confetti active={handle} config={configConfetti} />
            </li>
          ))}
      </ContainerActivities>
    );
  } else {
    return (
      <ContainerActivities>
        {activities &&
          activities.map((elem, index) => (
            <li key={index}>
              <TextBox>
                <p>{elem.title}</p>
              </TextBox>
            </li>
          ))}
      </ContainerActivities>
    );
  }
};

export default GroupActivities;
