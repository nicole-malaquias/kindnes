import styled from "styled-components";

export const ContainerActivities = styled.ul`
  background-color: var(--pink);
  padding: 0.5rem;
  width: 85vw;
  border-radius: 4px;
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
    border-radius: 5px;

    button {
      font-size: 20px;
      width: 100px;
      height: 20px;
    }
  }
  li + li {
    margin-top: 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  p {
    font-family: "Montserrat" sans-serif;
  }
`;
