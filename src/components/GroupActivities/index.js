import { useGroup } from "../../Providers/Group";

const GroupActivities = () => {
  const { activities } = useGroup();

  return (
    <>
      {activities &&
        activities.map((elem, index) => <li key={index}>{elem.title}</li>)}
    </>
  );
};

export default GroupActivities;
