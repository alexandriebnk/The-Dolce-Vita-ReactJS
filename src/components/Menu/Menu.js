import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import Starters from "../../assets/svg/starters.svg";
import Salads from "../../assets/svg/salads.svg";
import Main from "../../assets/svg/main.svg";
import Desserts from "../../assets/svg/desserts.svg";
import Brunch from "../../assets/svg/brunch.svg";
import Cocktails from "../../assets/svg/cocktails.svg";

const Menu = () => {
  const menuItems = [
    { src: Starters, name: "starters" },
    { src: Salads, name: "salads" },
    { src: Main, name: "main" },
    { src: Desserts, name: "desserts" },
    { src: Brunch, name: "brunch" },
    { src: Cocktails, name: "cocktails" },
  ];
  return (
    <div className={classes.menu}>
      <ul className={classes["menu-list"]}>
        {menuItems.map((item) => (
          <li key={item.name} className={classes["menu-item"]}>
            <Link to={`/menu/${item.name}`}>
              <img src={item.src} alt={`food-icon-${item.name}`} />
              <h4>{item.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
