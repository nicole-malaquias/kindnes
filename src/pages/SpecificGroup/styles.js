import styled, { css, keyframes } from "styled-components";

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
    text-align: center;
    margin-bottom: 5px;
  }
`;
export const GroupActivitieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    display: none;
    border-radius: 50%;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 75%;
    gap: 1rem;

    img {
      display: block;
      height: 50vh;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  height: auto;

  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const BoxBtns = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;

  button {
    margin-left: 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;
const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;
export const Description = styled.div`
  text-align: center;
  width: 40vw;
  background-color: #d3d3d3;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid var(--darkGray);

  animation: ${(props) =>
    props.isVisible
      ? css`
          ${appearFromLeft} 1s
        `
      : ""};

  display: ${(props) => (props.isVisible ? "block" : "none")};
  @media only screen and (min-width: 768px) {
    display: block;
    width: 400px;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
`;
