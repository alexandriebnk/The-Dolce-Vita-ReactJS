import React from "react";
import classes from "./CustomGuestsInput.module.css";
import GuestsImg from "../../assets/svg/guests.svg";

const CustomGuestsInput = () => {
  return (
    <div className={classes.guests}>
      <img src={GuestsImg} alt="guests" className={classes["guests-img"]} />
      <div className={classes["guests-count"]}>
        <p className={classes.minus}>-</p>
        <p className={classes.number}>1</p>
        <p className={classes.plus}>+</p>
      </div>
    </div>
  );
};

export default CustomGuestsInput;
