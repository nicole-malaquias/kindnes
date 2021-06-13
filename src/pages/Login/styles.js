import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 60vh;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    img {
      display: none;
    }
  }
`;
