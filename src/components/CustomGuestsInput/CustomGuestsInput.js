import React, { useContext } from "react";
import classes from "./CustomGuestsInput.module.css";
import ReservationContext from "../../store/ReservationContext";

const CustomGuestsInput = () => {
  const {
    icons: { guests },
  } = useContext(ReservationContext);

  return (
    <div className={classes.guests}>
      <img src={guests} alt="guests" draggable="false" />
      <div className={classes["guests-count"]}>
        <p className={classes.minus}>-</p>
        <p className={classes.number}>1</p>
        <p className={classes.plus}>+</p>
      </div>
    </div>
  );
};

export default CustomGuestsInput;
