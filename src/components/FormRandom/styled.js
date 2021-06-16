import styled from "styled-components";

export const ContainerModalRandom = styled.div`
  z-index: 1;
  background: rgba(221, 204, 225, 0.8);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`;

export const ContainerButtonRandom = styled.div`
  display: flex;
  button {
    margin: 15px;
  }
`;
export const FormRandom = styled.div`
  z-index: 3;
  background: #9780a5;
  height: 55vh;
  width: 80vw;
  position: relative;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    text-align: center;
  }

  select {
    margin: 5px;
    height: 1.85rem;
    width: 6.25rem;
    border: none;
    background: var(--white);
    font-size: 1.2rem;
    border-radius: 10px;
  }
  label {
    color: var(--white);
    font-size: 2rem;
  }
  button {
    width: 5.6rem;
    height: 2.5rem;
  }
  input {
    border-radius: 10px;
    height: 1.85rem;
    width: 18.75rem;
    margin: 5px;
    font-size: 1.2rem;
  }

  .x {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 50vh;
  }
`;
