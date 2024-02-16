import styled from "styled-components";

export const WrapperFooter = styled.div`
  position: relative;
  top: 90px;
  /* height: 400px; */
  border-top: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const SocialLinks = styled.div`
  margin-top: 20px;
  height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  & .icon{
    width: 40px;
    height: 40px;
    fill: #1060a5;
    margin: 10px;
  }
`;

export const PolconLink = styled.div`
  & a{
    /* margin-top: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    color: 1060a5;
  }
`;