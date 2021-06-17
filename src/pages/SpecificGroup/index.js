import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";
import api from "../../services";
import { useAuthy } from "../../Providers/Authy";
import { useGroup } from "../../Providers/Group";
import { Redirect } from "react-router";
import { useEffect } from "react";
import Button from "../../components/Button";
import {
  Container,
  Content,
  Description,
  Goal,
  Header,
  GroupActivitieContainer,
} from "./styled";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

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
      <Container>
        <Header>
          <Menu />
          <h2>{group.name}</h2>
        </Header>
        <Content>
          <Description>

            {isSubscribe ? (
              <Button
                width="150px"
                colorButton="purplePink"
                handleClick={handleUnsubscribe}
              >
                Unsubscribe
              </Button>
            ) : (
              <Button
                width="150px"
                colorButton="purplePink"
                handleClick={handleSubscribe}
              >
                Subscribe
              </Button>
            )}
          </Description>
          <GroupActivitieContainer>
            <GroupActivities />
            <Goal>
              <GroupGoal />
              <GroupProgress />
            </Goal>
          </GroupActivitieContainer>
        </Content>
        <Footer />
      </Container>
    );
  } else if (token && !groupId) {
    return <Redirect to="/groups" />;
  } else {
    return <Redirect to="/login" />;
  }
};
export default SpecificGroup;
