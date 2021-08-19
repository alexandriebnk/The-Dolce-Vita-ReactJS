import React, { useState } from "react";
import classes from "./RestaurantView.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";
import datas from "../../assets/datas";

const RestaurantView = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={classes["restaurant-view"]}>
      {datas.carrousel.map((item, index) => (
        <h2
          key={`${item.type}-${index}`}
          onClick={() => setActiveIndex(index)}
          className={`${classes["restaurant-view-title"]} ${
            index === activeIndex ? classes["active-title"] : null
          }`}
        >
          <span>0{index + 1}</span>
          {item.type}
        </h2>
      ))}

      <div className={classes["restaurant-view-content"]}>
        {datas.carrousel.map((item, index) => (
          <img
            src={item.src}
            key={`${item.type}-${index}`}
            className={`${classes["restaurant-view-img"]} ${
              index === activeIndex ? classes["active-img"] : null
            }`}
            alt={`${item.type}`}
          />
        ))}
        <div className={classes["restaurant-infos"]}>
          {datas.carrousel.map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className={`${classes["restaurant-view-infos-layout"]} ${
                index === activeIndex ? classes["active-layout"] : null
              }`}
            >
              <InfosLayout
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantView;
