import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Auth from '../Header/Auth/Auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userSlice';
import { setSeasonTickets } from '../../Redux/seasonTicketsSlice';
import { clientAPI } from '../../service/axios.users';
import 'react-phone-number-input/style.css'
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";

import {
  Container,
  Form,
  ButtonGroup,
  Button,
  InputLabel,
  Input,
  SubmitButton,
  WrapperInputForm,
  WrapperShawPassword
} from './Login.styled';

const Login = ({ onLogin }) => {
  const [openLogin, setOpenLogin] = useState(true);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState("+380981058240");
  const [password, setPassword] = useState("74Omevet");
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const navigate = useNavigate ();
// OnRegistration
  const handleSubmit = async (e) => {
      e.preventDefault();

      const getData = openLogin
          ? await clientAPI.OnLogin(email, password)
          : openRegistration
              ? await clientAPI.OnRegistration(name, birthday, email, password)
              : null;

        if (getData) {
          const getSeasonTickets = await clientAPI.OnGetAllSeasonTickets()
          const userData = { ...getData.data, isAuthenticated: true };
          dispatch(setUser(userData));
          dispatch(setSeasonTickets(getSeasonTickets));
          localStorage.setItem('token', userData.token);

          // Додати затримку перед переходом на /cabinet (2 секунди)
          // setTimeout(() => {
              navigate('/cabinet');
          // }, 2000);
      }
  };

  const verifyToken = async (token) => {
    return await clientAPI.OnAuth(token);
  }

  const getSeasonTickets = async () => {
    return await clientAPI.OnGetAllSeasonTickets();
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      if (token) {
        try {
          const getData = await verifyToken(token);
          const getSeasonTicketsData = await getSeasonTickets();
          const userData = { ...getData.data, isAuthenticated: true };

          dispatch(setUser(userData));
          dispatch(setSeasonTickets(getSeasonTicketsData));
          navigate('/cabinet');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const verifyToken = async (token) => {
  //     return await clientAPI.OnAuth(token)
  //   }
  //   if (token) {
  //     return verifyToken(token);
  //   }
  //   return token;
  // }, [])

  const changeViewBTN = (e) => {
    e.preventDefault();
    if (e.target.id === "login") {
      setOpenRegistration(false);
      return setOpenLogin(true);
    }
    if (e.target.id === "registration") {
      setOpenLogin(false);
      return setOpenRegistration(true);
    }
  };

    // Функція для зміни стану відображення паролю
  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <ButtonGroup>
          <Button
            id="login"
            className={openLogin ? 'active_btn' : ''}
            onClick={changeViewBTN}
          >
            Вхід
          </Button>
          <Button
            id="registration"
            className={openRegistration ? 'active_btn' : ''}
            onClick={changeViewBTN}
          >
            Реєстрація
          </Button>
        </ButtonGroup>
        {openRegistration
          ?
          <WrapperInputForm>
            <InputLabel>Ім'я</InputLabel>
            <Input
              type="text"
              placeholder="ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputLabel>Дата народження</InputLabel>
            <Input
              type="date"
              placeholder="дата народження"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </WrapperInputForm>
          :
          <>
          </>
        }
        <WrapperInputForm>
          <InputLabel>Логін</InputLabel>
          <PhoneInput
            placeholder="номер телефону"
            international
            defaultCountry="UA"
            initialValueFormat="national"
            countryCallingCodeEditable={false}
            value={email}
            onChange={setEmail}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              paddingLeft: '10px',
            }} />
          Is possible: {email && isPossiblePhoneNumber(email) ? 'true' : 'false'}
        </WrapperInputForm>
        <WrapperInputForm>
          <InputLabel>Пароль</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <WrapperShawPassword>
            {showPassword ?
              <LiaEyeSolid
                onClick={toggleShowPassword}
                size={20}
              />
              :
              <LiaEyeSlashSolid
                onClick={toggleShowPassword}
                size={20}
              />}
            {/* </button> */}
          </WrapperShawPassword>
        </WrapperInputForm>
        {openLogin ?
          <SubmitButton
            type="submit"
            to='/cabinet'
          >
            Увійти
          </SubmitButton>
          : <SubmitButton
            type="submit"
            to='/cabinet'
          >
            Зареєструватися
          </SubmitButton>}
        {/* {openLogin ? <Link to='/cabinet'>Увійти</Link> : <Link to='/cabinet'>Зареєструватися</Link>} */}
      </Form>
      {/* <h3>або</h3>
      <div style={{display:'flex', justifyContent: 'center'}}>
      <Auth/>
      </div> */}
    </Container>
  );
};

export default Login;
