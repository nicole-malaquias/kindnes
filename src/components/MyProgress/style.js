import styled from "styled-components";

export const ContainerMyProgress = styled.div`
  width: 100px;
  height: 100px;
`;
export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  width: 400px;
  /* height: 350px; */
  border: 1px solid pink;
  position: absolute;
  background: var(--pink);
  left: 500px;
  top: 400px;
  h2 {
    margin-bottom: 52px;
    color: var(--black);
  }
`;
