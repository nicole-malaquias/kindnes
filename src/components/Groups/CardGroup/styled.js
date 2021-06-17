import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  width: 90%;
  float: right;
  margin: 3px;
  min-height: 2rem;
  border-radius: 20px;
  cursor: pointer;

  p {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 768px) {
    width: 37vw;
    height: 7vh;

    p {
      font-size: 1.2rem;
    }
  }
`;
