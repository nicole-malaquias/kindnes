import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  width: 55vw;
  float: right;
  margin: 3px;
  height: 30vh;
  border-radius: 20px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    width: 37vw;
    height: 7vh;
  }

  p {
    font-size: 0.8rem;
  }
`;
