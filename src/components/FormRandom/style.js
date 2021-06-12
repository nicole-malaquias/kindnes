import styled from "styled-components";

const ContainerModalRandom = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: var(--purpleOpacity);
  width: 400px;
  height: 400px;
  margin-bottom: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    color: var(--white);
  }
  button {
    width: 120px;
    height: 40px;
    margin-top: 25px;
  }
  select {
    border: none;
    background: var(--white);
    font-size: 1.2rem;
    margin-top: 25px;
    width: 120px;
    height: 40px;
  }
  h1 {
    color: white;
    margin: 25px;
  }
`;

export default ContainerModalRandom;
