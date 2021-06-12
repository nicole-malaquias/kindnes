import styled from "styled-components";

const ContainerMyHabits = styled.div`
  margin-top: 150px;
  margin-left: 50px;
  min-height: 250px;
  min-width: 400px;
  width: 500px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  background: #a6b8f3;
  h1 {
    color: white;
    margin: 15px;
  }
  .Add-new-Habit {
    background: var(--purplePink);
    width: 400px;
    padding: 5px;

    h4 {
      text-align: center;
      font-weight: lighter;
      color: var(--back);
    }
  }
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }
`;

export default ContainerMyHabits;
