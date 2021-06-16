import styled, { keyframes } from "styled-components";

export const animationCard = keyframes`
  from{
    transform: translateX(100px)
  }
  to{
    
    transform: translateX(0px)
  }
`;

export const ContainerHonor = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #8d95b8;
  width: 80%;
  max-width: 30rem;
  height: 35vh;
  border-radius: 10px;
  margin: 0.5rem 0;
  animation: ${animationCard} 1s;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--purpleDetails);
    border-radius: 5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 5rem;
  }
  i {
    animation: neon 2s alternate infinite ease-in-out;
  }

  h1 {
    margin-top: 15rem;
    text-align: center;
    color: rgb(255, 223, 0);
    animation: neon 1s alternate infinite ease-in-out;
  }

  @keyframes neon {
    from {
      filter: drop-shadow(0 0 0 rgb(255, 223, 0));
    }
    to {
      filter: drop-shadow(0 0 10px rgb(212, 175, 55));
    }
  }
`;
