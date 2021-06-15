import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  width: 300px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 30px;
    :hover {
      background-color: var(--purple);
    }
  }
   @media only screen and (min-width: 768px) {
    background-color: var(--purplePink);
    h2, p {
      color: var(--white);
    } 
    p {
      margin-top: 10px;
    }
`;
