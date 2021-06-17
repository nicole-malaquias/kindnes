import { useGroup } from "../../Providers/Group";

const GroupGoal = () => {
  const { goal } = useGroup();
  return goal && <h3>{goal.title}</h3>;
};

export default GroupGoal;
