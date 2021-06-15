import styled from "styled-components";

const ContainerHabit = styled.div`
  width: 220px;
  height: 40px;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
  border-radius: 5px;
  p {
    width: 100px;
    text-align: center;
    font-size: 1.2rem;
  }
  button {
    width: 40px;
    height: 30px;
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
    width: 320px;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    p {
      width: 200px;
      margin-left: 5px;
      font-size: 1.2rem;
    }

    button {
      width: 52px;
      height: 27px;
    }
    i {
      margin-right: 25px;
    }
  }
`;

export default ContainerHabit;
