import styled from "styled-components";

const LogoPosition = styled.div`
  position: fixed;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 84px;
  width: 100%;
  /* margin-bottom: 10px; */
  /* border-bottom: 1px solid; */
  background: linear-gradient(to right, #e66465, #9198e5);
  z-index: 5;
`;

const LogoStudio = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 35px;
  /* color: #986e70; */
  color:  #1060a5;

  margin: 0;
  /* z-index: -1; */
`;

const LogoSandra = styled.p`
  font-family: 'Philosopher', sans-serif;
  /* font-family: 'Signika Negative', sans-serif; */
  font-weight: 400;
  font-size: 18px;
  /* margin-top: -10px; */
  color: #1060a5;
  margin: 0;
  /* z-index: -1; */
`;

export {
  LogoPosition,
  LogoStudio,
  LogoSandra
}