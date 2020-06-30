import React from 'react';
import * as my from '../../my-data.json';

import './header.scss';
import SwitchMode from '../SwitchMode';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="heading">{my.title}</h1>
        <SwitchMode />
      </div>
      {/* <div className="header__links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div> */}
    </header>
  );
};

export default Header;
