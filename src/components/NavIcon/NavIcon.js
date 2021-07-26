import React, { useRef } from "react";
import classes from "./NavIcon.module.css";
import Fork from "../../assets/svg/fork.svg";
import Spoon from "../../assets/svg/spoon.svg";

const NavIcon = ({ displayMenu, menuIsDisplayed }) => {
  const forkRef = useRef();
  const spoonRef = useRef();

  const onClick = () => {
    displayMenu();
    if (menuIsDisplayed) {
      forkRef.current.style.transform = "rotate(0deg)";
    } else {
      forkRef.current.style.transform = "rotate(45deg)";
    }
  };

  return (
    <div className={classes["nav-icon"]} onClick={onClick}>
      <img src={Fork} ref={forkRef} className={classes.fork} alt="fork" />
      <img src={Spoon} ref={spoonRef} className={classes.spoon} alt="spoon" />
    </div>
  );
};

export default NavIcon;
