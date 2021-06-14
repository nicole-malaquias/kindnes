import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--purplePink);
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 6rem;
  height: 100vh;
  width: 70vw;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  color: var(--black);
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    width: 50vw;
  }
`;
