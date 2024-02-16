import styled from "styled-components";
// import SandraBack from "../../assets/picture/Sandra_back.jpg";
// import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  /* background: linear-gradient(to right, #e66465, #9198e5);
  height: 1000px;
  z-index: -99; */
`;

export const WrapperInfo = styled.div`
  position: relative;
  top: 90px;
  background-color: #ffffff;
  border-radius: 22px;
  border: 1px solid;
  padding: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
  text-align: start;
  background: linear-gradient(to right, #fad0c4, #ffd1ff 50%, #fad0c4);
  & h2{
    font-weight: 700;
    font-size: 19px;
    text-transform: uppercase;
  }
  & p{
    font-weight: 400;
    font-size: 14px;
  }
`;