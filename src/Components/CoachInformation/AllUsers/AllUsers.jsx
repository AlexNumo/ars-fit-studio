import React, { useEffect, useState } from "react";
import { clientAPI } from "../../../service/axios.users";
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import {
  WrapperSearch,
  WrapperUserInfo
} from './AllUsers.styled';

const AllUsers = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchInstagram, setSearchInstagram] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const getDataCoach = async () => {
    return await clientAPI.OnGetAllUsers();
  }

  useEffect(() => {
    getDataCoach().then(result => setDataUsers(result));
  }, []);

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  }

  const handleInstagramChange = (event) => {
    setSearchInstagram(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setSearchPhone(event.target.value);
  }

  const filteredUsers = dataUsers.filter(user => {
    const fullName = `${user.name} ${user.surname}`.toLowerCase();
    const instagram = user.instagram.toLowerCase();
    const phone = user.tel.toLowerCase();
    
    return fullName.includes(searchName.toLowerCase()) &&
           instagram.includes(searchInstagram.toLowerCase()) &&
           phone.includes(searchPhone.toLowerCase());
  });

  return (
    <>
      <h3>Всі клієнти</h3>
      <WrapperSearch>
        <input type="text" placeholder="Пошук по ПІБ" onChange={handleNameChange} />
        <input type="text" placeholder="Пошук Instagram" onChange={handleInstagramChange} />
        <input type="text" placeholder="Пошук по телефону" onChange={handlePhoneChange} />
      </WrapperSearch>
      <ol>
        {filteredUsers.map((item, index) => (
            <WrapperUserInfo key={index}>
              {item.name} {item.surname}
              <a href={`tel:${item.tel}`}>
                <BsFillTelephoneFill style={{ fill: '#544949' }} size={11} />
              </a>
              {item.instagram === '-' ? '' :
                <a href={`https://www.instagram.com/${item.instagram}`} target="_blank" rel="noopener noreferrer">
                  <BsInstagram style={{ fill: '#544949' }} size={11}/>
                </a>}
            </WrapperUserInfo>
        ))}
      </ol>
    </>
  )
};

export default AllUsers;
