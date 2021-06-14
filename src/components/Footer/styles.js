import styled from "styled-components";

export const Container = styled.div`
  background: var(--backgroundFooter);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;

  h2 {
    border: 1px solid var(--purplePink);
    border-radius: 1rem;
    margin: 0rem 1.8rem;
    padding: 0.2rem 1.4rem;

    :hover {
      background-color: #8674aa63;
      a {
        color: #523983;
      }
    }
  }

  a {
    font-size: 1.5rem;
    color: var(--purpleDetails);
  }
  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    margin-top: 1rem;
  }
`;
