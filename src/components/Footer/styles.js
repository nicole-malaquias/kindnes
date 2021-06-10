import styled from "styled-components";

export const Container = styled.div`
  background: rgba(166, 184, 243, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 20px;

  h1 {
    font-weight: normal;
  }

  h2 {
    border: 1px solid #8674aa;
    border-radius: 1rem;
    margin: 0rem 1.8rem;
    padding: 0.2rem 1.4rem;
    :hover {
      background-color: #8674aa63;
      a {
        color: #523983;
      }
    }
  }

  a {
    font-size: 18px;
    color: #7481aa;
  }
  div {
    display: flex;
    align-items: center;
    margin: 5px 30px;
  }
`;
