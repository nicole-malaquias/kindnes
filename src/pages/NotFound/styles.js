import styled from "styled-components"; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
      flex-direction: column;
  }
`;
