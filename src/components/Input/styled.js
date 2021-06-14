import styled from "styled-components";

export const Container = styled.div`
  label {
    display: none;
  }
  input {
    border-radius: 10px;
    padding: 16px;
    margin-top: 10px;
    width: 100%;
  }
  p {
    color: var(--purple);
  }
  @media only screen and (min-width: 768px) {
    p {
      color: var(--white);
    }
  }
`;