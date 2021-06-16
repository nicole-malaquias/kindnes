import styled from "styled-components";

export const Container = styled.div`
  background: var(--backgroundFooter);
  padding: 10px 16px;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
    margin: 0rem 1.8rem;
    width: 12vw;
    a {
      color: var(--purpleDetails);
    }
    :hover {
      background-color: #8674aa63;
    }
  }
`;
