import React from "react";
import classes from "./Slider.module.css";
import Arrow from "../Arrow/Arrow";
import DishItem from "../Dish/DishItem";

const Slider = () => {
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
        <div className={classes["slider-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["slider-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["slider-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["slider-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["slider-items-child"]}>
          <DishItem />
        </div>
        {/*<DishItem />
        <DishItem />
        <DishItem />*/}
      </div>
    </div>
  );
};

export default Slider;
