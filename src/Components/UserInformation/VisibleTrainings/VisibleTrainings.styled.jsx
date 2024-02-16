import styled from "styled-components";

export const ContainerTrainings = styled.div`
  overflow: auto;
  height: 200px;
  background: linear-gradient(to right, #e66465, #9198e5);
`;

export const WrapperTraining = styled.div`
  /* position: fixed;
  top: 450px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  padding: 8px;
  transition: background-color 0.3s;
  background: linear-gradient(to right, #e66465, #9198e5);
  /* width: 306px; */

  & p {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  & p:last-child {
    width: 150px;
    /* border: 1px solid ; */
    border-radius: 8px;
  }
`;

export const ListTraining = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ;
  padding: 8px;
  transition: background-color 0.3s;

  & p {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & p:last-child {
    width: 150px;
    /* border: 1px solid ; */
    border-radius: 8px;
  }
`;
