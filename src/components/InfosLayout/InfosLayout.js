import React from "react";
import classes from "./InfosLayout.module.css";
import Description from "../Description/Description";

const InfosLayout = ({ title, text, price, category }) => {
  return (
    <div className={classes["infos-layout"]}>
      <div className={classes["infos-layout-description"]}>
        <Description title={title} text={text} />
        <p className={classes["infos-layout-price"]}>{price}</p>
      </div>
      <div className={classes["infos-layout-icon-container"]}>
        <img
          src={`/images/svg/${category}.svg`}
          className={classes["infos-layout-icon"]}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default InfosLayout;
