import React from "react";
import classes from "./DishItem.module.css";
//import InfosLayout from "../InfosLayout/InfosLayout";

const DishItem = ({ item, icon }) => {
  return (
    <div className={classes["dish-item"]}>
      <img
        src={item.src}
        className={classes["dish-item-image"]}
        alt="dish-item"
        draggable="false"
      />
      {/*<div className={classes["dish-item-infos-layout"]}>
        <InfosLayout
          title={item.title}
          text={item.text}
          price={item.price}
          icon={icon}
        />
      </div>*/}
    </div>
  );
};

export default DishItem;
