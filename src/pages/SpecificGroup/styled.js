import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  h1 {
    font-size: 2rem;
  }
  h2 {
    color: var(--black);
  }
`;
export const GroupActivitieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 90%;
    gap: 1rem;
  }
`;
export const Description = styled.div`
  background-color: var(--purple);
  border-radius: 20px;
  padding: 1rem;
  width: 90%;
  color: var(--white);
  > button {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
    width: initial;
  }
`;
export const Header = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
