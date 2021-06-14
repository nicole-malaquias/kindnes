import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--purplePink);
  border-radius: 10px;
  width: 20vw;
  height: 80%;
  h2 {
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    label  {
      display: none;
    }
    input {
      border-radius: 10px;
      border: none;
      padding: 16px;
      margin-top: 10px;
    }
    button {
      :hover,
      :focus {
        background-color: var(--purple);
      }
    }
  }
  p {
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    background-color: initial;
    h2 {
      color: var(--purplePink);
    }
    p {
      color: var(--purpleDetails);
    }
    flex: 1;
  }
`;
export const Terms = styled.div`
  padding: 10px;
  input + label {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;
