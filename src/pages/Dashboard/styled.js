import styled from "styled-components";

export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: space-between;
  }
`;

export const Box1 = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
`;
