import styled from "styled-components";

export const WrapperBuyTicket = styled.div`
	position: relative;
  margin-top: 50px;
`;

export const BuyTicketBTN = styled.button`
  box-shadow: 3px 4px 0px 0px #899599;
	background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#606567;
	font-family:Arial;
	font-size:17px;
  font-weight: bold;
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
`;