import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    img { 
      display: none;
    }
  };
`;
