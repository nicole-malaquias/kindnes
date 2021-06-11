import { useEffect, useState } from "react";
import api from "../../services";

const GroupGoal = () => {
  const groupId = JSON.parse(localStorage.getItem("@gestao:groupId") || "");
  const [goal, setGoal] = useState([]);

  // useEffect(() => {
  //   api
  //     .get(activities/?group=${groupId}&page=1/)
  //     .then((response) => console.log(response))
  //     .catch(console.log("algo de errado nao esta certo"));
  // }, []);

  return <div>Atividades</div>;
};

export default GroupGoal;
