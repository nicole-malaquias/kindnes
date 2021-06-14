import { useEffect, useState } from "react";
import api from "../../services";

const GroupGoal = () => {
  const groupId = localStorage.getItem("@gestao:groupId") || "";
  const [goal, setGoal] = useState([]);

  return <div>Atividades</div>;
};

export default GroupGoal;
