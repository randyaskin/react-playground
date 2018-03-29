import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <header className="header__title">My React App</header>
    </div>
  );
}

export default Header;