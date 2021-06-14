import styled from "styled-components";

export const Container = styled.div`
  background: var(--backgroundFooter);
  padding: 10px 16px;
  width: 100vw;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid var(--purplePink);
    border-radius: 1rem;
    margin: 0rem 1.8rem;
    width: 10vw;
    a {
      color: var(--purpleDetails);
    }
    :hover {
      background-color: #8674aa63;
    }
  }
`;