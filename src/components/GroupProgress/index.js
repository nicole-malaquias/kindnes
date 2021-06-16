import { useGroup } from "../../Providers/Group";
const GroupProgress = () => {
  const { goalProgress } = useGroup();
  return <>{goalProgress && <span>{goalProgress}</span>}</>;
};

export default GroupProgress;
