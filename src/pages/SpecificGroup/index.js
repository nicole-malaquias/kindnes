import { Redirect } from "react-router";
import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";
import api from "../../services";

const SpecificGroup = () => {
  const token = JSON.parse(localStorage.getItem("@gestao:token") || "");

  // fazer a mudança do groupId se nao dara erro
  if (token) {
    return (
      <>
        <GroupGoal />
        <GroupActivities />
        <GroupProgress />
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
export default SpecificGroup;
