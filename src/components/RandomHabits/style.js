import styled from "styled-components";

const ContainerRandomHabit = styled.div`
  background: var(--purple);
  width: 15.62rem;
  height: 9.375rem;
  margin-bottom: 1.5rem;
  top: 22rem;
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
    width: 12.5rem;
    height: 1.87rem;
  }
  h1 {
    margin-top: 10px;
    color: var(--white);
    font-size: 25px;
  }
  @media only screen and (min-width: 768px) {
    width: 31.25rem;
    height: 12.5rem;
    margin-top: 6rem;
    left: 18.8rem;

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
