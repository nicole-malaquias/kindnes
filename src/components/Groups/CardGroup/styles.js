import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: 100%;
  float: right;
  margin: 5px;
  height: 70px;
  border-radius: 10px;
  p {
    @media only screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: initial;
`;
