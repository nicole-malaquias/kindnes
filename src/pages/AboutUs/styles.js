import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
from {
  left: -50%;
  opacity: 0;
}
to {
  left: 0;
  opacity: 1;

}`;
const RightToLeft = keyframes`
from {
  right: -50%;
  opacity: 0;
}
to {
  right: 0;
  opacity: 1;
}
`;
export const Container = styled.div`
  background: rgba(166, 184, 243, 0.2);
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  height: 100%;
  & :nth-child(1){
      animation: ${leftToRight} 1s; 
  }
  & :nth-child(2){
      animation: ${leftToRight} 1.5s; 
  }
  & :nth-child(3){
      animation: ${leftToRight} 2s; 
  }
  }
`;
export const Line = styled.div`
  width: 2px;
  height: 90%;
  background-color: #263238;
`;
export const RightColumn = styled(LeftColumn)`
  & :first-child {
    animation: initial;
  }
  & :nth-child(1) {
    animation: ${RightToLeft} 1s;
  }
  & :nth-child(2) {
    animation: ${RightToLeft} 1.5s;
  }
  & :nth-child(3) {
    animation: ${RightToLeft} 2s;
  }
  ::after {
    opacity: 0;
  }
`;
