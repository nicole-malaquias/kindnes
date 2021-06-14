import styled from "styled-components";

export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 220px;

  border-radius: 10px;
  border: 1px solid pink;
  position: absolute;
  background: var(--pink);
  margin-top: 10px;
  top: 380px;
  margin-left: 50px;
  p {
    font-weight: bolder;
    margin-bottom: 10px;
    color: var(--black);
  }
`;
export const ContainerMyProgress = styled.div`
  height: 100px;
  width: 100px;
`;
