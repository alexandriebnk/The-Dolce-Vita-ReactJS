import React from "react";
import classes from "./Footer.module.css";
import datas from "../../assets/datas";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>414 Bay Avenue, Los Angeles, CA</p>
      <img src={datas.site.icons.instagram} alt="instagram-icon" draggable="false" />
    </footer>
  );
};

export default Footer;
