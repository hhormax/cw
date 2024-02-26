import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../Header/images/logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
      </div>
    </header>
  );
};

export default Header;