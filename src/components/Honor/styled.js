import styled from "styled-components";

export const ContainerHonor = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
  background: #8d95b8;
  margin-top: 400px;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  right: 5%;
  top: 3rem;
  p {
    margin-left: 5px;
    font-size: 1.2rem;
  }
  .title {
    font-weight: bolder;
  }
  button {
    width: 80px;
  }
  i {
    animation: neon 1s alternate infinite ease-in-out;
  }
  h1 {
    color: rgb(255, 223, 0);
    position: absolute;
    margin-bottom: 100px;
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
