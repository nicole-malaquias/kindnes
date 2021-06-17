import styled from "styled-components";

export const ContainerActivities = styled.ul`
  background-color: var(--pink);
  padding: 0.5rem;
  width: 90%;
  border-radius: 20px;
  margin-top: 1rem;
  button {
    color: var(--white);
    padding: 2rem;
  }
  li {
    min-height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    padding: 0.5rem;
    border-radius: 1rem;

    button {
      font-size: 20px;
      width: 100px;
      height: 20px;
    }
  }
  li + li {
    margin-top: 2px;
  }
`;

export const TextBox = styled.div`
  margin: 0 auto;

  text-align: center;
`;
