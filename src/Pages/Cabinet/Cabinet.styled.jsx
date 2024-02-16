import styled from "styled-components";

export const ContainerCabinet = styled.div`
  margin-top: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  border-color: inherit;
  background: linear-gradient(to right, #e66465, #9198e5);
  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.5);
  margin-left: 10px;
  margin-right: 10px;
`;

export const WelcomeUserName = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 15px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const WrapperInfoUser = styled.div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #f18484, #a5aae9);
  /* background-color: aquamarine; */
  margin: 10px;
  padding: 10px;
`;

export const WrapperUserInfo = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 15px;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  & div{
    margin-left: 25px;
  }
`;

export const VisitTraining = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  & p{
    margin-left: 5px;
  }
`;

export const UserPhotoSize = styled.img`
  /* width: 40px; */
  border-radius: 50%;
`;