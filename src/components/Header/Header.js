import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import NavIcon from "../NavIcon/NavIcon";
import datas from "../../assets/datas";

const Header = ({ displayMenu, menuIsDisplayed }) => {
  return (
    <header className={classes.header}>
      <NavIcon displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <Link to="/">
        <h1 aria-label="The Dolce Vita">
          <img
            src={datas.site.icons.logo}
            className={classes.logo}
            alt="logo"
            draggable="false"
          />
        </h1>
      </Link>
      <div className={classes.link}>
        <BookingLink />
      </div>
    </header>
  );
};

export default Header;
