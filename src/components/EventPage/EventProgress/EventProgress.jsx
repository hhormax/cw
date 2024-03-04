import React from "react";
import s from "./EventProgress.module.css";
import ProgressNumber from "../ProgressNumber/ProgressNumber";

const EventProgress = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.progress}></div>
      <ProgressNumber />
    </div>
  );
};

export default EventProgress;
