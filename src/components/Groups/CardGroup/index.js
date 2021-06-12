import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";

const CardGroup = ({ groups }) => {
  const [chosenGroup] = useState(localStorage.getItem("@gestao:groupId") || []);
  const history = useHistory();

  const handleGroupChoice = (groupId) => {
    if (chosenGroup !== groupId)
      localStorage.setItem("@gestao:groupId", groupId);
    history.push("/specificgroup");
  };

  return (
    <div>
      {groups.map((item, index) => (
        <div key={index}>
          <div onClick={() => handleGroupChoice(item.id)}>
            <p>{item.name}</p>
            <p>
              <IoIosPeople size={20} />
              {item.users_on_group.length}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
