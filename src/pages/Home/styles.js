import styled from "styled-components";
import rafiki from "../../assets/rafiki.png";
export const Container = styled.div`
  padding: 0 4rem;

  .Carrosel {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #8674aa;
      border-radius: 10px;
      max-width: 80vh;
      margin: 0 auto;
    }

    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: -6rem;
  height: 100vh;
  width: 100%;

  p {
    font-size: 1.8rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    font-weight: normal;
    color: #dba5f3;
  }
`;

export const Background = styled.div`
  background: url(${rafiki}) no-repeat center;
  background-size: contain;
  width: 100%;
  height: 100vh;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 1.5rem;
    margin-top: 3rem;
  }
`;
