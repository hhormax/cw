import React from "react";
import s from'./Navbar.module.css';
import { OpenButton } from "../OpenButton/OpenButton";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <OpenButton />
    </div>
  );
};

export default Navbar;