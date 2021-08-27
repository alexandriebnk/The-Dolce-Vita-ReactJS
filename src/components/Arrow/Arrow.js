import React from "react";
import classes from "./Arrow.module.css";

const Arrow = ({ direction }) => {
  return (
      <svg
        className={`${classes.arrow} ${
          direction === "left" ? classes.left : classes.right
        }`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <polygon
          fill="white"
          points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"
        />
      </svg>
  );
};

export default Arrow;
