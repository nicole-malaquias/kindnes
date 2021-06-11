import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
from {
  left: -50%;

}
to {
  left: 0;
}`;
const RightToLeft = keyframes`
from {
  right: -50%;
}
to {
  right: 0;
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
export const Card = styled.div`
  border-radius: 20px;
  background-color: #8674aa;
  padding: 1rem;
  width: 200px;
  margin-right: ${(props) => props.side === "left" && "30px"};
  margin-left: ${(props) => props.side === "right" && "30px"};
  position: relative;

  ::after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 2px;
    ${(props) => (props.side === "left" ? `right: -30px;` : `left: -30px;`)}
    background-color: #263238;
  }
`;
