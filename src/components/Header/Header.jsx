import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
      </div>
    </header>
  );
};

export default Header;