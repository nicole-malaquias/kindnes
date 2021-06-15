import styled from "styled-components";

const ContainerHabit = styled.div`
  width: 13.75rem;
  height: 2.5rem;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
  border-radius: 5px;
  p {
    width: 6.25rem;
    text-align: center;
    font-size: 1.2rem;
  }
  button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
  .title {
    font-weight: bolder;
  }
  i {
    margin-right: 15px;
  }
  @media only screen and (min-width: 768px) {
    margin: 5px;
    width: 20rem;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    p {
      width: 12.5rem;
      margin-left: 5px;
      font-size: 1.2rem;
    }

    button {
      width: 3.35rem;
      height: 2.5rem;
    }
    i {
      margin-right: 1.5rem;
    }
  }
`;

export default ContainerHabit;
