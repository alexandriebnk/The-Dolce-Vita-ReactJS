import React from "react";
import classes from "./RestaurantView.module.css";
import Restaurant from "../../assets/carrousel/restaurant.jpg";

const RestaurantView = () => {
  return (
    <div className={classes["restaurant-view"]}>
      <p className={classes["restaurant-view-title"]}>
        <span>01</span>RESTAURANT
      </p>
      <img
        src={Restaurant}
        className={classes["restaurant-view-img"]}
        alt="restaurant"
      />
    </div>
  );
};

export default RestaurantView;
