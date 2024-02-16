import { createGlobalStyle } from 'styled-components';
// import Verdana from './assets/fonts/verdana.ttf';
// import VerdanaBold from './assets/fonts/verdanab.ttf';

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: 'Verdana';
  src: url(}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Verdana';
  src: url() format('truetype');
  font-weight: 700;
}

@media screen and (max-width: 767px) {
  .hideOnMobile {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .showOnMobile {
    display: none !important;
  }
} */

:root {
  /* --main-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --blue-txt-color: #264061;
  --accent-color: #FC842D;
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;
  --border-color: #e0e0e0;
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms; */

  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1280px;
}

/* *,
*::before,
*::after {
  box-sizing: border-box;
} */


body {
  min-height: 100%;
  scroll-behavior: smooth; 
  font-family: 'Verdana';
  font-style: normal;  
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: var(--main-text-color);
}



body,
h1,
h2,
h3,
p,
ul,
li
 {
  margin: 0;
}


ul{
  list-style: none;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}



/* input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
} */


/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
} */
/* input[type=number]{
    -moz-appearance: textfield;
} */

.active_btn{
  background-color: #007bff !important;
  color: #ffffff !important;
}

.PhoneInputInput{
  border: none;
  height: 35px;
  border-radius: 5px;
}

.visited{
  background-color: #95e688;
}

.canceled{
  background-color: #e2617b;
}

.canceledTrainings{
  color: #ed0a37;
}

.visitedTrainings{
  color: #168a04;
}

`;

export default GlobalStyle;
