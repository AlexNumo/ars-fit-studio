import styled from "styled-components";

export const WrapperUserInfo = styled.li`
  /* display: flex; */
  /* overflow: auto; */
  text-align: start;
  border: 1px solid;
  border-radius: 12px;
  margin: 5px 2px;
  padding: 1px 8px;
  /* & a{
    margin: 8px;
  } */
`;

export const OKbutton = styled.button`
	box-shadow: 3px 4px 0px 0px #899599;
	background: linear-gradient(to bottom, #b6e6a7 5%, #32e132 100%);
  /* margin-right: 2px; */
  margin: 5px;
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#272a2a;
	font-family:Arial;
	font-size:17px;
	padding:2px 5px;
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