import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  @media only screen and (max-width: 768px) {
    height: 74vh;
    padding: 1rem;
    img {
      display: none;
    }
  } ;
`;
