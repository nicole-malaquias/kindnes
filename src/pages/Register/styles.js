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
  @media only screen and (max-width: 768px) {
    height: 74vh;
    padding: 1rem;
    > div {
      > img {
      display: none;
    }
  } ;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
`;