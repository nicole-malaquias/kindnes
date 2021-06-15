import styled from "styled-components";
import rafiki from "../../assets/rafiki.png";

export const Container = styled.div`
  padding: 0 4rem;

  .Carrosel {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .Carrosel {
      display: flex;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--purplePink);
        border-radius: 10px;
        max-width: 80vh;
        margin: 0 auto;
      }

      padding: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -8rem;
  height: 100vh;
  width: 100%;

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    font-weight: normal;
    color: var(--pink);
  }

  div {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    margin-top: -6rem;

    p {
      font-size: 1.8rem;
    }

    div {
      flex-direction: row;
    }
  }
`;

export const Background = styled.div`
  @media only screen and (min-width: 768px) {
    background: url(${rafiki}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100vh;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 1rem;
    margin-top: 1.5rem;

    :hover {
      border: 3px solid var(--pink);
    }
  }

  @media only screen and (min-width: 768px) {
    button {
      margin-top: 3rem;
    }
  }
`;
