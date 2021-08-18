import React from "react";
import classes from "./RestaurantView.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";

const RestaurantView = ({ item, index }) => {
  return (
    <div className={classes["restaurant-view"]}>
      <h2 className={classes["restaurant-view-title"]}>
        <span>0{index + 1}</span>
        {item.type}
      </h2>
      <div className={classes["restaurant-view-content"]}>
        <img
          src={item.src}
          className={classes["restaurant-view-img"]}
          alt="restaurant"
        />
        <aside className={classes["restaurant-view-infos-layout"]}>
          <InfosLayout title={item.title} text={item.text} icon={item.icon} />
        </aside>
      </div>
    </div>
  );
};

export default RestaurantView;
