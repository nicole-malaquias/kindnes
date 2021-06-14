import styled from "styled-components";

const ContainerRandomHabit = styled.div`
  background: var(--purple);
  width: 500px;
  height: 300px;
  margin-bottom: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  right: 5%;
  button {
    width: 120px;
  }
  h1 {
    color: white;
    font-size: 2rem;
  }
`;

export default ContainerRandomHabit;
