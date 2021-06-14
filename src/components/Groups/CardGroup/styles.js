import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: 50vw;
  float: right;
  margin: 5px;
  height: 70px;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 30vw;
  }

  p {
    font-size: 15px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  cursor: pointer;
`;
