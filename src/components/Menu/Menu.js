import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import MenuContext from "../../store/MenuContext";

const Menu = () => {
  const menu = useContext(MenuContext);
  const arrayMenu = Object.values(menu);

  return (
    <div className={classes.menu}>
      <ul className={classes["menu-list"]}>
        {arrayMenu.map((item) => (
          <li key={item.name} className={classes["menu-item"]}>
            <Link to={`/menu/${item.name}`}>
              <img
                src={item.icon}
                alt={`food-icon-${item.name}`}
                draggable="false"
              />
              <h4>{item.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
