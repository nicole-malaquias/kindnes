import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;

  h1 {
    font-weight: normal;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    :focus {
      outline: none;
    }

    a {
      padding: 1rem;
    }

    img {
    }
  }

  div {
    display: flex;
    align-items: center;
    margin: 1rem 3rem;
  }
`;

export const MenuBurg = styled.div`
  width: 60vh;
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
  justify-content: end;

  img {
    padding: 2rem;
  }
`;
