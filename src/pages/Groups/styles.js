import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &:first-child {
      align-self: flex-start;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  background: var(--white);
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 2px solid var(--purplePink);
  margin-right: 2rem;
  border-radius: 0.7rem;
  option {
    color: var(--black);
    background: var(--white);
    display: flex;
    padding: 0px 2px 1px;
  }
`;

export const Category = styled.div`
  margin-bottom: 1rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-right: 1rem;
    label {
      font-size: 1.5rem;
      font-family: Montserrat;
    }

    > div {
      display: flex;
      flex-direction: row;
    }
    button {
      padding: 5px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
