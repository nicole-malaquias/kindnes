import { useGroup } from "../../Providers/Group";
import { Goal } from "./styles";

const GroupProgress = () => {
  const { goalHowMuch } = useGroup();
  return (
    <Goal>
      <h3>Attended meetings: </h3>
      <h3>{goalHowMuch}</h3>
    </Goal>
  );
};

export default GroupProgress;
