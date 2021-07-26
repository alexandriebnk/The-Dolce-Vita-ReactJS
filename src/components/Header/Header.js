import React from "react";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import Logo from "../../assets/svg/logo.svg";
import NavIcon from "../NavIcon/NavIcon";

const Header = ({ displayMenu, menuIsDisplayed }) => {
  return (
    <div className={classes.header}>
      <NavIcon displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <img src={Logo} className={classes.logo} alt="logo" />
      <div className={classes.link}>
        <BookingLink />
      </div>
    </div>
  );
};

export default Header;
