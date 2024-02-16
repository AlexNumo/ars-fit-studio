import styled, { keyframes } from "styled-components";
import { color } from "../../../assets/color";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

  const slideOut = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

const GoogleLoginStyled = styled.div`
  /* position: fixed;
  top: 28px;
  left: 5px; */
  z-index: 10;
`;

const FrameAnimation = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
`;

const ButtonUser = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background-color: #0000;
  padding: 0;
`;

const UserGooglePhoto = styled.img`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background-color: #0000;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  border-radius: 22px;
  background-color: ${color.menu};
`;

const UserMenu = styled.div`
  position: relative;
  top: 0px; /* Змініть це значення, щоб дотримуватися розташування "FrameAnimation" */
  left: 0;
  width: 100px; /* Задайте бажану ширину для анімації */
  height: 40px;
  border: 0;
  border-radius: 24px;
  background-color: ${color.menu};
  /* background-color: radial-gradient(circle, #e7d392, #ecb9ab); */
  z-index: -9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  &.closing {
    animation: ${slideOut} 0.5s ease; /* Анімація на закриття */
  }
  &.opening {
    animation: ${slideIn} 0.5s ease; /* Додайте анімацію "slideIn" */
  }
`;

const LogoutBTN = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 10px;
  top: 20px;
  right: 0px;
  border-radius: 22px;
  border: 1px solid;
  width: 40px;
  height: 18px;
  margin-right: 5px;
  margin-left: 5px;
  background-color: #bcb0b0;
`;

export {
  GoogleLoginStyled,
  FrameAnimation,
  ButtonUser,
  UserGooglePhoto,
  UserMenu,
  LogoutBTN,
};
