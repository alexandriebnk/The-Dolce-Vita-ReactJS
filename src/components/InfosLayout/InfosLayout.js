import React from "react";
import classes from "./InfosLayout.module.css";
import Description from "../Description/Description";
import Salad from "../../assets/svg/salads.svg";

const InfosLayout = ({ infosLayoutIcon }) => {
  return (
    <div className={classes["infos-layout"]}>
      <div className={classes["infos-layout-description"]}>
        <Description />
        <div className={classes["infos-layout-price"]}>$18.00</div>
      </div>
      <img
        src={Salad}
        className={classes["infos-layout-icon"]}
        alt="salad-icon"
      />
    </div>
  );
};

export default InfosLayout;
