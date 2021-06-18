import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 800px);
  }
`;

export const Box1 = styled.div`
  width: 100%;
  grid-row-start: 1;
  grid-row-end: 3;
`;
