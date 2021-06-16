import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  > div {
    &:first-child {
      align-self: flex-start;
    }
  }

  @media only screen and (min-width: 768px) {
    > h2 {
      font-size: 4rem;
      margin: 2rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  img {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    img {
      display: block;
    }
  }
`;
