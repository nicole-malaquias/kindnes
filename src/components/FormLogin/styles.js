import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  button {
    margin-top: 1.5rem;
    :hover {
      background-color: var(--purple);
    }
  }
   @media only screen and (min-width: 768px) {
    width: 28vw; 
    background-color: var(--purplePink);
    h2, p {
      color: var(--white);
    } 
    p {
      margin-top: 10px;
    }
`;
