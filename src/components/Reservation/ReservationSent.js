import React from "react";
import classes from "./ReservationSent.module.css";
import SentImg from "../../assets/svg/sent.svg";
import Description from "../Description/Description";
import CloseButton from "../CloseButton/CloseButton";

const ReservationSent = ({ toggle }) => {
  return (
    <div className={classes["reservation-done"]}>
      <img
        src={SentImg}
        alt="sentImg"
        className={classes["reservation-img"]}
      ></img>
      <Description />
      <div className={classes["reservation-close"]}>
        <CloseButton toggle={toggle} />
      </div>
    </div>
  );
};

export default ReservationSent;
