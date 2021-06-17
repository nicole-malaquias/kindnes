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

  @media only screen and (min-width: 768px) {
    h2 {
      margin-top: 10px;
    }
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
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 75%;

    div {
      img {
        display: block;
        height: 50%;
        width: 100%;
        margin-top: 5vh;
        border-radius: 4px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    width: 90vw;
  }
`;

export const ActivitiesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
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
    width: 400px;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
`;
