import React, { Component } from 'react';
import './header.component.css';
import Logo from './../logo/logo.component';
import LanguageSelector from './../languageSelector/languageSelector.component';
class Header extends Component {
  render() {
    return (
      <div className="header" >
        <Logo />
        <LanguageSelector />
      </div>
    );
  }
}

export default Header;