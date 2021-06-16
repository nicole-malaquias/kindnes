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
  const getGroup = () => {
    api.get(`groups/${groupId}/`).then((response) => {
      const { users_on_group } = response.data;
      const users = users_on_group;
      const isMember = users.filter((elem) => elem.id === parseInt(userId));

      setGroup(response.data);
      if (isMember.length > 0) {
        setIsSubscribe(true);
      } else {
        setIsSubscribe(false);
      }
    });
  };

  return (
    <GroupContext.Provider
      value={{ groupId, updateGroupId, getGroup, isSubscribe, group }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
