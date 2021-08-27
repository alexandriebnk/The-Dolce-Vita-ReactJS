import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import NavIcon from "../NavIcon/NavIcon";
import SiteContext from "../../store/SiteContext";

const Header = ({ displayMenu, menuIsDisplayed }) => {
  const {
    icons: { logo },
  } = useContext(SiteContext);

  return (
    <header className={classes.header}>
      <NavIcon displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <Link to="/">
        <h1 aria-label="The Dolce Vita">
          <img
            src={logo}
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
