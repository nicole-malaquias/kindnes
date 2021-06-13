import styled from "styled-components";

const ContainerCardExplication = styled.div`
  z-index: 5;
  position: absolute;
  top: 300px;
  background: var(--purple);
  width: 300px;
  height: 200px;
  margin-bottom: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 20px;
  filter: drop-shadow(0 0 0 rgb(7, 197, 134));
  color: var(--white);
  button {
    margin-top: 10px;
  }
`;

export default ContainerCardExplication;
