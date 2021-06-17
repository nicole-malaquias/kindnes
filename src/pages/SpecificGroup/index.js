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
  Header,
  GroupActivitieContainer,
  BoxBtns,
  DescriptionBox,
  ActivitiesBox,
} from "./styles";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { configConfetti } from "../../utils";
import Confetti from "react-dom-confetti";

const SpecificGroup = () => {
  const { token } = useAuthy();
  const { groupId, getGroup, isSubscribe, group, goal } = useGroup();
  const [isVisible, setIsVisible] = useState(false);
  const [subConfetti, setSubConfetti] = useState(false);

  const handleSubscribe = () => {
    setSubConfetti(true);
    api
      .post(`groups/${groupId}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroup();
        setSubConfetti(false);
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

        <Content>
          <ActivitiesBox>
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
                <>
                  <Button
                    width="150px"
                    colorButton="purplePink"
                    handleClick={handleSubscribe}
                  >
                    Subscribe
                  </Button>
                  <Confetti active={subConfetti} config={configConfetti} />
                </>
              )}
              <DescriptionBox>
                <Button handleClick={handleClick}>Description</Button>
                <Description isVisible={isVisible}>
                  <p>{goal.title}</p>
                </Description>
              </DescriptionBox>
            </BoxBtns>
            <GroupActivities />
          </ActivitiesBox>
          <GroupActivitieContainer>
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
