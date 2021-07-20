import React from "react";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import Logo from "../../assets/svg/logo.svg";
import NavIcon from "../NavIcon/NavIcon";

const Header = () => {
  return (
    <div className={classes.header}>
      <NavIcon />
      <img src={Logo} className={classes.logo} alt="logo" />
      <BookingLink />
    </div>
  );
};

export default Header;
