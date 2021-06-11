import { useEffect, useState } from "react";
import api from "../../services";

const GroupActivities = () => {
  const groupId = JSON.parse(localStorage.getItem("@gestao:groupId") || "");
  const [activities, setActivities] = useState([]);

  // useEffect(() => {
  //   api
  //     .get(activities/?group=${groupId}&page=1/)
  //     .then((response) => console.log("activities", response))
  //     .catch(console.log("algo de errado nao esta certo"));
  // }, []);

  return <div>Activities</div>;
};

export default GroupActivities;
