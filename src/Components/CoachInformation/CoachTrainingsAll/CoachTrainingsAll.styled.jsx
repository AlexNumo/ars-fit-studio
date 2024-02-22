import styled from "styled-components";
import DatePicker from 'react-datepicker';

export const WrapperCoachInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const StyledDatePicker = styled(DatePicker)`
  /* Додавання ваших власних стилів тут */
  /* Наприклад: */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background-color: inherit;
  box-shadow: inset 0px 0px 22px -10px rgba(128, 0, 0, 1);
  margin: 3px;
`;

export const ChooseBTN = styled.button`
  width: 100px;
  border-radius: 12px;
  margin: 3px;
  background-color: #a29090;
`;

export const WrapperCoachTrainings = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid;
  border-radius: 12px;
  margin: 5px;
  padding: 5px;
`;