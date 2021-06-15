import styled, { keyframes } from "styled-components";

export const animationMenuBurg = keyframes`
  from{
    opacity: 0;
    transform: translateX(-500px)
  }
  to{
    opacity:1;
    transform: translateX(0px)
  }
  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 1rem 0rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    width: auto;
  }

  div {
    display: flex;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0.5rem;
    justify-content: stretch;
    div {
      align-items: center;

      margin: 1rem 1rem;
    }
  }
`;

export const MenuBurg = styled.div`
  width: 100vw;
  height: 100vh;
  top: -1rem;
  left: 0rem;
  position: fixed;
  z-index: 1;
  background-color: var(--pink);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  animation: ${animationMenuBurg} 1s;

  button {
    margin-top: -10rem;
  }

  a {
    padding: 1rem;

    :hover {
      border-radius: 2rem;
      border: 1px solid var(--purplePink);
    }
  }

  #logout:hover {
    color: red;
    border-radius: 2rem;
    border: 1px solid red;
  }

  @media only screen and (min-width: 768px) {
    width: 50vw;
    top: -1rem;
    left: -3rem;
  }
`;
