import React from "react";
import classes from "./RestaurantView.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";
import Restaurant from "../../assets/carrousel/restaurant.jpg";

const RestaurantView = () => {
  return (
    <div className={classes["restaurant-view"]}>
      <h2 className={classes["restaurant-view-title"]}>
        <span>01</span>RESTAURANT
      </h2>
      <div className={classes["restaurant-view-content"]}>
        <img
          src={Restaurant}
          className={classes["restaurant-view-img"]}
          alt="restaurant"
        />
        <aside className={classes["restaurant-view-infos-layout"]}>
          <InfosLayout />
        </aside>
      </div>
    </div>
  );
};

export default RestaurantView;
