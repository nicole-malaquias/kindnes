import { useGroup } from "../../Providers/Group";

const GroupGoal = () => {
  const { goal } = useGroup();
  return goal && <span>{goal.title}</span>;
};

export default GroupGoal;
