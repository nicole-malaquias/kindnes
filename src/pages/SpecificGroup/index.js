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
  const { token } = useAuthy();
  const { groupId, getGroup, isSubscribe, group } = useGroup();

  const handleSubscribe = () => {
    api
      .post(`groups/${groupId}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroup();
      });
  };

  const handleUnsubscribe = () => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroup();
      });
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line
  }, []);

  if (token && groupId) {
    return (
      <>
        <h1>{group.name}</h1>
        {isSubscribe ? (
          <Button handleClick={handleUnsubscribe}>Unsubscribe</Button>
        ) : (
          <Button handleClick={handleSubscribe}>Subscribe</Button>
        )}
        <GroupGoal />
        <GroupActivities />
        <GroupProgress />
      </>
    );
  } else if (token && !groupId) {
    return <Redirect to="/groups" />;
  } else {
    return <Redirect to="/login" />;
  }
};
export default SpecificGroup;
