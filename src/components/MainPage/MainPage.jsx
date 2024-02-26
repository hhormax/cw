import React from "react";
import s from'./MainPage.module.css';
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";


const MainPage = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.content}>
          <Navbar />
          <Content />
        </div>
    </div>
  );
};

export default MainPage;