import React from "react";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import Logo from "../../assets/svg/logo.svg";
import NavIcon from "../NavIcon/NavIcon";

const Header = ({ displayMenu, menuIsDisplayed }) => {
  return (
    <header className={classes.header}>
      <NavIcon displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <h1 aria-label="The Dolce Vita">
        <img src={Logo} className={classes.logo} alt="logo" />
      </h1>
      <div className={classes.link}>
        <BookingLink />
      </div>
    </header>
  );
};

export default Header;
