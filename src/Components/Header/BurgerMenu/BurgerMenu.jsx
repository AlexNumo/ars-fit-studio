import { Link } from 'react-router-dom';
import BurgerMenuStyle from './BurgerMenu.styled';
import React from 'react';


const BurgerMenu = () => {
  return (
    <div>
      <BurgerMenuStyle/>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li><Link id="randomColorBox" className="menu__item" to="/">Головна</Link></li>
          <li><Link id="randomColorBox" className="menu__item" to="/login">Мій кабінет</Link></li>
          {/* <li><a id="randomColorBox" className="menu__item" href="###">Команда</a></li> */}
          <li><a id="randomColorBox" className="menu__item" href="https://www.instagram.com/arsfit_studio">Блог</a></li>
          <li><a id="randomColorBox" className="menu__item" href="#contacts">Контакти</a></li>
        </ul>
      </div>
    </div>
  )
};

export default BurgerMenu;

