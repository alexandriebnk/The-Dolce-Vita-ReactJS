import React, { useState } from "react";
import classes from "./CarrouselMobile.module.css";
import RestaurantViewMobile from "../RestaurantViewMobile/RestaurantViewMobile";
import datas from "../../assets/datas";

const CarrouselMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={classes["carrousel-mobile"]}>
      <div className={classes["carrousel-mobile-wrapper"]}>
        <div className={classes["carrousel-mobile-titles"]}>
          {datas.carrousel.map((item, index) => (
            <h2
              key={`${item.type}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`${classes["carrousel-mobile-title"]} ${
                index === activeIndex ? classes["active-title"] : null
              }`}
            >
              <span>0{index + 1}</span>
              {item.type}
            </h2>
          ))}
        </div>
        <div className={classes["carrousel-mobile-img-container"]}>
          {datas.carrousel.map((item, index) => (
            <img
              src={item.src}
              key={`${item.type}-${index}`}
              className={`${classes["carrousel-mobile-img"]} ${
                index === activeIndex ? classes["active-img"] : null
              }`}
              alt={`${item.type}`}
            />
          ))}
        </div>
      </div>

      <div className={classes["carrousel-mobile-content"]}>
        {datas.carrousel.map((item, index) => (
          <div
            key={`${item.type}-${index}`}
            className={`${classes["carrousel-mobile-view"]} ${
              index === activeIndex ? classes["active-view"] : null
            }`}
          >
            <RestaurantViewMobile item={item} key={`${item.type}-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrouselMobile;
