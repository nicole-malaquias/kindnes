import styled from "styled-components";

// margin : 10px
// select purplepink

export const ContainerFormHabits = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(221, 204, 225, 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormHabits = styled.form`
  z-index: 3;
  background: #9780a5;
  height: 55vh;
  width: 35vw;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  select {
    margin: 5px;
    height: 30px;
    width: 100px;
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
    width: 90px;
    height: 40px;
  }
  input {
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 300px;
    margin: 5px;
    font-size: 1.2rem;
  }

  .x {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
