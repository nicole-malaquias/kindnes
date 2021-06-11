import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

const CardGroup = ({ groups }) => {
  const [chosenGroup, setChosenGroup] = useState(
    localStorage.getItem("@gestao:groupId") || []
  );
  const history = useHistory();

  const handleGroupChoice = (groupId) => {
    console.log(groupId);
    if (chosenGroup !== groupId)
      localStorage.setItem("@gestao:groupId", groupId);
    history.push("/specificgroup");
  };

  return (
    <div>
      {groups.map((item, index) => (
        <div>
          <h4 key={index}>Name: {item.name}</h4>
          <h4>{item.users_on_group.length}</h4>
          <button onClick={() => handleGroupChoice(item.id)}>Click</button>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
