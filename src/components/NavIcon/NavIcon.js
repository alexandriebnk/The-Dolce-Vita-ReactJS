import React from "react";
import classes from "./NavIcon.module.css";
import Fork from "../../assets/svg/fork.svg";
import Spoon from "../../assets/svg/spoon.svg";

const NavIcon = () => {
  return (
    <div className={classes["nav-icon"]}>
      <img src={Fork} className={classes.fork} alt="fork" />
      <img src={Spoon} className={classes.spoon} alt="spoon" />
    </div>
  );
};

export default NavIcon;
