import React, { useState, useEffect } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import {
  GoogleLoginStyled,
  FrameAnimation,
  ButtonUser,
  UserGooglePhoto,
  UserMenu,
  LogoutBTN
} from './Auth.styled';
import jwtDecode from 'jwt-decode';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  // console.log(user)
  const handleShowModalMenu = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleCloseModalMenu = () => {
    const userMenu = document.getElementById('closing');
    if (userMenu) {
      userMenu.classList.remove('opening'); 
      userMenu.classList.add('closing'); 
      setTimeout(() => {
        setOpen(false);
      }, 400);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModalMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (open) {
        const userMenu = document.querySelector('.userMenu');
        if (userMenu && !userMenu.contains(event.target)) {
          handleCloseModalMenu();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  const handleLogout = (e) => {
    e.preventDefault();
    googleLogout();
    setUser(null);
    handleCloseModalMenu(); // Закрити модальне вікно після виходу
  };
  
  return (
    <GoogleLoginStyled>
      {!user &&
        <GoogleLogin
          useOneTap
          auto_select
          size='large'
          type='icon'
          width='120px'
          onSuccess={(credentialResponse) => {
            let userObject = jwtDecode(credentialResponse.credential);
            setUser(userObject);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      }
      <FrameAnimation>
        {user &&
          <ButtonUser onClick={handleShowModalMenu} className='userMenu'>
            <UserGooglePhoto src={user.picture} alt="user" className='userMenu'/>
          </ButtonUser>
        }
        {open &&
          <UserMenu id='closing' className='opening'>
            {/* <UserGooglePhoto src={user.picture} alt="user" onClick={handleLogout}/> */}
            <LogoutBTN onClick={handleLogout} className='userMenu'>Logout</LogoutBTN>
          </UserMenu>
        }
      </FrameAnimation>
    </GoogleLoginStyled>
  );
};

export default Auth;
