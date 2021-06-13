import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: var(--white);
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 0.7rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Category = styled.div`
  /* display: flex;
  flex-direction: row; */
`;
export const ContainerGroups = styled.div`
  display: flex;
  justify-content: space-between;
`;
