import { useState } from "react";
import { useHistory } from "react-router-dom";

const CardGroup = ({ groups }) => {
  const [chosenGroup] = useState(localStorage.getItem("@gestao:groupId") || []);
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
        <div key={index}>
          <h4>Name: {item.name}</h4>
          <h4>{item.users_on_group.length}</h4>
          <button onClick={() => handleGroupChoice(item.id)}>Click</button>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
