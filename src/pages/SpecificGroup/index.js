import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";
import api from "../../services";
import { useAuthy } from "../../Providers/Authy";
import { useGroup } from "../../Providers/Group";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import TeamWork from "../../assets/teamwork.gif";
import {
  Container,
  Content,
  Description,
  Goal,
  Header,
  GroupActivitieContainer,
  BoxBtns,
  DescriptionBox,
} from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const SpecificGroup = () => {
  const { token } = useAuthy();
  const { groupId, getGroup, isSubscribe, group, goal } = useGroup();
  const [isVisible, setIsVisible] = useState(false);
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

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line
  }, []);

  if (groupId) {
    return (
      <Container>
        <Header>
          <Menu />
          <h2>{group.name}</h2>
        </Header>

        <BoxBtns>
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
          <DescriptionBox>
            <Button handleClick={handleClick}>Description</Button>
            <Description isVisible={isVisible}>
              <p>{goal.title}</p>
            </Description>
          </DescriptionBox>
        </BoxBtns>
        <Content>
          <GroupActivitieContainer>
            <GroupActivities />
            <div>
              <GroupProgress />
              <img src={TeamWork} alt="Team work" />
            </div>
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
