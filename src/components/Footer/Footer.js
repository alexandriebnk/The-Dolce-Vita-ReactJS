import React, { useContext } from "react";
import classes from "./Footer.module.css";
import SiteContext from "../../store/SiteContext";

const Footer = () => {
  const {
    address,
    icons: { instagram },
  } = useContext(SiteContext);

  return (
    <footer className={classes.footer}>
      <p>{address}</p>
      <img src={instagram} alt="instagram-icon" draggable="false" />
    </footer>
  );
};

export default Footer;
