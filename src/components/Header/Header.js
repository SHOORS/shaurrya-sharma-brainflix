import './Header.scss';

import logo from '../../assets/images/logo/BrainFlix-logo.svg'

function Header() {
    return (
      <div className="header">
        <a href="/">
          <img src={logo} className="header__logo"/>
        </a>
      </div>
    );
  }

export default Header

