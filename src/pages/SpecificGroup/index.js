import { Redirect } from "react-router";
import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";
import api from "../../services";
import { useAuthy } from "../../Providers/Authy";

const SpecificGroup = () => {
  const { token, handleLogout } = useAuthy();

  if (token) {
    return (
      <>
        <GroupGoal />
        <GroupActivities />
        <GroupProgress />
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
export default SpecificGroup;
