import React from "react";
import classes from "./DishItem.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";

const DishItem = ({ item, category }) => {
  return (
    <div className={classes["dish-item"]}>
      <img
        src={item.src}
        className={classes["dish-item-image"]}
        alt="dish-item"
      />
      <div className={classes["dish-item-infos-layout"]}>
        <InfosLayout
          title={item.title}
          text={item.text}
          price={item.price}
          category={category}
        />
      </div>
    </div>
  );
};

export default DishItem;
