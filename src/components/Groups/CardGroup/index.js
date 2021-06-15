import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { CardItem } from "./styles";

const CardGroup = ({ groups }) => {
  const [chosenGroup] = useState(localStorage.getItem("@gestao:groupId") || []);
  const history = useHistory();

  const handleGroupChoice = (groupId) => {
    if (chosenGroup !== groupId)
      localStorage.setItem("@gestao:groupId", groupId);
    history.push("/specificgroup");
  };

  return groups.map((item, index) => (
    <CardItem onClick={() => handleGroupChoice(item.id)} key={index}>
      <p>{item.name}</p>
      <p>
        <IoIosPeople size={20} />
        {item.users_on_group.length}
      </p>
    </CardItem>
  ));
};

export default CardGroup;
