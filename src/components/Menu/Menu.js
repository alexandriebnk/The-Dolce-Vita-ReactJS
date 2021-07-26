import React from "react";
import classes from "./Menu.module.css";
import Starters from "../../assets/svg/starters.svg";
import Salads from "../../assets/svg/salads.svg";
import Main from "../../assets/svg/main.svg";
import Desserts from "../../assets/svg/desserts.svg";
import Brunch from "../../assets/svg/brunch.svg";
import Drinks from "../../assets/svg/drinks.svg";

const Menu = () => {
  const menuItems = [
    { src: Starters, name: "starters" },
    { src: Salads, name: "salads" },
    { src: Main, name: "main" },
    { src: Desserts, name: "desserts" },
    { src: Brunch, name: "brunch" },
    { src: Drinks, name: "drinks" },
  ];
  return (
    <div className={classes.menu}>
      <ul className={classes["menu-list"]}>
        {menuItems.map((item) => (
          <li key={item.name} className={classes["menu-item"]}>
            <img src={item.src} alt={`food-icon-${item.name}`} />
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
