import styled from "styled-components";

export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid pink;
  position: absolute;
  background: var(--pink);
  margin-top: 120px;
  top: 70%;
  left: 50%;
  transform: translate(-50%);

  p {
    font-weight: bolder;
    margin-bottom: 10px;
    color: var(--black);
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35rem;
    height: 17rem;
    border-radius: 10px;
    border: 1px solid pink;
    position: absolute;
    top: 7px;
    margin-left: 20rem;
    background: var(--pink);

    p {
      font-weight: bolder;
      margin-bottom: 10px;
      color: var(--black);
    }
  }
`;
export const ContainerMyProgress = styled.div`
  height: 100px;
  width: 100px;
`;
