import React from "react";
import classes from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={classes.description}>
      <h2>Le titre de cette description</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s
      </p>
    </div>
  );
};

export default Description;
