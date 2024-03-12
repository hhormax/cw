import React from "react";
import s from "./ColumnTask.module.css";

const ColumnTask = (props) => {
  return <div className={s.task}>{props.task}</div>;
};

export default ColumnTask;
