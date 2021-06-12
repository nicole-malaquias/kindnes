import MyHabits from "../../components/MyHabits";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const localToken = localStorage.getItem("@gestao:token") || "";

  const history = useHistory();
  if (localToken === "") {
    history.push("/");
  }
  return (
    <div>
      <MyHabits />
    </div>
  );
};
export default Dashboard;
