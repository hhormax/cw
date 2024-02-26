import React from "react";
import s from'./Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/myProfile" className = { navData => navData.isActive ? s.active : s.item }>My profile</NavLink>
        </div>
      </nav>
  );
};

export default Navbar;