import React from "react";
import s from "./Column.module.css";
import ColumnName from "./ColumnName/ColumnName";

const Column = (props) => {
  return <div className={s.fullcolumn}>
    <ColumnName name={props.name} />
    <div className={s.column}>

    </div>
  </div>;
};

export default Column;
