import { useGroup } from "../../Providers/Group";
const GroupProgress = () => {
  const { goalHowMuch } = useGroup();
  return <>{goalHowMuch && <span>{goalHowMuch}</span>}</>;
};

export default GroupProgress;
