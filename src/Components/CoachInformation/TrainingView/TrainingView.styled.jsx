import styled from "styled-components";

export const SelectTrainings = styled.select`
  background-color: inherit;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  height: 35px;
  border: 2px solid #4a4d53;
  margin-top: 10px;
`;

export const ChangeButton = styled.button`
	box-shadow: 3px 4px 0px 0px #899599;
	background:linear-gradient(to bottom, #d7ddd5 5%, #8d9a8d 100%);
  /* margin-right: 20px; */
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:14px;
  padding: 4px 10px;
  margin: 5px;
	text-decoration:none;
	text-shadow:0px 1px 0px #e1e2ed;

  :hover {
    background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color:#bab1ba;
  }
  :active {
    position:relative;
    top:1px;
}`;

export const WrapperListSchedule = styled.div`
  display: flex;
`