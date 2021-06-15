import styled from "styled-components";

export const ContainerMyHabits = styled.div`
  background: #a6b8f3;
  margin: 0 auto;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 25px;
  }

  @media only screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: center;
    background: #a6b8f3; // não sei o nome que dar
    border-radius: 10px;
    margin-left: 50px;
    h1 {
      color: white;
      margin: 15px;
    }
  }
`;

export const AddNewHabit = styled.div`
  background: var(--purplePink);
  width: 220px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    width: 250px;
    font-size: 1.2rem;
    text-align: center;
    font-weight: lighter;
    color: var(--back);
    height: 50px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    padding: 5px;

    h4 {
      text-align: center;
      font-weight: lighter;
      color: var(--back);
    }
  }
`;

export const Habits = styled.div`
  margin-top: 7px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 200px;
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    margin-top: 10px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 450px;
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
    button {
      width: 55px;
    }
  }
`;
