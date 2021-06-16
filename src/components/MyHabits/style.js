import styled from "styled-components";

export const ContainerMyHabits = styled.div`
  background: #a6b8f3;
  width: 80%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 0.5rem auto;

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
  :hover {
    border: 2px solid var(--pink);
  }

  h4 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: lighter;
    color: var(--back);
  }
  @media only screen and (min-width: 768px) {
    width: 18.75rem;
    padding: 5px;

    h4 {
      text-align: center;
      font-weight: lighter;
      color: var(--back);
    }
  }
`;

export const Habits = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--purpleDetails);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15rem;
  margin: 2rem auto;

  @media only screen and (min-width: 768px) {
    margin: 1rem 0;
  }
`;
