import React from "react";
import s from "./EventPage.module.css";
import Navbar from "../Navbar/Navbar";
import EventName from "./EventName/EventName";
import EventProgress from "./EventProgress/EventProgress";
import Column from "./Column/Column";

const Event = () => {
  return (
    <div className={s.event}>
      <Navbar />
      <div className={s.content}>
        <EventName />
        <EventProgress />
        <div className={s.columns}>
          <Column name={"TO DO"}/>
          <Column name={"IN PROGRESS"}/>
          <Column name={"DONE"}/>
        </div>
      </div>
    </div>
  );
};

export default Event;
