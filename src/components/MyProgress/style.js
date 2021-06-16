import styled from "styled-components";

export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 30rem;
  height: 25vh;
  border-radius: 10px;
  border: 1px solid pink;
  background: var(--pink);
  margin: 0.5rem 0;
  padding: 1rem;

  p {
    font-weight: bolder;
    margin-bottom: 10px;
    color: var(--black);
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const ContainerMyProgress = styled.div`
  height: 100px;
  width: 100px;
`;
