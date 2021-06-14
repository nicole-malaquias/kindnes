import styled from "styled-components";

const ContainerRandomHabit = styled.div`
  background: var(--purple);
  width: 400px;
  height: 200px;
  left: 500px;
  top: 150px;
  margin-bottom: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  button {
    width: 120px;
  }
  h1 {
    color: white;
    font-size: 2rem;
  }
`;

export default ContainerRandomHabit;
