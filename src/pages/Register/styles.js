import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
  @media only screen and (max-width: 768px) {
    height: 74vh;
    img {
      display: none;
    }
  } ;
`;
