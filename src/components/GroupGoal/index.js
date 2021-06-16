import { useGroup } from "../../Providers/Group";

const GroupGoal = () => {
  const { goal } = useGroup();

  return goal && <h5>{goal.title}</h5>;
};

export default GroupGoal;
