import styled from "styled-components";

export const ContainerSettings = styled.div`
  margin-top: 29px;
  background: linear-gradient(135deg, #8ec5fc, #e0c3fc);
  box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 20px;
`;

export const UserInformation = styled.div`
  text-align: start;
  /* display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; */
  margin-top: 20px;
  & div{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

export const InputStyle = styled.input`
  background-color: inherit;
  /* border: none; */
  border-radius: 5px;
  box-shadow: inset 0px 0px 22px -10px rgba(128, 0, 0, 1);
  /* width: 100px; */
`;

export const SelectTrainings = styled.select`
  background-color: inherit;
  border-radius: 12px;
  text-align: center;
`;