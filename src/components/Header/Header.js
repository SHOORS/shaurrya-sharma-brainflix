import './Header.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/BrainFlix-logo.svg'

function Header() {
    return (
      <div className="header">
        <Link to="/">
          <img src={logo} className="header__logo"/>
        </Link>
      </div>
    );
  }

export default Header

