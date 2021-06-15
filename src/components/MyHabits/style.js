import styled from "styled-components";

export const ContainerMyHabits = styled.div`
  background: #a6b8f3;
  margin: 0 auto;
  width: 15.625rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 1.52rem;
  }

  @media only screen and (min-width: 768px) {
    width: 31.25rem;
    height: 18.75rem;
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
  width: 13.7rem;
  height: 1.87rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    width: 15.62rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: lighter;
    color: var(--back);
    height: 3.12rem;
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
  margin-top: 7px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.75rem;
  height: 12.5rem;
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    margin-top: 10px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25rem;
    height: 28.12rem;
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
    button {
      width: 3.4rem;
    }
  }
`;
