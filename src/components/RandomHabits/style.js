import styled from "styled-components";

const ContainerRandomHabit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--purple);
  width: 15rem;
  height: 18vh;
  margin: 1rem;

  button {
    width: 12.5rem;
    height: 1.87rem;
  }

  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 25px;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export default ContainerRandomHabit;
