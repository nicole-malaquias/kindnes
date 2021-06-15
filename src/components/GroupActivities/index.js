import { useEffect, useState } from "react";
import api from "../../services";

const GroupActivities = () => {
  const groupId = localStorage.getItem("@gestao:groupId") || "";
  const [activities, setActivities] = useState([]);

  return <div>Activities</div>;
};

export default GroupActivities;
