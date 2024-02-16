import styled from "styled-components";

export const WrapperCoachInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 5px;
  border-radius: 12px;
  padding: 3px;
  & a{
    margin: 2px;
  }
  & p{
    margin: 2px;
  }
  /* margin: 15px; */
`;


export const InputStyle = styled.input`
  background-color: inherit;
  /* border: none; */
  border-radius: 5px;
  box-shadow: inset 0px 0px 22px -10px rgba(128, 0, 0, 1);
  /* width: 100px; */
`;