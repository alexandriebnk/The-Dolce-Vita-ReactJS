import React from "react";
import classes from "./Description.module.css";

const Description = ({ title, text }) => {
  return (
    <div className={classes.description}>
      <h3>{title}</h3>
      <aside>{text}</aside>
    </div>
  );
};

export default Description;
