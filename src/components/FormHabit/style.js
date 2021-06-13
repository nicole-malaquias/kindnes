import styled from "styled-components";

const ContainerFormHabits = styled.div`
  z-index: 5;

  .formHabits {
    background: var(--purpleOpacity);
    height: 500px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      color: white;
      font-size: 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      select {
        margin: 5px;
        height: 30px;
        width: 100px;
        border: none;
        border-radius: 10px;
        background: white;
        font-size: 1.2rem;
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
    }
    .x {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
`;

export default ContainerFormHabits;
