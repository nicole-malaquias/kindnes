import styled from "styled-components";

export const Container = styled.div`
  background: var(--backgroundFooter);
  padding: 0.5rem 1rem;
  width: 100%;
  bottom: 0;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid var(--purplePink);
    border-radius: 1rem;
    margin: 0rem 1.8rem;
    width: 8rem;
    a {
      color: var(--purpleDetails);
    }
    :hover {
      background-color: #8674aa63;
    }
  }
`;