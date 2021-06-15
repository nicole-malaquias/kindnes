import styled from "styled-components";

const ContainerRandomHabit = styled.div`
  background: var(--purple);
  width: 250px;
  height: 150px;
  margin-bottom: 25px;
  top: 400px;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  right: 5%;
  button {
    width: 200px;
    height: 30px;
  }
  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 25px;
  }
  @media only screen and (min-width: 768px) {
    background: var(--purple);
    width: 500px;
    height: 150px;
    margin-bottom: 25px;
    left: 20%;
    top: 70%;
    transform: translate(-41%);
    button {
      width: 120px;
    }
    h1 {
      color: white;
      font-size: 2rem;
    }
  }
`;

export default ContainerRandomHabit;
