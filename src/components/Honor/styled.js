import styled from "styled-components";

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

  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--purpleDetails);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 5rem;
  }
  i {
    animation: neon 2s alternate infinite ease-in-out;
  }

  h1 {
    z-index: 2;
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
  @media only screen and (min-width: 768px) {
    h1 {
      margin-top: 1.2rem;
    }
  }
`;
