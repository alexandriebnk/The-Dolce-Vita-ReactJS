import React, { useRef } from "react";
import classes from "./Slider.module.css";
import Arrow from "../Arrow/Arrow";
import DishItem from "../DishItem/DishItem";

const Slider = ({ datas }) => {
  const sliderItems = useRef();
  const slide = useRef();

  const nextSlide = () => {
    const width = slide.current.getBoundingClientRect().width;
    const { left, right } = sliderItems.current.getBoundingClientRect();
    console.log(window.innerWidth, right);
    if (window.innerWidth <= right) {
      sliderItems.current.style.transform = `translateX(${left - width}px)`;
    }
  };

  const previousSlide = () => {
    const width = slide.current.getBoundingClientRect().width;
    const { left, right } = sliderItems.current.getBoundingClientRect();
    console.log(window.innerWidth, right);
    if (left < 0) {
      sliderItems.current.style.transform = `translateX(${left + width}px)`;
    }
  };

  return (
    <div className={classes.slider}>
      <div className={classes["slider-arrows"]}>
        <div className={classes["slider-arrow-left"]} onClick={previousSlide}>
          <Arrow direction="left"/>
        </div>
        <div className={classes["slider-arrow-right"]} onClick={nextSlide}>
          <Arrow direction="right"/>
        </div>
      </div>
      <div className={classes["slider-items"]} ref={sliderItems}>
        {datas.items.map((item, index) => (
          <div
            className={classes["slider-items-child"]}
            ref={slide}
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
