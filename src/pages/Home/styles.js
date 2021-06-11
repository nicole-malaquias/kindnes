import styled from "styled-components";
import rafiki from "../../assets/rafiki.png";
export const Container = styled.div`
  padding: 0 60px;

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

    padding: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: -60px;
  height: 100vh;
  width: 100%;

  p {
    font-size: 25px;
    line-height: 24px;
    font-weight: normal;
    color: #dba5f3;
  }
`;

export const Background = styled.div`
  background: url(${rafiki}) no-repeat center;
  background-size: contain;
  width: 100%;
  height: 400px;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 15px;
    margin-top: 35px;
  }
`;
