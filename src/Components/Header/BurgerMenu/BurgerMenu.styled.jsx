import { createGlobalStyle } from 'styled-components';
// import { color } from "../../assets/color";

const BurgerMenuStyle = createGlobalStyle`
#menu__toggle {
  opacity: 0;
  visibility: hidden;
}

#menu__toggle:checked~.menu__btn>span {
  transform: rotate(-45deg); /* Змінено на від'ємний кут */
}

#menu__toggle:checked~.menu__btn>span::before {
  top: 0;
  transform: rotate(0);
}

#menu__toggle:checked~.menu__btn>span::after {
  top: 0;
  transform: rotate(-90deg); /* Змінено на від'ємний кут */
}

#menu__toggle:checked~.menu__box {
  visibility: visible;
  right: 0; /* Змінено на праву сторону */
  left: initial; /* Змінено на праву сторону */
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 35px;
  right: 15px; /* Змінено на праву сторону */
  /* left: 15px; */

  width: 26px;
  height: 26px;

  cursor: pointer;
  z-index: 1;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;

  width: 100%;
  height: 2px;

  background-color: #616161;

  transition-duration: .25s;
}

.menu__btn>span::before {
  content: '';
  top: -8px;
}

.menu__btn>span::after {
  content: '';
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%; /* Змінено на праву сторону */
  left: initial; /* Змінено на праву сторону */
  width: 220px;
  height: 100%;
  margin: 0;
  padding: 75px 0;
  list-style: none;
  background: radial-gradient(circle, #e7d392, #ecb9ab);
  box-shadow: -10px 2px 8px rgba(0, 0, 0, .2); /* Змінено на від'ємне значення */
  border-top-left-radius: 22px;
  transition-duration: .5s;
}

.menu__item {
  display: block;
  padding: 6px 10px;
  margin: 8px 10px;
  border: 1px solid;
  border-radius: 22px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .5s;
}

.menu__item:hover {
  background-color: #CFD8DC;
}`;

export default BurgerMenuStyle;
