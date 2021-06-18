import styled, { keyframes } from "styled-components";

export const animationCard = keyframes`
  from{
    transform: translateX(-100px)
  }
  to{
    
    transform: translateX(0px)
  }
`;

export const ContainerMyHabits = styled.div`
  background: #a6b8f3;
  width: 80%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 0.5rem auto;
  animation: ${animationCard} 1s;

  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 1.52rem;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export const AddNewHabit = styled.div`
  background: var(--purplePink);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 1rem;
  margin: 0.5rem;
  max-width: 12rem;

  h4 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: lighter;
    color: var(--black);
  }

  h4:hover {
    color: white;
  }
  @media only screen and (min-width: 768px) {
    width: 18.75rem;
    padding: 5px;
  }
`;

export const Habits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 15rem;
  margin: 2rem auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: var(--purpleDetails);
    border-radius: 5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 5rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 1rem 0;
  }
`;
