import React from "react";
import classes from "./ReservationFrame.module.css";
import Description from "../Description/Description";
import Form from "../Form/Form";
import Map from "../Map/Map";

const ReservationFrame = () => {
  return (
    <div className={classes.reservation}>
      <p className={classes["reservation-p"]}>BOOK A TABLE</p>
      <div className={classes["reservation-frame"]}>
        <div className={classes["reservation-user"]}>
          <Description />
          <Form />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ReservationFrame;
