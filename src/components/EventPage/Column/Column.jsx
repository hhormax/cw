import React from "react";
import s from "./Column.module.css";
import ColumnName from "./ColumnName/ColumnName";
import ColumnTask from "./ColumnTask/ColumnTask";

const Column = (props) => {
  return (
    <div className={s.fullcolumn}>
      <ColumnName name={props.name} />
      <div className={s.column}>
        <ColumnTask />
        <ColumnTask />
        <ColumnTask />
      </div>
    </div>
  );
};

export default Column;
