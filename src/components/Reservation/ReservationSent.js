import React from "react";
import classes from "./ReservationSent.module.css";
import Description from "../Description/Description";
import CloseButton from "../CloseButton/CloseButton";
import datas from "../../assets/datas";

const ReservationSent = ({ toggle }) => {
  return (
    <div className={classes["reservation-done"]}>
      <img
        src={datas.reservation.confirmation.sent.icon}
        alt="sentImg"
        className={classes["reservation-img"]}
      ></img>
      <div className={classes["reservation-description"]}>
        <Description
          title={datas.reservation.confirmation.sent.title}
          text={datas.reservation.confirmation.sent.text}
        />
      </div>
      <div className={classes["reservation-close"]}>
        <CloseButton toggle={toggle} />
      </div>
    </div>
  );
};

export default ReservationSent;
