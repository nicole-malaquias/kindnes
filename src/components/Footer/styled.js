import styled from "styled-components";

export const Container = styled.div`
  background: var(--backgroundFooter);
  padding: 10px 16px;
  width: 100%;
  margin-top: 1rem;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
    margin: 0rem 1rem;
    width: 20vw;

    a {
      color: var(--purpleDetails);
    }
    :hover {
      background-color: #8674aa63;
    }
  }
`;
