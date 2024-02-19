import React, { useEffect, useState } from "react";
import { clientAPI } from "../../../service/axios.users";
import { MdOutlineDone } from "react-icons/md";
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import {
  WrapperUserInfo,
  OKbutton
} from './ConfirmSeasonTickets.styled';

const ConfirmSeasonTickets = () => {
  const [dataSeasonTickets, setDataSeasonTickets] = useState([]);
  const [confirmedTickets, setConfirmedTickets] = useState([]);
  const options = { timeZone: 'Europe/Kiev', weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

  const getDataCoach = async () => {
    return await clientAPI.OnGetSeasonTicketsNotConfirm();
  }

  useEffect(() => {
    getDataCoach().then(result => setDataSeasonTickets(result));
  }, []);

  const convertDateToUkrainianFormat = (utcDateString) => {
      const utcDate = new Date(utcDateString);
      const localDate = new Date(utcDate.getTime() + (utcDate.getTimezoneOffset() * 60000) + (3 * 3600000)); // UTC+3
      const year = localDate.getFullYear();
      const month = ('0' + (localDate.getMonth() + 1)).slice(-2);
      const day = ('0' + localDate.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
  };

  const handleConfirmSeasonTicket = async (idSeasonTicket, idUser) => {
    const selectedDateValue = new Date().toLocaleString('en-US', options);
    
    if (!confirmedTickets.includes(idSeasonTicket)) {
      await clientAPI.OnSeasonTicketConfirm(idSeasonTicket, idUser, selectedDateValue).then(() => {
        setConfirmedTickets([...confirmedTickets, idSeasonTicket]);
        
      })
      }
  };

  const isTicketConfirmed = (idSeasonTicket) => {
    return confirmedTickets.includes(idSeasonTicket);
  };
  

  console.log(dataSeasonTickets)

  return (
    <>
      <h3>Підтвердження абонементів</h3>
      <div style={{overflow: 'auto', height: '540px'}}>
        <ol >
          {dataSeasonTickets && dataSeasonTickets.flat().map((item, index) => (
            <WrapperUserInfo key={index}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <span>{item.userName} {item.userSurname}</span>
                  <a href={`tel:${item.tel}`}>
                    <BsFillTelephoneFill style={{ fill: '#544949', marginLeft: '10px' }} size={11} />
                  </a>
                  {item.userInstagram === '-' ? '' :
                  <a href={`https://www.instagram.com/${item.userInstagram}`} target="_blank" rel="noopener noreferrer">
                    <BsInstagram style={{ fill: '#544949', marginLeft: '10px' }} size={11}/>
                  </a>}
                </div>
                  <p>{item.nameSeasonTicket} ({item.price} грн.)</p>
                  {item.confirmation === false ?
                    <p>Не підтверджено</p> :
                    <p>Підтверджено</p>}
                  <p>Дата звернення: {convertDateToUkrainianFormat(item.dateChoose)}</p>
                  {isTicketConfirmed(item.idSeasonTicket) ? 
                    <MdOutlineDone fill="green" size={30}/> : 
                    <OKbutton onClick={() => handleConfirmSeasonTicket(item.idSeasonTicket, item.idUser)}>Підтвердити</OKbutton>
                  }
                  </div>
                  </WrapperUserInfo>
                ))}
        </ol>
      </div>
    </>
  )
};

export default ConfirmSeasonTickets;