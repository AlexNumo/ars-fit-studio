import styled from "styled-components";
// import SelectSearch from 'react-select-search';

export const WrapperModal = styled.div`
  position: absolute;
  top: 250px;
  left: 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;

`;

export const Modal = styled.div`
  margin-top: 85px;
  background: #dfc9c9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const CloseBTN = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -15px;
  margin-right: -15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const WrapperBTN = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
`;

export const OKbutton = styled.button`
	box-shadow: 3px 4px 0px 0px #899599;
	background:linear-gradient(to bottom, #b6e6a7 5%, #32e132 100%);
  margin-right: 20px;
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#272a2a;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #e1e2ed;

  :hover {
    background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color:#bab1ba;
  }
  :active {
    position:relative;
    top:1px;
  }
  &:disabled {
    background: #ccc; /* Новий колір фону для вимкненої кнопки */
    border-color: #aaa; /* Новий колір рамки для вимкненої кнопки */
    color: #999; /* Новий колір тексту для вимкненої кнопки */
    cursor: not-allowed; /* Зміна курсору для вимкненої кнопки */
  }
`;

export const NonButton = styled.button`
	box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color:#c62d1f;
	border-radius:18px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;

  :hover {
    background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
    background-color:#f24437;
}
  :active {
    position:relative;
    top:1px;
}`;

export const InputStyle = styled.input`
  background-color: inherit;
  /* border: none; */
  border-radius: 5px;
  box-shadow: inset 0px 0px 22px -10px rgba(128, 0, 0, 1);
  margin: 5px;
  height: 25px;
  width: 100%;
  /* width: 100px; */
`;

export const SelectTrainings = styled.select`
  background-color: inherit;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  height: 35px;
  border: 2px solid #4a4d53;
  margin-top: 10px;
`;

// export const SelectTrainingsComponent = styled(SelectSearch)`
//   .select-search-container {
//     --select-search-background: inherit;
//     --select-search-border-radius: 12px;
//     --select-search-text-align: center;
//     --select-search-width: 100%;
//     --select-search-height: 35px;
//     --select-search-border: 2px solid #4a4d53;
//     --select-search-margin-top: 10px;
//   }
// `;

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