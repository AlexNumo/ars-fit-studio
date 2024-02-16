import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(to right, #e66465, #9198e5);
  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.5);
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  /* background-color: #ffb74d; */
  margin: 10px;
`;

export const InputLabel = styled.label`
  margin: 5px 0;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const WrapperInputForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const WrapperShawPassword = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 35px;
  margin-right: 20px;
`;