import React from "react";
import classes from "./Grid.module.css";
import DishItem from "../Dish/DishItem";

const Grid = () => {
  return (
    <div className={classes.grid}>
      <div className={classes["grid-items"]}>
        <div className={classes["grid-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["grid-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["grid-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["grid-items-child"]}>
          <DishItem />
        </div>
        <div className={classes["grid-items-child"]}>
          <DishItem />
        </div>
        {/*<DishItem />
        <DishItem />
        <DishItem />*/}
      </div>
    </div>
  );
};

export default Grid;
