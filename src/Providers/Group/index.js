import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useAuthy } from "../Authy";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const { token } = useAuthy();
  const [groupId, setGroupId] = useState(
    localStorage.getItem("@gestao:groupId") || ""
  );
  const userId = localStorage.getItem("@gestao:user_Id") || "";
  const updateGroupId = (groupId) => {
    setGroupId(groupId);
    localStorage.setItem("@gestao:groupId", groupId);
  };
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [group, setGroup] = useState({});
  const [goalId, setGoalId] = useState(0);
  const [goalHowMuch, setGoalHowMuch] = useState(0);
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [goal, setGoal] = useState({});
  const [activities, setActivities] = useState([]);

  const getGroup = () => {
    api.get(`groups/${groupId}/`).then((response) => {
      const { data } = response;
      const { goals } = data;
      const { users_on_group } = data;
      const users = users_on_group;
      const isMember = users.filter((elem) => elem.id === parseInt(userId));

      setGroup(data);
      setActivities(data.activities);

      if (goals[0]) {
        setGoal(goals[0]);
        setGoalId(goals[0].id);
        setGoalAchieved(goals[0].achieved);
        setGoalHowMuch(goals[0].how_much_achieved);
        completeGoal(goals[0].how_much_achieved, goals[0].achieved);
      }

      if (isMember.length > 0) {
        setIsSubscribe(true);
      } else {
        setIsSubscribe(false);
      }
    });
  };

  const completeGoal = (howMuch, achieved) => {
    let body = {
      achieved: true,
    };
    if (howMuch === 100 && !achieved) {
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

  return (
    <GroupContext.Provider
      value={{
        groupId,
        updateGroupId,
        getGroup,
        isSubscribe,
        group,
        goalId,
        goalHowMuch,
        goalAchieved,
        goal,
        activities,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
