import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: var(--purplePink);
  padding: 1rem;
  width: 120px;
  margin-right: ${(props) => props.side === "left" && "30px"};
  margin-left: ${(props) => props.side === "right" && "30px"};
  position: relative;
  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  ::after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 2px;
    ${(props) => (props.side === "left" ? `right: -30px;` : `left: -30px;`)}
    background-color: var(--black);
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 225px;
    img {
      margin-right: 0.5rem;
    }
  }
`;

export const Datas = styled.div`
  padding: 0.5rem;

  p {
    margin-left: 0.2rem;
    a {
      color: var(--white);
      text-decoration: underline;
      :hover, :active {
        color: var(--black);
      }
    }
  }
`;
