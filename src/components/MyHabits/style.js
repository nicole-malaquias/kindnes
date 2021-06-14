import styled from "styled-components";

const ContainerMyHabits = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  background: #a6b8f3; // não sei o nome que dar
  border-radius: 10px;
  margin-left: 50px;

  .habits {
    margin-top: 10px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 350px;
    height: 350px;
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
  }
  h1 {
    color: white;
    margin: 15px;
  }
  .Add-new-Habit {
    background: var(--purplePink);
    width: 300px;
    padding: 5px;

    h4 {
      text-align: center;
      font-weight: lighter;
      color: var(--back);
    }
  }
`;

export default ContainerMyHabits;
