import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--purplePink);
  padding: 1rem;
  border-radius: 10px;
  width: 300px;

  h2 {
    color: var(--white);
  }
  p {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: var(--white);
      text-align: center;
    }
  }
  button {
    margin-top: 30px;
    :hover {
      background-color: var(--purple);
    }
  }
`;
