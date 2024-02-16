import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCabinet = styled.div`
  margin-top: 70px;
  padding: 5px;
  /* border: 1px solid #ddd; */
  /* border-radius: 8px;
  border-color: inherit; */
  /* background: linear-gradient(to right, #e66465, #9198e5); */
  /* box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.5); */
  /* margin-left: 10px;
  margin-right: 10px; */
`;

export const WelcomeUserName = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
  & span{
    font-weight: 700;
  }
`;

export const WrapperInfoUser = styled.div`
  border: 1px solid;
  border-radius: 10px;
  /* box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, #f18484, #a5aae9);
  /* background-color: aquamarine; */
  margin: 10px;
  padding: 10px;
  /* height: 500px; */
`;

export const WrapperUserInfo = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 15px;
  /* height: 100%; */
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  & div{
    margin-left: 25px;
    display: flex;
    flex-direction: column;
  }
`;

export const UserPhotoSize = styled.img`
  /* width: 40px; */
  border-radius: 50%;
  background-color: #000000;
`;

export const LinkRecord = styled(Link)`
  color: #302929;
  padding: 3px 3px;
  background: linear-gradient(to right, #e66465, #9198e5); 
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
  border: #000000 1px solid;
  text-align: center;
  /* width: 90px; */
  &:hover {
    background: linear-gradient(to right, #9198e5, #e66465); 
  }
`;

export const SettingsBTN = styled.button`
  color: #302929;
  padding: 3px 3px;
  background: linear-gradient(to right, #e66465, #9198e5); 
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
  border: #000000 1px solid;
  margin-top: 2px;
  /* margin-left: 2px; */
  /* text-align: center; */
  /* width: 90px; */

  &:hover {
    background: linear-gradient(to right, #9198e5, #e66465); 
  }
`;

export const BlockInfo = styled.div`
  text-align: center;
  margin-top: 10px;
  /* height: 500px; */
  /* overflow: hidden; */
  & p{
    margin-left: 5px;
  }
`;

export const ButtonShow = styled.button`
  background: linear-gradient(to right, #ffa69e, #fbc7d4); 
  color: #fff;
  
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  
  font-size: 16px;
  font-weight: bold;
  
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, #fbc7d4, #ffa69e); 
  }
`;