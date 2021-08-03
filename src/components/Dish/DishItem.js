import React from "react";
import classes from "./DishItem.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";
import Salad1 from "../../assets/menu/salads/1.jpg";

const DishItem = ({ dishImage }) => {
  return (
    <div className={classes.dish}>
      <img src={Salad1} className={classes["dish-image"]} alt="dish" />
      <InfosLayout />
    </div>
  );
};

export default DishItem;
