import React from "react";
import classes from "./Grid.module.css";
import DishItem from "../DishItem/DishItem";

const Grid = ({ datas }) => {
  return (
    <div className={classes.grid}>
      <div className={classes["grid-items"]}>
        {datas.items.map((item, index) => (
          <div
            className={classes["grid-items-child"]}
            key={`${item.title}-${index}`}
          >
            <DishItem item={item} icon={datas.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
