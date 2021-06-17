import { useGroup } from "../../Providers/Group";
import { Goal } from "./styles";

const GroupProgress = () => {
  const { goalHowMuch } = useGroup();
  return (
    <Goal>
      <h3>number of attended meetings</h3>
      {goalHowMuch && <span>{goalHowMuch}</span>}
    </Goal>
  );
};

export default GroupProgress;
