import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--purpleOpacity);
  padding: 1rem;
  border-radius: 10px;
  width: 300px;

  h2 {
    color: var(--purplePink);
    margin-bottom: 1rem;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 5px;
    :hover {
      background-color: var(--purple);
    }
  }
`;