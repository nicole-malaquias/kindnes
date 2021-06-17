import styled from "styled-components";

const ContainerHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 35rem;
  background: var(--white);
  padding: 0.5rem;
  margin: 4px;
  border-radius: 1rem;

  p {
    text-align: left;
    font-size: 1.2rem;
  }
  button {
    min-width: 4rem;
    max-width: 4rem;
    font-size: 1.2rem;
    margin: 1rem;
  }

  span {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-weight: bolder;
  }
  i {
    margin-right: 15px;
  }
  @media only screen and (min-width: 768px) {
  }
`;

export default ContainerHabit;
