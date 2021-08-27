import React, { useState } from "react";
import classes from "./Carrousel.module.css";
//import RestaurantView from "../RestaurantView/RestaurantView";
import datas from "../../assets/datas";

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={classes.carrousel}>
      <div className={classes["carrousel-main"]}>
        {datas.carrousel.map((item, index) => (
          <div key={`${item.id}`} className={classes["carrousel-view-item"]}>
            <h2
              key={`${item.id}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`${classes["carrousel-view-title"]} ${
                index === activeIndex ? classes["active-title"] : null
              }`}
            >
              <span>0{index + 1}</span>
              {item.type}
            </h2>
            <div className={classes["carrousel-view-content"]}>
              <img
                src={item.src}
                key={`${item.type}-${index}`}
                className={`${classes["carrousel-view-img"]} ${
                  index === activeIndex ? classes["active-img"] : null
                }`}
                alt={`${item.type}`}
                draggable="false"
              />
              {/*<div
                key={`${item.title}-${index}`}
                className={`${classes["carrousel-view-infos-layout"]} ${
                  index === activeIndex ? classes["active-layout"] : null
                }`}
              >
                <RestaurantView item={item} key={`${item.type}-${index}`} />
              </div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
