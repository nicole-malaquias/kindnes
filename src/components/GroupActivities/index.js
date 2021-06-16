import api from "../../services";
import { useGroup } from "../../Providers/Group";
import { useAuthy } from "../../Providers/Authy";

const GroupActivities = () => {
  const { token } = useAuthy();
  const {
    groupId,
    getGroup,
    isSubscribe,
    group,
    goalId,
    goalHowMuch,
    goalAchieved,
  } = useGroup();

  const handleActivitie = () => {
    const addHowMuch = Number(goalHowMuch) + Number(25);
    console.log(addHowMuch);
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
        completeGoal();
      });
  };

  const completeGoal = () => {
    let body = {
      achieved: true,
    };
    if (goalHowMuch >= 100) {
      api
        .patch(`goals/${goalId}/`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => getGroup());
    }
  };

  return <div>Activities</div>;
};

export default GroupActivities;
