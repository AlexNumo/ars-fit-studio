import styled from "styled-components";

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & input {
    background-color: inherit;
    border-radius: 5px;
    box-shadow: inset 0px 0px 22px -10px rgba(128, 0, 0, 1);
    margin: 5px;
    height: 15px;
    width: 100%;
    ::-webkit-input-placeholder{
      color: #0000;
    }
  }
`;

export const WrapperUserInfo = styled.li`
  text-align: start;
  border: 1px solid;
  border-radius: 12px;
  margin: 5px 2px;
  padding: 1px 8px;
  & a{
    margin: 8px;
  }
`;