import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.colorButton === "purple"
      ? `var(--purple)`
      : props.colorButton === "purplePink"
      ? `var(--purplePink)`
      : props.colorButton === "white"
      ? `var(--white)`
      : `var(--pink)`};

  color: ${(props) =>
    props.color === "white" ? `var(--white)` : `var(--black)`};

  color: var(--white);
  border: none;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  transition: 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "100%")};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
