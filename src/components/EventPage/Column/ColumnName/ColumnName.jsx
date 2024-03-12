import React from "react";
import s from "./ColumnName.module.css";

const ColumnName = (props) => {
  return <div className={s.colname}>{props.name}</div>;
};

export default ColumnName;


