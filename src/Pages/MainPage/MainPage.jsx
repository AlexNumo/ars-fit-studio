// import Auth from "./../../Components/Auth/Auth";
// import Logo from "../../Components/Logo/Logo";
import Header from "../../Components/Header/Header";
// import { Link } from 'react-router-dom'; // Імпортуйте Link з react-router-dom
import {
  Wrapper,
  WrapperInfo,
  // InfoName,
  // BTNSignupTraining
} from "./MainPage.styled";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      {/* <Auth /> */}
      <WrapperInfo>
          <h2>Ми знаємо, чого Тобі не вистачає для Досягнення здорового тіла</h2><br />
          <p>Саме тому ми створили онлайн-платформу де зібрали всі інструменти для досягнення здорового тіла та духу</p>
        {/* <Link to="https://t.me/Ars_Fit_Studio_bot"> Змініть 'to' на URL сторінки, на яку ви хочете перенаправити */}
          {/* <BTNSignupTraining> */}
            {/* Записатися на тренування */}
          {/* </BTNSignupTraining> */}
        {/* </Link> */}
      </WrapperInfo>
    </Wrapper>
  )
};

export default Main;
