import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import datas from "../../assets/datas";

const Menu = () => {
  const menuItems = [
    { icon: datas.menu.starters.icon, name: datas.menu.starters.name },
    { icon: datas.menu.salads.icon, name: datas.menu.salads.name },
    { icon: datas.menu.main.icon, name: datas.menu.main.name },
    { icon: datas.menu.desserts.icon, name: datas.menu.desserts.name },
    { icon: datas.menu.brunch.icon, name: datas.menu.brunch.name },
    { icon: datas.menu.cocktails.icon, name: datas.menu.cocktails.name },
  ];
  return (
    <div className={classes.menu}>
      <ul className={classes["menu-list"]}>
        {menuItems.map((item) => (
          <li key={item.name} className={classes["menu-item"]}>
            <Link to={`/menu/${item.name}`}>
              <img src={item.icon} alt={`food-icon-${item.name}`} />
              <h4>{item.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
