import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="heading heading_big header__title">
          Панель администрирования
        </h1>
        <a href="#" className="header__logout">
          Вернуться на сайт
        </a>
      </header>
    );
  }
}

export default Header;
