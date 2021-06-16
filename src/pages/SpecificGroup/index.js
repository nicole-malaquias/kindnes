import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";
import api from "../../services";
import { useAuthy } from "../../Providers/Authy";
import { useGroup } from "../../Providers/Group";
import { Redirect } from "react-router";
import { useEffect } from "react";
import Button from "../../components/Button";

const SpecificGroup = () => {
  const { token, handleLogout, userId } = useAuthy();
  const { groupId, getGroup, isSubscribe, group } = useGroup();

  const handleSubscribe = () => {
    api
      .post(`groups/${groupId}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getGroup();
        // toastSuccess("Yeah! You are now a member of this group");
      });
  };

  const handleUnsubscribe = () => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getGroup();
        // toastSuccess("Unsubscribe successfully");
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getGroup();
  }, []);

  if (token) {
    return (
      <>
        <h1>Blaaaaaaaaa</h1>
        <h1>{group.name}</h1>
        {isSubscribe ? (
          <Button handleClick={handleUnsubscribe}>Unsubscribe</Button>
        ) : (
          <Button handleClick={handleSubscribe}>Subscribe</Button>
        )}
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
