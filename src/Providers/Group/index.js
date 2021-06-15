import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groupId, setGroupId] = useState(
    localStorage.getItem("@gestao:groupId") || ""
  );

  const updateGroupId = (groupId) => {
    setGroupId(groupId);
    localStorage.setItem("@gestao:groupId", groupId);
  };

  return (
    <GroupContext.Provider value={{ groupId, updateGroupId }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
