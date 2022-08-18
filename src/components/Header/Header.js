import './Header.scss';

import logo from '../../assets/images/logo/BrainFlix-logo.svg'


function Header() {
    return (
      <div className="header">
        <img src={logo} />
      </div>
    );
  }


export default Header

