import { Link } from 'react-router-dom';
import {
  WrapperFooter
} from './Footer.styled';
import { BsInstagram, BsTelegram, BsFillTelephoneFill } from 'react-icons/bs';
import {
  SocialLinks,
  PolconLink
} from './Footer.styled';

const Footer = () => {
  const linkInstagram = 'https://www.instagram.com/arsfit_studio/';
  const linkTelegram = 'https://t.me/Ars_Fit_Studio_bot';
  const linkPhone = 'tel:+380981058240';
  const linkPolcon = 'polcon';
  const linkUmov = 'umov';
  const linkEmail = 'email:ars.fit.studio@gmail.com';

  return (
    <WrapperFooter id="contacts">
      <Link to="/login">Особистий кабінет</Link>
      <SocialLinks>
        <div>
          <Link to={linkInstagram}>
            <BsInstagram className='icon' />
          </Link>
          <Link to={linkTelegram}>
            <BsTelegram className='icon'/>
          </Link>
          <Link to={linkPhone}>
            <BsFillTelephoneFill className='icon'/>
          </Link>
        </div>
        <PolconLink>
          <Link to={linkPolcon} className='link'>
            Політика конфіденційності
          </Link>
          <Link to={linkUmov} className='link'>
            Правила і умови
          </Link>
          <Link to={linkEmail} className='link'>
            ars.fit.studio@gmail.com
          </Link>
        </PolconLink>
      </SocialLinks>
    </WrapperFooter>
  )
};

export default Footer;