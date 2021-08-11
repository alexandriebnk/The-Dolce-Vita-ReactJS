import React from "react";
import classes from "./CarrouselMobile.module.css";
import RestaurantViewMobile from "../RestaurantViewMobile/RestaurantViewMobile";
import Restaurant from "../../assets/carrousel/restaurant.jpg";

const CarrouselMobile = () => {
  return (
    <div className={classes["carrousel-mobile"]}>
      <div className={classes["carrousel-mobile-wrapper"]}>
        <div className={classes["carrousel-mobile-titles"]}>
          <h2 className={classes["carrousel-mobile-title"]}>
            <span>01</span>RESTAURANT
          </h2>
          <h2 className={classes["carrousel-mobile-title"]}>
            <span>02</span>BAR
          </h2>
          <h2 className={classes["carrousel-mobile-title"]}>
            <span>03</span>POOL
          </h2>
        </div>
        <div className={classes["carrousel-mobile-img-container"]}>
          <img
            src={Restaurant}
            className={classes["carrousel-mobile-img"]}
            alt="restaurant"
          />
        </div>
      </div>
      <div className={classes["carrousel-mobile-content"]}>
        <RestaurantViewMobile />
      </div>
    </div>
  );
};

export default CarrouselMobile;
