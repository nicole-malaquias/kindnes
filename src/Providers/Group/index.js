import { createContext, useContext, useState } from "react";
import api from "../../services";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
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
  const [goal, setGoal] = useState({});
  const [activities, setActivities] = useState([]);
  const [goalProgress, setGoalProgress] = useState(0);

  const getGroup = () => {
    api.get(`groups/${groupId}/`).then((response) => {
      const { users_on_group } = response.data;
      const users = users_on_group;
      const isMember = users.filter((elem) => elem.id === parseInt(userId));

      setGroup(response.data);

      if (response.data.goals[0]) {
        setGoal(response.data.goals[0]);
        setActivities(response.data.activities);
        setGoalProgress(response.data.goals[0].how_much_achieved);
      }

      if (isMember.length > 0) {
        setIsSubscribe(true);
      } else {
        setIsSubscribe(false);
      }
    });
  };

  return (
    <GroupContext.Provider
      value={{
        groupId,
        updateGroupId,
        getGroup,
        isSubscribe,
        group,
        goal,
        activities,
        goalProgress,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
