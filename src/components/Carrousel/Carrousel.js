import React from "react";
import classes from "./Carrousel.module.css";
import RestaurantView from "../RestaurantView/RestaurantView";
import datas from "../../assets/datas";

const Carrousel = () => {
  return (
    <div className={classes.carrousel}>
      <div className={classes["carrousel-main"]}>
        {datas.carrousel.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={classes["carrousel-item"]}
          >
            <RestaurantView item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
