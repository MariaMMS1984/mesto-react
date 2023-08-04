import React from 'react';
import logo from '../images/Vector__header.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Место"></img>
        </header>
    );
}

export default Header;