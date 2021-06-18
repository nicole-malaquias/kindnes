import styled from "styled-components";

export const ContainerFormHabits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(221, 204, 225, 0.8);
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
export const FormHabits = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #9780a5;
  height: 55vh;
  width: 90vw;
  border-radius: 10px;

  select {
    margin: 5px;
    height: 2rem;
    width: 10rem;
    border: none;
    background: white;
    font-size: 1.2rem;
    border-radius: 10px;
  }
  label {
    color: white;
    font-size: 2rem;
  }
  button {
    width: 6rem;
    height: 2em;
    margin: 1rem 0;
  }
  input {
    border-radius: 10px;
    border: none;
    height: 3rem;
    width: 18rem;
    margin: 5px;
    font-size: 1.2rem;
  }

  .closed {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 50vh;
  }
`;
