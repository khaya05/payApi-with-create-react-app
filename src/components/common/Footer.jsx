import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/twitter.svg';
import { ReactComponent as Linkedin } from '../../assets/shared/desktop/linkedin.svg';
import { links } from '../../contents';

import '../../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo-container">
            <Link to="/" aria-label='logo'>
              <Logo />
            </Link>
          </div>

          <ul className="footer__nav-links" aria-label="navigation links">
            {links.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <ul className="socials" aria-label="social media links">
          <li className="social-icon">
            <Facebook />
          </li>
          <li className="social-icon">
            <Twitter />
          </li>
          <li className="social-icon">
            <Linkedin />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
