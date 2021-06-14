import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;

  h1 {
    font-weight: normal;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
  }

  div {
    display: flex;
    align-items: center;
    margin: 1rem 1rem;
  }
`;

export const MenuBurg = styled.div`
  width: 85vh;
  height: 100vh;
  top: -1rem;
  left: -3rem;
  position: fixed;
  z-index: 1;
  background-color: var(--pink);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

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
`;
