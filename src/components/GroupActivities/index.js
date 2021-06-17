import api from "../../services";
import { useGroup } from "../../Providers/Group";
import { useAuthy } from "../../Providers/Authy";
import Button from "../Button";
import { ContainerActivities } from "./styled";
const GroupActivities = () => {
  const { token } = useAuthy();
  const { activities, goal, getGroup, isSubscribe, goalId, goalHowMuch } =
    useGroup();

  const handleActivitie = () => {
    if (goal) {
      const addHowMuch = Number(goalHowMuch) + Number(25);

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
              <span>{elem.title}</span>
              <Button
                colorButton="purplePink"
                width="50px"
                handleClick={handleActivitie}
              >
                Done
              </Button>
            </li>
          ))}
      </ContainerActivities>
    );
  } else {
    return (
      <ContainerActivities>
        {activities &&
          activities.map((elem, index) => <li key={index}>{elem.title}</li>)}
      </ContainerActivities>
    );
  }
};

export default GroupActivities;
