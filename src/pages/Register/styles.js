import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  > div {
    &:first-child {
      align-self: flex-start;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex: 1;
  @media only screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
