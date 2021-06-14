import styled from "styled-components";

export const ContainerMyProgress = styled.div`
  width: 100px;
  height: 100px;
`;
export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid pink;
  position: absolute;
  background: var(--pink);
  left: 500px;
  top: 400px;
  p {
    font-weight: bolder;
    margin-bottom: 10px;
    color: var(--black);
  }
`;
