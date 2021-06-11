import { useEffect, useState } from "react";
import api from "../../services";

const GroupProgress = () => {
  const groupId = useState(
    JSON.parse(localStorage.getItem("@gestao:groupId") || "")
  );
  const [progress, setProgress] = useState("");

  // useEffect(() => {
  //   api
  //     .get(goals/${groupId}/)
  //     .then((response) => console.log("progress", response.how_much_achieved))
  //     .catch(console.log("algo de errado nao esta certo"));
  // }, []);

  return <div>Progress</div>;
};

export default GroupProgress;
