import { useHistory } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { CardItem } from "./styles";

import { useGroup } from "../../../Providers/Group";
const CardGroup = ({ groups }) => {
  const { groupId, updateGroupId } = useGroup();
  const history = useHistory();

  const handleGroupChoice = (newGroupId) => {
    if (groupId !== newGroupId) {
      updateGroupId(newGroupId);
      history.push("/specificgroup");
    }
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
