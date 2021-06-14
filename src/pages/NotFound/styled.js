import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @media only screen and (min-width: 768px) {
      & :first-child {
          align-self: baseline;
      }
  }
`;
export const Content = styled.div`
  @media only screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
  }
`;
