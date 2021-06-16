import api from "../../services";
import { useGroup } from "../../Providers/Group";
import { useAuthy } from "../../Providers/Authy";
import Button from "../Button";

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
      <>
        {activities &&
          activities.map((elem, index) => (
            <li key={index}>
              {elem.title} <Button handleClick={handleActivitie}>Done</Button>
            </li>
          ))}
      </>
    );
  } else {
    return (
      <>
        {activities &&
          activities.map((elem, index) => <li key={index}>{elem.title}</li>)}
      </>
    );
  }
};

export default GroupActivities;
