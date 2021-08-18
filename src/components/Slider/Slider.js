import React from "react";
import classes from "./Slider.module.css";
import Arrow from "../Arrow/Arrow";
import DishItem from "../DishItem/DishItem";

const Slider = ({ datas }) => {
  const nextSlide = () => {
    console.log("next");
  };
  const previousSlide = () => {
    console.log("previous");
  };

  return (
    <div className={classes.slider}>
      <div className={classes["slider-arrows"]}>
        <div className={classes["slider-arrow-left"]}>
          <Arrow direction="left" clickCallback={previousSlide} />
        </div>
        <div className={classes["slider-arrow-right"]}>
          <Arrow direction="right" clickCallback={nextSlide} />
        </div>
      </div>
      <div className={classes["slider-items"]}>
        {datas.items.map((item, index) => (
          <div
            className={classes["slider-items-child"]}
            key={`${item.title}-${index}`}
          >
            <DishItem item={item} icon={datas.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
