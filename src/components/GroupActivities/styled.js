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
    span {
      margin-right: 1rem;
    }
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    padding: 0.5rem;
    border-radius: 1rem;
  }
  li + li {
    margin-top: 2px;
  }

`;
