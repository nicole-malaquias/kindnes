import styled from "styled-components";

export const Goal = styled.div`
  background-color: var(--purple);
  width: 90%;
  border-radius: 20px;
  margin-top: 20px;
  h3 {
    color: var(--white);
  }
  text-align: center;
  @media only screen and (min-width: 768px) {
    min-width: 100%;
    height: 50%;
  }
`;
