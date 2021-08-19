import React from "react";
import classes from "./Carrousel.module.css";
import RestaurantView from "../RestaurantView/RestaurantView";

const Carrousel = () => {
  return (
    <div className={classes.carrousel}>
      <div className={classes["carrousel-main"]}>
        <RestaurantView />
      </div>
    </div>
  );
};

export default Carrousel;
