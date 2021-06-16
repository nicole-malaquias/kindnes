import { useGroup } from "../../Providers/Group";
const GroupProgress = () => {
  const { goalProgress } = useGroup();
  return <span>{goalProgress}</span>;
};

export default GroupProgress;
