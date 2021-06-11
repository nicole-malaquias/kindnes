import styled from "styled-components";

const ContainerMyHabits = styled.div`
  margin-top: 150px;
  margin-left: 50px;
  width: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  opacity: 0.8;

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
`;

export default ContainerMyHabits;
