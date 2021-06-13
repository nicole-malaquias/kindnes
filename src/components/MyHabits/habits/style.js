import styled from "styled-components";

const ContainerHabit = styled.div`
  background: var(--white);
  margin: 5px;
  width: 300px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  p {
    margin-left: 5px;
    font-size: 1.2rem;
  }
  .title {
    font-weight: bolder;
  }
  button {
    width: 80px;
  }
`;

export default ContainerHabit;
