import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "../../assets/svg/insta.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>414 Bay Avenue, Los Angeles, CA</p>
      <img src={InstagramIcon} alt="instagramIcon" />
    </div>
  );
};

export default Footer;
