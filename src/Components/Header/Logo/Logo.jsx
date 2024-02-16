import {
  LogoPosition,
  LogoStudio,
  LogoSandra
} from './Logo.styled';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

const Logo = () => {

  return (
    <LogoPosition>
      <BurgerMenu />
      <Link to='/'>
        <LogoStudio>Ars Fit Studio</LogoStudio>
        <LogoSandra>by Sandrochka_strong</LogoSandra>
      </Link>
    </LogoPosition>
  )
};

export default Logo;