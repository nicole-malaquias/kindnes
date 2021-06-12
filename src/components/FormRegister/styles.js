import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--purplePink);
  border-radius: 10px;
  h2 {
    color: var(--white);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        :hover, :focus {
            background-color: var(--purple);
        }
    }
  }
`;
export const Terms = styled.div`
  padding: 0.5rem;
  label {
      margin-left: 0.5rem;
  }
  p {
    color: red;
    margin-top: 1rem;
    font-size: 1rem;
  }
`;